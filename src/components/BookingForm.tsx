"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { servicesOrdered } from "@/data/services";
import { site } from "@/data/site";

type Status = "idle" | "loading" | "success" | "error";

export default function BookingForm({
  defaultService = "",
  compact = false,
  dark = false,
}: {
  defaultService?: string;
  compact?: boolean;
  dark?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Gửi thông tin thất bại");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Có lỗi xảy ra");
    }
  }

  const field = `w-full rounded-2xl border px-4 py-3 text-[15px] outline-none transition focus:ring-4 ${
    dark
      ? "border-white/15 bg-white/10 text-white placeholder:text-white/50 focus:border-orange focus:ring-orange/20"
      : "border-line bg-white text-ink placeholder:text-ink-soft/60 focus:border-orange focus:ring-orange/15"
  }`;
  const label = `mb-1.5 block text-[13px] font-semibold uppercase tracking-wider ${dark ? "text-white/70" : "text-ink-soft"}`;

  if (status === "success") {
    return (
      <div className={`flex flex-col items-center rounded-3xl p-8 text-center ${dark ? "bg-white/10 text-white" : "bg-mint-50"}`}>
        <CheckCircle2 className="h-12 w-12 text-orange" />
        <p className="mt-4 font-serif text-2xl">Cảm ơn bạn đã đặt lịch!</p>
        <p className={`mt-2 max-w-sm text-[15px] ${dark ? "text-white/70" : "text-ink-soft"}`}>
          Chuyên viên Lagoon sẽ liên hệ xác nhận trong thời gian sớm nhất. Cần hỗ trợ ngay, vui lòng gọi{" "}
          <a href={site.phoneHref} className="font-semibold text-orange">
            {site.phone}
          </a>
          .
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-5 text-sm font-semibold underline underline-offset-4">
          Đặt lịch khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="bk-name" className={label}>
            Họ và tên *
          </label>
          <input id="bk-name" name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Nguyễn Thị A" className={field} />
        </div>
        <div>
          <label htmlFor="bk-phone" className={label}>
            Số điện thoại *
          </label>
          <input
            id="bk-phone"
            name="phone"
            required
            type="tel"
            inputMode="tel"
            pattern="^(\+84|0)[0-9\s.]{8,12}$"
            autoComplete="tel"
            placeholder="09xx xxx xxx"
            className={field}
          />
        </div>
      </div>
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="bk-service" className={label}>
            Dịch vụ quan tâm
          </label>
          <select id="bk-service" name="service" defaultValue={defaultService} className={field}>
            <option value="">Cần bác sĩ tư vấn</option>
            {servicesOrdered.map((s) => (
              <option key={s.slug} value={s.slug} className="text-ink">
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bk-date" className={label}>
            Ngày mong muốn
          </label>
          <input id="bk-date" name="date" type="date" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="bk-note" className={label}>
          Tình trạng da / ghi chú
        </label>
        <textarea id="bk-note" name="note" rows={compact ? 2 : 3} maxLength={500} placeholder="Ví dụ: da mụn, nám má, muốn nâng cơ…" className={field} />
      </div>
      {/* honeypot chống spam */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {status === "error" && <p className="text-sm font-medium text-red-500">{error}</p>}
      <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full disabled:opacity-70">
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        Đặt lịch thăm khám miễn phí
      </button>
      <p className={`text-center text-xs ${dark ? "text-white/50" : "text-ink-soft"}`}>
        Thông tin của bạn được bảo mật theo{" "}
        <a href="/chinh-sach-bao-mat" className="underline underline-offset-2">
          chính sách bảo mật
        </a>
        .
      </p>
    </form>
  );
}
