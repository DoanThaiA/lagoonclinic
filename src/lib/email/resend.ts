/**
 * Gửi email qua Resend REST API (https://resend.com/docs/api-reference/emails/send-email).
 *
 * Biến môi trường:
 * - RESEND_API_KEY  (bắt buộc)  API key Resend
 * - MAIL_TO         (tuỳ chọn) Hộp thư nhận thông báo, nhiều địa chỉ cách nhau bằng dấu phẩy
 * - RESEND_FROM     (tuỳ chọn) Người gửi. Mặc định dùng địa chỉ thử nghiệm của Resend;
 *                              khi đã xác minh tên miền trên Resend hãy đổi thành
 *                              "Lagoon Clinic <no-reply@lagoonclinic.com>"
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_TO = "cskh.lagoon.hanoi@gmail.com";
const DEFAULT_FROM = "Lagoon Clinic <onboarding@resend.dev>";

export class EmailNotConfiguredError extends Error {
  constructor() {
    super("RESEND_API_KEY chưa được cấu hình");
    this.name = "EmailNotConfiguredError";
  }
}

export function emailConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY?.trim(),
    from: process.env.RESEND_FROM?.trim() || DEFAULT_FROM,
    to: (process.env.MAIL_TO || DEFAULT_TO)
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
  };
}

/** Chỉ gửi email cho khách/ứng viên khi đã dùng tên miền riêng (địa chỉ resend.dev chỉ gửi được cho chủ tài khoản). */
export function canEmailExternalRecipients() {
  return !emailConfig().from.includes("resend.dev");
}

export type SendEmailInput = {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  tags?: { name: string; value: string }[];
};

export async function sendEmail(input: SendEmailInput): Promise<{ id: string }> {
  const { apiKey, from } = emailConfig();
  if (!apiKey) throw new EmailNotConfiguredError();

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: input.to,
      subject: input.subject,
      html: input.html,
      text: input.text,
      ...(input.replyTo ? { reply_to: input.replyTo } : {}),
      ...(input.tags ? { tags: input.tags } : {}),
    }),
    signal: AbortSignal.timeout(10_000),
    cache: "no-store",
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status}: ${detail.slice(0, 300)}`);
  }
  return (await res.json()) as { id: string };
}
