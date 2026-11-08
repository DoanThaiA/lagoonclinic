import { NextResponse } from "next/server";
import { getService } from "@/data/services";
import { EmailNotConfiguredError, emailConfig, sendEmail } from "@/lib/email/resend";
import { bookingEmail } from "@/lib/email/templates";
import { clientIp, rateLimit } from "@/lib/rate-limit";

/** Nhận yêu cầu đặt lịch và gửi email thông báo tới hộp thư CSKH qua Resend. */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Dữ liệu không hợp lệ" }, { status: 400 });
  }

  // Honeypot: bot thường điền trường ẩn này
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const name = str(body.name, 80);
  const phone = str(body.phone, 20).replace(/[\s.]/g, "");
  const serviceSlug = str(body.service, 60);
  const date = str(body.date, 10);
  const note = str(body.note, 500);

  if (name.length < 2) return NextResponse.json({ error: "Vui lòng nhập họ tên" }, { status: 422 });
  if (!/^(\+84|0)\d{9,10}$/.test(phone))
    return NextResponse.json({ error: "Số điện thoại chưa đúng định dạng" }, { status: 422 });
  if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date))
    return NextResponse.json({ error: "Ngày không hợp lệ" }, { status: 422 });

  if (!rateLimit(`booking:${clientIp(req)}`, 5)) {
    return NextResponse.json(
      { error: "Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau ít phút hoặc gọi hotline." },
      { status: 429 },
    );
  }

  const email = bookingEmail({
    name,
    phone,
    service: serviceSlug ? (getService(serviceSlug)?.name ?? serviceSlug) : "Cần bác sĩ tư vấn",
    date,
    note,
    createdAt: new Date().toISOString(),
    page: req.headers.get("referer") ?? undefined,
  });

  try {
    const { id } = await sendEmail({
      to: emailConfig().to,
      ...email,
      tags: [{ name: "type", value: "booking" }],
    });
    console.info(`[booking] email sent ${id}`);
  } catch (e) {
    if (e instanceof EmailNotConfiguredError && process.env.NODE_ENV !== "production") {
      console.warn("[booking] RESEND_API_KEY chưa cấu hình – bỏ qua gửi email (dev)", { name, phone });
      return NextResponse.json({ ok: true });
    }
    // Không để mất lead: ghi đầy đủ thông tin vào log để CSKH có thể liên hệ lại
    console.error("[booking] send email failed – LEAD:", JSON.stringify({ name, phone, service: serviceSlug, date, note }), e);
    return NextResponse.json({ error: "Hệ thống đang bận, vui lòng gọi hotline để đặt lịch." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
