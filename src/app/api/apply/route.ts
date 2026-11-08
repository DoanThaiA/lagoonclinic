import { NextResponse } from "next/server";
import { getJob } from "@/data/jobs";
import { EmailNotConfiguredError, canEmailExternalRecipients, emailConfig, sendEmail } from "@/lib/email/resend";
import { applicantConfirmationEmail, applicationEmail } from "@/lib/email/templates";
import { clientIp, rateLimit } from "@/lib/rate-limit";

/** Nhận hồ sơ ứng tuyển và gửi email tới hộp thư CSKH qua Resend (reply-to = email ứng viên). */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Dữ liệu không hợp lệ" }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const name = str(body.name, 80);
  const phone = str(body.phone, 20).replace(/[\s.]/g, "");
  const email = str(body.email, 120);
  const cv = str(body.cv, 300);
  const portfolio = str(body.portfolio, 300);
  const note = str(body.note, 1000);
  const job = getJob(str(body.job, 60));

  const isUrl = (u: string) => /^https?:\/\/\S+$/i.test(u);

  if (!job) return NextResponse.json({ error: "Vị trí không tồn tại" }, { status: 422 });
  if (name.length < 2) return NextResponse.json({ error: "Vui lòng nhập họ tên" }, { status: 422 });
  if (!/^(\+84|0)\d{9,10}$/.test(phone)) return NextResponse.json({ error: "Số điện thoại chưa đúng định dạng" }, { status: 422 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Email chưa đúng định dạng" }, { status: 422 });
  if (!isUrl(cv)) return NextResponse.json({ error: "Link CV cần bắt đầu bằng http:// hoặc https://" }, { status: 422 });
  if (portfolio && !isUrl(portfolio)) return NextResponse.json({ error: "Link Portfolio chưa hợp lệ" }, { status: 422 });

  if (!rateLimit(`apply:${clientIp(req)}`, 3)) {
    return NextResponse.json({ error: "Bạn đã gửi quá nhiều lần. Vui lòng thử lại sau ít phút." }, { status: 429 });
  }

  const data = { job: job.title, name, phone, email, cv, portfolio, note, createdAt: new Date().toISOString() };

  try {
    const { id } = await sendEmail({
      to: emailConfig().to,
      ...applicationEmail(data),
      replyTo: email,
      tags: [{ name: "type", value: "application" }],
    });
    console.info(`[apply] email sent ${id}`);
  } catch (e) {
    if (e instanceof EmailNotConfiguredError && process.env.NODE_ENV !== "production") {
      console.warn("[apply] RESEND_API_KEY chưa cấu hình – bỏ qua gửi email (dev)", { name, job: job.title });
      return NextResponse.json({ ok: true });
    }
    // Không để mất hồ sơ: ghi đầy đủ thông tin vào log
    console.error("[apply] send email failed – APPLICATION:", JSON.stringify(data), e);
    return NextResponse.json({ error: "Hệ thống đang bận, vui lòng thử lại sau." }, { status: 502 });
  }

  // Email xác nhận cho ứng viên – chỉ khi đã có tên miền gửi riêng; lỗi ở bước này không ảnh hưởng kết quả
  if (canEmailExternalRecipients()) {
    try {
      await sendEmail({
        to: email,
        ...applicantConfirmationEmail(data),
        replyTo: emailConfig().to[0],
        tags: [{ name: "type", value: "application_confirm" }],
      });
    } catch (e) {
      console.error("[apply] confirmation email failed", e);
    }
  }

  return NextResponse.json({ ok: true });
}
