import Link from "next/link";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" />
    </svg>
  );
}
import Logo from "./Logo";
import { site } from "@/data/site";
import { servicesOrdered } from "@/data/services";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-white/75">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-64 bg-orange/15 drop-mask"
      />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Logo variant="white" className="h-9 w-auto" />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed">
            {site.legalName}. {site.tagline} – kiến tạo vẻ đẹp tự nhiên, không tuổi bằng công nghệ chuẩn y khoa.
          </p>
          <p className="mt-5 font-serif text-xl italic text-orange">“{site.slogan}”</p>
        </div>

        <div>
          <p className="mb-4 font-serif text-lg text-white">Dịch vụ nổi bật</p>
          <ul className="space-y-2 text-[15px]">
            {servicesOrdered.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link href={`/dich-vu/${s.slug}`} className="hover:text-orange">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-serif text-lg text-white">Về Lagoon</p>
          <ul className="space-y-2 text-[15px]">
            <li><Link href="/gioi-thieu" className="hover:text-orange">Giới thiệu</Link></li>
            <li><Link href="/cong-nghe" className="hover:text-orange">Công nghệ</Link></li>
            <li><Link href="/bang-gia" className="hover:text-orange">Bảng giá</Link></li>
            <li><Link href="/bai-viet" className="hover:text-orange">Bài viết</Link></li>
            <li><Link href="/lien-he" className="hover:text-orange">Liên hệ</Link></li>
            <li><Link href="/tuyen-dung" className="hover:text-orange">Tuyển dụng</Link></li>
            <li><Link href="/chinh-sach-bao-mat" className="hover:text-orange">Chính sách bảo mật</Link></li>
            <li><Link href="/dieu-khoan" className="hover:text-orange">Điều khoản sử dụng</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-serif text-lg text-white">Liên hệ</p>
          <ul className="space-y-3 text-[15px]">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-orange" />
              <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-orange">
                {site.address}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-orange" />
              <a href={site.phoneHref} className="font-semibold text-white hover:text-orange">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-1 h-4 w-4 shrink-0 text-orange" />
              <span>{site.hours}</span>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Lagoon"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-orange"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={site.zalo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zalo Lagoon"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-white/10 px-4 text-sm font-semibold transition hover:bg-orange"
            >
              <MessageCircle className="h-4 w-4" /> Zalo
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-[13px] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.legalName}. Bảo lưu mọi quyền.</p>
          <p>Thông tin trên website mang tính tham khảo, không thay thế chẩn đoán của bác sĩ.</p>
        </div>
      </div>
    </footer>
  );
}
