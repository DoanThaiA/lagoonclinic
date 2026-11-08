/**
 * Mẫu email HTML theo nhận diện Lagoon.
 * Dùng bảng + inline style để hiển thị ổn định trên Gmail, Outlook, Apple Mail và điện thoại.
 */
import { site } from "@/data/site";

const C = {
  orange: "#F47920",
  orangeDark: "#B8520A",
  ink: "#313032",
  soft: "#5B5A5E",
  line: "#ECE7E2",
  cream: "#FFFAF6",
  blue: "#EEF9FC",
};

export const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

export function formatDateTimeVN(iso: string) {
  return new Date(iso).toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function formatDateVN(ymd: string) {
  const [y, m, d] = ymd.split("-");
  return y && m && d ? `${d}/${m}/${y}` : ymd;
}

export const prettyPhone = (p: string) => p.replace(/^(\d{4})(\d{3})(\d+)$/, "$1 $2 $3");

type Row = { label: string; value: string; href?: string; highlight?: boolean; multiline?: boolean };
type Button = { label: string; href: string; primary?: boolean };

function rowsHtml(rows: Row[]) {
  return rows
    .map((r, i) => {
      const val = r.value ? esc(r.value) : `<span style="color:#9a989c">—</span>`;
      const content = r.href && r.value
        ? `<a href="${esc(r.href)}" style="color:${C.orangeDark};text-decoration:none;font-weight:600">${val}</a>`
        : r.multiline
          ? val.replace(/\n/g, "<br>")
          : val;
      return `<tr>
        <td width="34%" style="padding:12px 14px;width:34%;vertical-align:top;font-size:13px;color:${C.soft};background:${i % 2 ? "#fff" : C.cream};border-bottom:1px solid ${C.line}">${esc(r.label)}</td>
        <td style="padding:12px 14px;vertical-align:top;font-size:15px;color:${C.ink};background:${i % 2 ? "#fff" : C.cream};border-bottom:1px solid ${C.line};${r.highlight ? "font-weight:700;font-size:16px;" : ""}overflow-wrap:anywhere;word-break:break-word">${content}</td>
      </tr>`;
    })
    .join("");
}

function buttonsHtml(buttons: Button[]) {
  if (!buttons.length) return "";
  return `<div style="margin:24px 0 4px">${buttons
    .map(
      (b) =>
        `<a href="${esc(b.href)}" style="display:inline-block;margin:0 8px 10px 0;padding:11px 20px;border-radius:999px;font-size:14px;font-weight:700;text-decoration:none;white-space:nowrap;${
          b.primary ? `background:${C.orange};color:#ffffff;border:1.5px solid ${C.orange};` : `background:#ffffff;color:${C.ink};border:1.5px solid ${C.line};`
        }">${esc(b.label)}</a>`,
    )
    .join("")}</div>`;
}

function layout(opts: { preheader: string; badge: string; title: string; intro: string; body: string; footerNote?: string }) {
  return `<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light"><title>${esc(opts.title)}</title></head>
<body style="margin:0;padding:0;background:#F4F1EE;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:${C.ink}">
<span style="display:none!important;opacity:0;visibility:hidden;height:0;width:0;overflow:hidden">${esc(opts.preheader)}</span>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#F4F1EE">
<tr><td align="center" style="padding:28px 12px">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;background:#fff;border-radius:20px;overflow:hidden">
    <tr><td style="background:${C.orange};padding:22px 28px">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr>
        <td style="white-space:nowrap;font-family:'Palatino Linotype','Book Antiqua',Palatino,'Times New Roman',serif;font-size:26px;letter-spacing:3px;color:#fff">LAGOON</td>
        <td align="right"><span style="display:inline-block;background:rgba(255,255,255,.2);color:#fff;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:6px 12px;border-radius:999px;white-space:nowrap">${esc(opts.badge)}</span></td>
      </tr></table>
    </td></tr>
    <tr><td style="padding:28px 28px 8px">
      <h1 style="margin:0 0 8px;font-family:'Palatino Linotype','Book Antiqua',Palatino,'Times New Roman',serif;font-size:24px;line-height:1.3;color:${C.ink};font-weight:normal">${esc(opts.title)}</h1>
      <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:${C.soft}">${opts.intro}</p>
      ${opts.body}
    </td></tr>
    <tr><td style="padding:20px 28px 28px">
      ${opts.footerNote ? `<p style="margin:0 0 16px;padding:12px 16px;background:${C.blue};border-radius:12px;font-size:13px;line-height:1.6;color:${C.soft}">${opts.footerNote}</p>` : ""}
      <p style="margin:0;font-size:12px;line-height:1.7;color:#9a989c;border-top:1px solid ${C.line};padding-top:16px">
        <strong style="color:${C.soft}">${esc(site.legalName)}</strong><br>
        ${esc(site.address)} · Hotline ${esc(site.phone)}<br>
        Email được gửi tự động từ website ${esc(site.url.replace(/^https?:\/\//, ""))}
      </p>
    </td></tr>
  </table>
</td></tr></table>
</body></html>`;
}

function textBlock(title: string, rows: Row[], extra: string[] = []) {
  return [title, "", ...rows.map((r) => `${r.label}: ${r.value || "—"}`), "", ...extra, "", `${site.legalName} – ${site.address} – ${site.phone}`].join("\n");
}

/* ================= ĐẶT LỊCH ================= */

export type BookingData = {
  name: string;
  phone: string;
  service: string;
  date: string;
  note: string;
  createdAt: string;
  page?: string;
};

export function bookingEmail(d: BookingData) {
  const rows: Row[] = [
    { label: "Khách hàng", value: d.name, highlight: true },
    { label: "Số điện thoại", value: prettyPhone(d.phone), href: `tel:${d.phone}`, highlight: true },
    { label: "Dịch vụ quan tâm", value: d.service },
    { label: "Ngày mong muốn", value: d.date ? formatDateVN(d.date) : "" },
    { label: "Ghi chú", value: d.note, multiline: true },
    { label: "Thời gian gửi", value: formatDateTimeVN(d.createdAt) },
    ...(d.page ? [{ label: "Gửi từ trang", value: d.page.replace(/^https?:\/\/[^/]+/, "") || "/", href: d.page }] : []),
  ];
  const zalo = `https://zalo.me/${d.phone.replace(/^\+84/, "0")}`;
  const subject = `[Đặt lịch] ${d.name} – ${prettyPhone(d.phone)} – ${d.service}`;
  const html = layout({
    preheader: `${d.name} (${prettyPhone(d.phone)}) đặt lịch: ${d.service}`,
    badge: "Lịch hẹn mới",
    title: "Có khách hàng vừa đặt lịch",
    intro: "Vui lòng liên hệ khách hàng để xác nhận lịch hẹn trong thời gian sớm nhất.",
    body: `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid ${C.line};border-radius:14px;overflow:hidden;border-collapse:separate;table-layout:fixed">${rowsHtml(rows)}</table>
      ${buttonsHtml([
        { label: "Gọi khách hàng", href: `tel:${d.phone}`, primary: true },
        { label: "Nhắn Zalo", href: zalo },
      ])}`,
    footerNote: "Mẹo: phản hồi trong vòng 15 phút giúp tăng đáng kể tỷ lệ khách đến phòng khám.",
  });
  const text = textBlock("LỊCH HẸN MỚI TỪ WEBSITE", rows, [`Gọi: tel:${d.phone}`, `Zalo: ${zalo}`]);
  return { subject, html, text };
}

/* ================= ỨNG TUYỂN ================= */

export type ApplicationData = {
  job: string;
  name: string;
  phone: string;
  email: string;
  cv: string;
  portfolio: string;
  note: string;
  createdAt: string;
};

export function applicationEmail(d: ApplicationData) {
  const rows: Row[] = [
    { label: "Vị trí", value: d.job, highlight: true },
    { label: "Ứng viên", value: d.name, highlight: true },
    { label: "Số điện thoại", value: prettyPhone(d.phone), href: `tel:${d.phone}` },
    { label: "Email", value: d.email, href: `mailto:${d.email}` },
    { label: "CV", value: d.cv, href: d.cv },
    { label: "Portfolio", value: d.portfolio, href: d.portfolio || undefined },
    { label: "Giới thiệu", value: d.note, multiline: true },
    { label: "Thời gian gửi", value: formatDateTimeVN(d.createdAt) },
  ];
  const subject = `[Ứng tuyển] ${d.job} – ${d.name}`;
  const buttons: Button[] = [
    { label: "Xem CV", href: d.cv, primary: true },
    ...(d.portfolio ? [{ label: "Xem Portfolio", href: d.portfolio }] : []),
    { label: "Trả lời ứng viên", href: `mailto:${d.email}?subject=${encodeURIComponent(`Lagoon Clinic – Phản hồi ứng tuyển ${d.job}`)}` },
  ];
  const html = layout({
    preheader: `${d.name} ứng tuyển vị trí ${d.job}`,
    badge: "Hồ sơ ứng tuyển",
    title: `Hồ sơ mới: ${d.job}`,
    intro: "Bạn có thể bấm <strong>Trả lời</strong> trực tiếp trên email này để phản hồi ứng viên.",
    body: `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid ${C.line};border-radius:14px;overflow:hidden;border-collapse:separate;table-layout:fixed">${rowsHtml(rows)}</table>
      ${buttonsHtml(buttons)}`,
    footerNote: "Lưu ý: kiểm tra quyền truy cập link CV/Portfolio. Nếu không mở được, hãy liên hệ ứng viên để gửi lại.",
  });
  const text = textBlock("HỒ SƠ ỨNG TUYỂN MỚI TỪ WEBSITE", rows);
  return { subject, html, text };
}

/** Email xác nhận gửi cho ứng viên (chỉ dùng khi đã xác minh tên miền gửi trên Resend). */
export function applicantConfirmationEmail(d: Pick<ApplicationData, "name" | "job">) {
  const subject = `Lagoon Clinic đã nhận hồ sơ ứng tuyển ${d.job} của bạn`;
  const html = layout({
    preheader: "Cảm ơn bạn đã ứng tuyển tại Lagoon Clinic",
    badge: "Tuyển dụng",
    title: `Chào ${d.name},`,
    intro: `Cảm ơn bạn đã quan tâm và ứng tuyển vị trí <strong>${esc(d.job)}</strong> tại Lagoon Clinic. Chúng tôi đã nhận được hồ sơ của bạn.`,
    body: `<p style="margin:0 0 12px;font-size:15px;line-height:1.7;color:${C.soft}">Bộ phận tuyển dụng sẽ xem xét và liên hệ với bạn qua điện thoại hoặc email nếu hồ sơ phù hợp. Trong thời gian chờ, bạn có thể tìm hiểu thêm về Lagoon tại website của chúng tôi.</p>
      ${buttonsHtml([{ label: "Khám phá Lagoon", href: site.url, primary: true }])}
      <p style="margin:16px 0 0;font-family:'Palatino Linotype','Book Antiqua',Palatino,'Times New Roman',serif;font-style:italic;font-size:16px;color:${C.orangeDark}">“${esc(site.slogan)}”</p>`,
  });
  const text = [
    `Chào ${d.name},`,
    "",
    `Cảm ơn bạn đã ứng tuyển vị trí ${d.job} tại Lagoon Clinic. Chúng tôi đã nhận được hồ sơ và sẽ liên hệ nếu hồ sơ phù hợp.`,
    "",
    `${site.legalName} – ${site.address} – ${site.phone}`,
  ].join("\n");
  return { subject, html, text };
}
