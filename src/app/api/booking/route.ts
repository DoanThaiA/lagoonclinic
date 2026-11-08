import { NextResponse } from "next/server";
import { getService } from "@/data/services";

/**
 * Nhận yêu cầu đặt lịch.
 * - Nếu cấu hình BOOKING_WEBHOOK_URL (Google Apps Script, Zapier, Make, Lark, Slack…),
 *   dữ liệu sẽ được chuyển tiếp dạng JSON.
 * - Nếu không, ghi log phía server (phù hợp môi trường dev).
 */
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
  const service = str(body.service, 60);
  const date = str(body.date, 10);
  const note = str(body.note, 500);

  if (name.length < 2) return NextResponse.json({ error: "Vui lòng nhập họ tên" }, { status: 422 });
  if (!/^(\+84|0)\d{9,10}$/.test(phone))
    return NextResponse.json({ error: "Số điện thoại chưa đúng định dạng" }, { status: 422 });
  if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date))
    return NextResponse.json({ error: "Ngày không hợp lệ" }, { status: 422 });

  const payload = {
    name,
    phone,
    service: service ? (getService(service)?.name ?? service) : "Cần tư vấn",
    date,
    note,
    source: "website",
    createdAt: new Date().toISOString(),
  };

  const webhook = process.env.BOOKING_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook ${res.status}`);
    } catch (e) {
      console.error("[booking] webhook error", e);
      return NextResponse.json({ error: "Hệ thống bận, vui lòng gọi hotline" }, { status: 502 });
    }
  } else {
    console.info("[booking] new request", payload);
  }

  return NextResponse.json({ ok: true });
}
