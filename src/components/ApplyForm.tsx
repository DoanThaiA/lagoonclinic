"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { site } from "@/data/site";

type Status = "idle" | "loading" | "success" | "error";

export default function ApplyForm({ jobSlug, jobTitle }: { jobSlug: string; jobTitle: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = { ...Object.fromEntries(new FormData(form).entries()), job: jobSlug };
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Gửi hồ sơ thất bại");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Có lỗi xảy ra");
    }
  }

  const field =
    "w-full rounded-2xl border border-line bg-white px-4 py-2.5 text-[15px] text-ink outline-none transition placeholder:text-ink-soft/60 focus:border-orange focus:ring-4 focus:ring-orange/15";
  const label = "mb-1 block text-[12px] font-semibold uppercase tracking-wider text-ink-soft";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl bg-mint-50 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-orange" />
        <p className="mt-4 font-serif text-2xl">Đã nhận hồ sơ của bạn!</p>
        <p className="mt-2 text-[15px] text-ink-soft">
          Cảm ơn bạn đã quan tâm vị trí {jobTitle}. Bộ phận tuyển dụng Lagoon sẽ liên hệ nếu hồ sơ phù hợp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label htmlFor="ap-name" className={label}>Họ và tên *</label>
        <input id="ap-name" name="name" required minLength={2} maxLength={80} autoComplete="name" className={field} placeholder="Nguyễn Thị A" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="ap-phone" className={label}>Số điện thoại *</label>
          <input id="ap-phone" name="phone" type="tel" inputMode="tel" required pattern="^(\+84|0)[0-9\s.]{8,12}$" autoComplete="tel" className={field} placeholder="09xx xxx xxx" />
        </div>
        <div>
          <label htmlFor="ap-email" className={label}>Email *</label>
          <input id="ap-email" name="email" type="email" required maxLength={120} autoComplete="email" className={field} placeholder="ban@email.com" />
        </div>
      </div>
      <div>
        <label htmlFor="ap-cv" className={label}>Link CV *</label>
        <input id="ap-cv" name="cv" type="url" required maxLength={300} className={field} placeholder="https://drive.google.com/..." />
        <p className="mt-1 text-xs text-ink-soft">Link Google Drive, bật quyền “Bất kỳ ai có đường liên kết”.</p>
      </div>
      <div>
        <label htmlFor="ap-portfolio" className={label}>Link Portfolio / sản phẩm</label>
        <input id="ap-portfolio" name="portfolio" type="url" maxLength={300} className={field} placeholder="TikTok, Facebook, Behance, Drive…" />
      </div>
      <div>
        <label htmlFor="ap-note" className={label}>Giới thiệu ngắn</label>
        <textarea id="ap-note" name="note" rows={2} maxLength={1000} className={field} placeholder="Kinh nghiệm nổi bật, chiến dịch bạn tự hào nhất…" />
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {status === "error" && <p className="text-sm font-medium text-red-500">{error}</p>}
      <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full disabled:opacity-70">
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Gửi hồ sơ ứng tuyển
      </button>
      <p className="text-center text-xs text-ink-soft">
        Cần hỗ trợ? Gọi <a href={site.phoneHref} className="font-semibold text-orange-700">{site.phone}</a>
      </p>
    </form>
  );
}
