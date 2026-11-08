import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/ui";
import { formatVnd, minPrice, technologies } from "@/data/services";

export const metadata: Metadata = {
  title: "Công nghệ",
  description:
    "Hệ thống công nghệ tại Lagoon: Ultherapy Prime, Thermage FLX, CFU Èlife, Sóng RF Viora, AviClear 1726nm, Hollywood Spectra Q-Switched Nd:YAG.",
  alternates: { canonical: "/cong-nghe" },
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Công nghệ" }]}
        eyebrow="Bằng công nghệ chuẩn y khoa"
        title="Hệ thống công nghệ tại Lagoon"
        desc="Mỗi thiết bị được lựa chọn cho một tầng da, một mục tiêu điều trị – giúp bác sĩ đưa ra giải pháp “ít hơn, đúng hơn” cho bạn."
        image="/images/tech-face.webp"
      />

      <section className="container-x py-14">
        <Reveal className="relative overflow-hidden rounded-[36px] bg-white">
          <Image
            src="/images/machines.webp"
            alt="Hệ thống thiết bị công nghệ cao tại Lagoon"
            width={1600}
            height={1080}
            sizes="(min-width:1240px) 1180px, 100vw"
            className="mx-auto h-auto w-full max-w-5xl"
          />
        </Reveal>
      </section>

      <div className="container-x space-y-20 pb-10 md:space-y-28">
        {technologies.map((t, i) => (
          <section key={t.slug} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className={`relative ${i % 2 ? "lg:order-2" : ""}`}>
              <div className="relative aspect-[5/4] overflow-hidden rounded-[36px] bg-blue-50">
                <Image src={t.image} alt={t.name} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
              </div>
              {t.deviceImage && (
                <div className={`absolute -bottom-8 hidden h-56 w-36 rounded-3xl border border-line bg-white shadow-xl md:block ${i % 2 ? "-left-6" : "-right-6"}`}>
                  <Image src={t.deviceImage} alt={`Thiết bị ${t.name}`} fill sizes="144px" className="object-contain p-4" />
                </div>
              )}
            </Reveal>
            <Reveal delay={100}>
              <p className="font-serif text-5xl text-orange/25">{t.no}</p>
              <span className="eyebrow">{t.techLabel}</span>
              <h2 className="mt-3 text-3xl text-ink md:text-4xl">{t.name}</h2>
              <p className="mt-1 font-serif text-lg italic text-orange-700">{t.tagline}</p>
              <p className="mt-4 text-ink-soft">{t.summary}</p>
              <ul className="mt-5 space-y-2.5">
                {t.benefits.slice(0, 3).map((b) => (
                  <li key={b} className="flex gap-3 text-[15.5px] text-ink-soft">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-orange-700" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link href={`/dich-vu/${t.slug}`} className="btn btn-primary">
                  Tìm hiểu thêm <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-sm text-ink-soft">
                  Từ <strong className="text-orange-700">{formatVnd(minPrice(t))}</strong>
                </span>
              </div>
            </Reveal>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
