import type { Metadata } from "next";
import { CtaBand, PageHero, ServiceCard } from "@/components/ui";
import { serviceGroups, servicesOrdered } from "@/data/services";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Danh mục dịch vụ tại Lagoon: nâng cơ trẻ hóa Ultherapy Prime, Thermage FLX, CFU Èlife, Viora; điều trị mụn AviClear, trị nám Hollywood Spectra, sẹo, xóa xăm; chăm sóc da, Botox, Filler, Mesotherapy.",
  alternates: { canonical: "/dich-vu" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Dịch vụ" }]}
        eyebrow="Menu dịch vụ"
        title="Giải pháp trẻ hóa & điều trị da công nghệ cao"
        desc="13 nhóm dịch vụ được thiết kế theo từng tầng da và từng mục tiêu – luôn bắt đầu bằng thăm khám, soi da cùng bác sĩ."
        image="/images/hero-face.webp"
      />

      {/* quick jump */}
      <div className="sticky top-[72px] z-30 border-b border-line bg-white/90 backdrop-blur md:top-[108px]">
        <div className="container-x no-scrollbar flex gap-2 overflow-x-auto py-3">
          {serviceGroups.map((g) => (
            <a
              key={g.key}
              href={`#${g.key}`}
              className="shrink-0 rounded-full border border-line px-4 py-2 text-sm font-medium transition hover:border-orange hover:text-orange-700"
            >
              {g.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container-x space-y-20 py-16 md:py-20">
        {serviceGroups.map((g) => (
          <section key={g.key} id={g.key} className="scroll-mt-40">
            <div className="mb-8 max-w-2xl">
              <span className="eyebrow">{g.desc}</span>
              <h2 className="mt-3 text-3xl text-ink md:text-4xl">{g.label}</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicesOrdered
                .filter((s) => s.group === g.key)
                .map((s, i) => (
                  <ServiceCard key={s.slug} s={s} index={i} />
                ))}
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
