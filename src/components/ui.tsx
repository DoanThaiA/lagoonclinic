import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { PriceGroup, Service } from "@/data/services";
import { formatVnd, minPrice } from "@/data/services";
import Reveal from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  desc,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className={`eyebrow ${light ? "!text-orange" : ""}`}>{eyebrow}</span>}
      <h2 className={`mt-3 text-3xl md:text-[2.6rem] ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {desc && <p className={`mt-4 text-[17px] ${light ? "text-white/70" : "text-ink-soft"}`}>{desc}</p>}
    </Reveal>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-[13px] text-ink-soft">
      <Link href="/" className="hover:text-orange-700">
        Trang chủ
      </Link>
      {items.map((it) => (
        <span key={it.label} className="flex items-center gap-1">
          <ChevronRight className="h-3.5 w-3.5" />
          {it.href ? (
            <Link href={it.href} className="hover:text-orange-700">
              {it.label}
            </Link>
          ) : (
            <span className="text-ink">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  desc,
  crumbs,
  image,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  crumbs: { label: string; href?: string }[];
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div aria-hidden className="absolute -left-20 top-10 h-72 w-56 rotate-[-18deg] bg-blue-100/70 drop-mask" />
      <div className="container-x relative grid items-center gap-8 py-12 md:py-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Breadcrumb items={crumbs} />
          {eyebrow && <span className="eyebrow mt-6">{eyebrow}</span>}
          <h1 className="mt-3 text-4xl text-ink md:text-5xl">{title}</h1>
          {desc && <p className="mt-5 max-w-xl text-[17px] text-ink-soft">{desc}</p>}
        </div>
        {image && (
          <div className="relative mx-auto hidden aspect-[100/130] w-56 lg:block xl:w-64">
            <div className="absolute inset-0 translate-x-4 translate-y-3 bg-orange/20 drop-mask" />
            <div className="absolute inset-0 overflow-hidden drop-mask">
              <Image src={image} alt="" fill sizes="260px" className="object-cover" priority />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function ServiceCard({ s, index = 0 }: { s: Service; index?: number }) {
  return (
    <Reveal delay={index * 60}>
      <Link
        href={`/dich-vu/${s.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-white transition duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-[0_24px_50px_-28px_rgba(244,121,32,0.55)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-blue-50">
          <Image
            src={s.image}
            alt={s.name}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-wider text-orange-700 backdrop-blur">
            {s.no}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl text-ink">{s.name}</h3>
          <p className="mt-2 line-clamp-2 text-[15px] text-ink-soft">{s.tagline}</p>
          <div className="mt-auto flex items-center justify-between pt-5">
            <span className="text-sm text-ink-soft">
              Từ <strong className="text-base text-orange-700">{formatVnd(minPrice(s))}</strong>
            </span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-700 transition group-hover:bg-orange-600 group-hover:text-white">
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export function PriceTable({ group }: { group: PriceGroup }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line bg-cream px-5 py-4 md:px-6">
        <h3 className="text-lg text-ink">{group.title}</h3>
        {group.subtitle && <span className="text-sm text-ink-soft">{group.subtitle}</span>}
      </div>
      <ul className="divide-y divide-line">
        {group.items.map((it, i) => (
          <li key={it.name + i} className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 md:px-6">
            <div>
              <p className="font-semibold text-ink">
                {it.name}
                {it.detail && <span className="ml-2 text-sm font-normal text-ink-soft">· {it.detail}</span>}
              </p>
              {(it.frequency || it.note) && (
                <p className="mt-0.5 text-[13px] text-ink-soft">
                  {it.frequency && <span className="italic">({it.frequency})</span>}
                  {it.frequency && it.note && " · "}
                  {it.note && <span className="text-blue-700">{it.note}</span>}
                </p>
              )}
            </div>
            <div className="text-right">
              {it.original && <p className="text-[13px] text-ink-soft/70 line-through">{formatVnd(it.original)}</p>}
              <p className="text-[17px] font-bold text-orange-700">
                {formatVnd(it.price)}
                {it.priceMax && <> – {formatVnd(it.priceMax)}</>}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-3xl border border-line bg-white">
      {items.map((f) => (
        <details key={f.q} className="group px-5 py-1 md:px-7">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="relative h-7 w-7 shrink-0 rounded-full bg-orange-50 text-orange-700 transition group-open:rotate-45 group-open:bg-orange-600 group-open:text-white">
              <span className="absolute left-1/2 top-1/2 h-0.5 w-3 -translate-x-1/2 -translate-y-1/2 bg-current" />
              <span className="absolute left-1/2 top-1/2 h-3 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-current" />
            </span>
          </summary>
          <p className="pb-5 text-[15.5px] text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="container-x py-16 md:py-20">
      <div className="relative overflow-hidden rounded-[36px] bg-orange px-6 py-12 text-white md:px-14 md:py-16">
        <div aria-hidden className="absolute -right-10 -top-16 h-80 w-60 rotate-12 bg-white/10 drop-mask" />
        <div aria-hidden className="absolute bottom-[-90px] right-40 h-56 w-44 -rotate-12 bg-white/10 drop-mask" />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Bước đầu tiên cho làn da khỏe đẹp</p>
            <h2 className="mt-3 text-3xl text-white md:text-[2.5rem]">Thăm khám & soi da miễn phí cùng bác sĩ da liễu</h2>
            <p className="mt-4 max-w-lg text-white/85">
              Mỗi làn da là duy nhất. Hãy để Lagoon lắng nghe và xây dựng phác đồ phù hợp nhất cho bạn.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
            <Link href="/dat-lich" className="btn btn-light">
              Đặt lịch ngay <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/bang-gia" className="btn border-[1.5px] border-white/70 text-white hover:bg-white/10">
              Xem bảng giá
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
