import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { site } from "@/data/site";

function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M24 4C12.4 4 3 12.3 3 22.6c0 5.9 3.1 11.1 7.9 14.5-.3 2.2-1.3 4.6-3.3 6.4 4.1.1 7.4-1.6 9.5-3.1 2.2.6 4.5.9 6.9.9 11.6 0 21-8.3 21-18.6S35.6 4 24 4Z"
      />
      <text x="24" y="27.5" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="Arial, sans-serif">
        Zalo
      </text>
    </svg>
  );
}

export default function FloatingContact() {
  return (
    <>
      {/* Desktop: nút nổi bên phải */}
      <div className="fixed bottom-6 right-5 z-40 hidden flex-col items-end gap-3 md:flex">
        <a
          href={site.zalo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#0068ff] text-[#0068ff] shadow-lg shadow-blue-500/30 transition hover:scale-105"
        >
          <ZaloIcon className="h-9 w-9 text-white [&_text]:fill-[#0068ff]" />
        </a>
        <a
          href={site.phoneHref}
          aria-label={`Gọi ${site.phone}`}
          title={`Gọi ${site.phone}`}
          className="group relative flex h-14 min-w-14 items-center justify-center rounded-full bg-orange-600 px-[18px] font-semibold text-white shadow-lg shadow-orange/40 transition-all hover:bg-orange-700"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-orange/40" />
          <Phone className="h-5 w-5 shrink-0" />
          {/* Số điện thoại chỉ hiện khi rê chuột – tránh che nội dung/form bên phải */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:ml-2 group-hover:max-w-[140px]">
            {site.phone}
          </span>
        </a>
      </div>

      {/* Mobile: thanh liên hệ cố định ở đáy */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
        <a href={site.phoneHref} className="flex flex-col items-center gap-0.5 py-2 text-[12px] font-semibold text-ink">
          <Phone className="h-5 w-5 text-orange-600" /> Gọi ngay
        </a>
        <a
          href={site.zalo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 py-2 text-[12px] font-semibold text-ink"
        >
          <ZaloIcon className="h-5 w-5 text-[#0068ff]" /> Zalo
        </a>
        <Link href="/dat-lich" className="flex flex-col items-center gap-0.5 bg-orange-600 py-2 text-[12px] font-semibold text-white">
          <CalendarCheck className="h-5 w-5" /> Đặt lịch
        </Link>
      </div>
    </>
  );
}
