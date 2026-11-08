import { NextResponse } from "next/server";
import { getJob } from "@/data/jobs";

/**
 * Nhận hồ sơ ứng tuyển.
 * Đặt RECRUIT_WEBHOOK_URL để chuyển tiếp (Google Apps Script, Zapier, Lark…);
 * nếu không có, chỉ ghi log phía server.
 */
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

  const payload = {
    type: "ung-tuyen",
    job: job.title,
    name,
    phone,
    email,
    cv,
    portfolio,
    note,
    source: "website",
    createdAt: new Date().toISOString(),
  };

  const webhook = process.env.RECRUIT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook ${res.status}`);
    } catch (e) {
      console.error("[apply] webhook error", e);
      return NextResponse.json({ error: "Hệ thống bận, vui lòng thử lại sau" }, { status: 502 });
    }
  } else {
    console.info("[apply] new application", payload);
  }

  return NextResponse.json({ ok: true });
}
