"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Clock, MapPin, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { mainNav, site } from "@/data/site";
import { serviceGroups, servicesOrdered } from "@/data/services";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-ink text-[13px] text-white/80 md:block">
        <div className="container-x flex h-9 items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-orange" /> {site.address}
            </span>
            <span className="hidden items-center gap-1.5 lg:flex">
              <Clock className="h-3.5 w-3.5 text-orange" /> {site.hours}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/tuyen-dung" className="hover:text-orange">
              Tuyển dụng
            </Link>
            <a href={site.phoneHref} className="flex items-center gap-1.5 font-semibold text-white hover:text-orange">
              <Phone className="h-3.5 w-3.5 text-orange" /> Hotline: {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled ? "border-line bg-white/90 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)] backdrop-blur-md" : "border-transparent bg-white"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label="Lagoon – Trang chủ" className="shrink-0">
            <Logo className="h-8 w-auto md:h-9" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Điều hướng chính">
            {mainNav.map((item) =>
              item.mega ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium transition-colors hover:text-orange-700 ${
                      isActive(item.href) ? "text-orange-700" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  {/* Mega menu */}
                  <div className="invisible absolute left-1/2 top-full w-[920px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className="grid grid-cols-4 gap-6 rounded-3xl border border-line bg-white p-7 shadow-2xl shadow-black/10">
                      {serviceGroups.map((g) => (
                        <div key={g.key}>
                          <p className="mb-1 font-serif text-lg text-ink">{g.label}</p>
                          <p className="mb-3 text-xs leading-snug text-ink-soft">{g.desc}</p>
                          <ul className="space-y-1">
                            {servicesOrdered
                              .filter((s) => s.group === g.key)
                              .map((s) => (
                                <li key={s.slug}>
                                  <Link
                                    href={`/dich-vu/${s.slug}`}
                                    className="block rounded-lg px-2 py-1.5 text-[14px] leading-snug text-ink-soft transition-colors hover:bg-orange-50 hover:text-orange-700"
                                  >
                                    {s.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors hover:text-orange-700 ${
                    isActive(item.href) ? "text-orange-700" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/dat-lich" className="btn btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
              Đặt lịch tư vấn
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Mở menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        className={`fixed right-0 top-0 z-[61] flex h-dvh w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menu di động"
      >
        <div className="flex h-[72px] items-center justify-between border-b border-line px-5">
          <Logo className="h-7 w-auto" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-50"
            aria-label="Đóng menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-5 py-4">
          <Link href="/" className="block border-b border-line py-3.5 font-medium">
            Trang chủ
          </Link>
          {mainNav.map((item) =>
            item.mega ? (
              <div key={item.href} className="border-b border-line">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3.5 font-medium"
                  onClick={() => setMobileServices((v) => !v)}
                  aria-expanded={mobileServices}
                >
                  {item.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileServices ? "rotate-180" : ""}`} />
                </button>
                {mobileServices && (
                  <ul className="pb-3">
                    <li>
                      <Link href="/dich-vu" className="block py-2 pl-3 text-sm font-semibold text-orange-700">
                        Tất cả dịch vụ
                      </Link>
                    </li>
                    {servicesOrdered.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/dich-vu/${s.slug}`} className="block py-2 pl-3 text-sm text-ink-soft">
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="block border-b border-line py-3.5 font-medium">
                {item.label}
              </Link>
            ),
          )}
          <Link href="/tuyen-dung" className="block border-b border-line py-3.5 font-medium">
            Tuyển dụng
          </Link>
        </nav>
        <div className="space-y-3 border-t border-line p-5">
          <Link href="/dat-lich" className="btn btn-primary w-full">
            Đặt lịch tư vấn
          </Link>
          <a href={site.phoneHref} className="btn btn-outline w-full">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
        </div>
      </aside>
    </header>
  );
}
