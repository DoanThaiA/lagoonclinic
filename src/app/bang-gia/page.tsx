import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { CtaBand, PageHero, PriceTable } from "@/components/ui";
import { serviceGroups, servicesOrdered } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Bảng giá dịch vụ",
  description:
    "Bảng giá dịch vụ Lagoon Clinic: Ultherapy Prime, Thermage FLX, CFU Èlife, Viora, AviClear, Hollywood Spectra, peel, chăm sóc da, Botox, Filler, Rejuran, Profhilo…",
  alternates: { canonical: "/bang-gia" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Bảng giá" }]}
        eyebrow="Menu dịch vụ"
        title="Bảng giá dịch vụ"
        desc="Minh bạch chi phí – giá niêm yết và giá ưu đãi hiện hành cho từng liệu trình."
        image="/images/model-pink.webp"
      />

      <div className="container-x grid gap-10 py-14 lg:grid-cols-[260px_1fr] lg:py-20">
        {/* TOC */}
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-ink-soft">Danh mục</p>
          <nav className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0">
            {serviceGroups.map((g) => (
              <div key={g.key} className="contents lg:block lg:pb-4">
                <p className="hidden pb-1 pt-2 font-serif text-[15px] text-ink lg:block">{g.label}</p>
                {servicesOrdered
                  .filter((s) => s.group === g.key)
                  .map((s) => (
                    <a
                      key={s.slug}
                      href={`#${s.slug}`}
                      className="shrink-0 rounded-full border border-line px-4 py-2 text-sm text-ink-soft transition hover:text-orange-700 lg:block lg:rounded-lg lg:border-0 lg:px-2 lg:py-1.5"
                    >
                      <span className="mr-1.5 text-orange-700">{s.no}</span>
                      {s.name}
                    </a>
                  ))}
              </div>
            ))}
          </nav>
        </aside>

        <div className="space-y-16">
          <div className="flex gap-3 rounded-2xl bg-blue-50 p-4 text-[14.5px] text-ink-soft">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
            <p>
              Giá mang tính tham khảo theo menu dịch vụ hiện hành và có thể thay đổi theo chương trình ưu đãi. Chi phí thực tế phụ
              thuộc phác đồ bác sĩ chỉ định sau thăm khám. Liên hệ <a href={site.phoneHref} className="font-semibold text-orange-700">{site.phone}</a> để
              được báo giá chính xác.
            </p>
          </div>

          {servicesOrdered.map((s) => (
            <section key={s.slug} id={s.slug} className="scroll-mt-32">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="font-serif text-lg text-orange-700">{s.no}.</p>
                  <h2 className="text-3xl text-ink">{s.name}</h2>
                  <p className="mt-1 text-[15px] text-ink-soft">{s.tagline}</p>
                </div>
                <Link href={`/dich-vu/${s.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-700">
                  Chi tiết dịch vụ <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className={`grid gap-5 ${s.priceGroups.length > 1 ? "xl:grid-cols-2" : ""}`}>
                {s.priceGroups.map((g) => (
                  <PriceTable key={g.title} group={g} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
