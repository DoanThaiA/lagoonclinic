import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarCheck, Check, Phone, Sparkles, UserCheck } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import Reveal from "@/components/Reveal";
import { Breadcrumb, CtaBand, Faq, PriceTable, ServiceCard } from "@/components/ui";
import { formatVnd, getService, minPrice, services, servicesOrdered } from "@/data/services";
import { posts } from "@/data/posts";
import { site } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.name} – ${s.tagline}`,
    description: s.summary,
    alternates: { canonical: `/dich-vu/${s.slug}` },
    openGraph: { images: [{ url: s.image }] },
  };
}

export default async function ServiceDetail({ params }: Params) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = servicesOrdered.filter((x) => x.group === s.group && x.slug !== s.slug).slice(0, 3);
  const relatedPosts = posts.filter((p) => p.relatedService === s.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: s.name,
    description: s.summary,
    procedureType: "NoninvasiveProcedure",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "VND",
      lowPrice: minPrice(s),
    },
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container-x grid items-center gap-10 py-10 md:py-14 lg:grid-cols-2">
          <div>
            <Breadcrumb items={[{ label: "Dịch vụ", href: "/dich-vu" }, { label: s.name }]} />
            <p className="mt-6 font-serif text-6xl text-orange/25">{s.no}</p>
            <span className="eyebrow -mt-2">{s.techLabel ?? s.tagline}</span>
            <h1 className="mt-3 text-4xl text-ink md:text-[3.2rem]">{s.name}</h1>
            <p className="mt-2 font-serif text-xl italic text-orange-700">{s.tagline}</p>
            <p className="mt-5 max-w-xl text-[17px] text-ink-soft">{s.summary}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#dat-lich" className="btn btn-primary">
                <CalendarCheck className="h-4 w-4" /> Đặt lịch tư vấn
              </a>
              <a href="#bang-gia" className="btn btn-outline text-ink">
                Bảng giá · từ {formatVnd(minPrice(s))}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] bg-white shadow-[0_40px_80px_-50px_rgba(0,0,0,0.35)]">
              <Image src={s.image} alt={s.name} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
            {s.deviceImage && (
              <div className="absolute -bottom-6 -left-4 hidden h-48 w-32 rounded-3xl border border-line bg-white p-3 shadow-xl md:block">
                <Image src={s.deviceImage} alt={`Thiết bị ${s.name}`} fill sizes="128px" className="object-contain p-3" />
              </div>
            )}
          </div>
        </div>

        {/* facts */}
        <div className="container-x pb-12">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
            {s.facts.map((f) => (
              <div key={f.label} className="bg-white p-5">
                <dt className="text-[13px] uppercase tracking-wider text-ink-soft">{f.label}</dt>
                <dd className="mt-1 font-serif text-lg text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* BODY */}
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_380px] lg:py-20">
        <div className="space-y-16">
          <Reveal>
            <span className="eyebrow">Cơ chế & ưu điểm</span>
            <h2 className="mt-3 text-3xl text-ink">Hoạt động như thế nào?</h2>
            <ul className="mt-6 space-y-4">
              {s.mechanism.map((m, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 font-semibold text-blue-700">
                    {i + 1}
                  </span>
                  <p className="text-[16.5px] text-ink-soft">{m}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] bg-orange-50 p-7">
                <Sparkles className="h-7 w-7 text-orange-700" />
                <h3 className="mt-4 text-2xl text-ink">Hiệu quả vượt trội</h3>
                <ul className="mt-4 space-y-3">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-[15.5px] text-ink-soft">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-orange-700" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[28px] bg-mint-50 p-7">
                <UserCheck className="h-7 w-7 text-emerald-700" />
                <h3 className="mt-4 text-2xl text-ink">Phù hợp với ai?</h3>
                <ul className="mt-4 space-y-3">
                  {s.suitableFor.map((b) => (
                    <li key={b} className="flex gap-3 text-[15.5px] text-ink-soft">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[13px] text-ink-soft">
                  * Chỉ định cuối cùng do bác sĩ quyết định sau khi thăm khám.
                </p>
              </div>
            </div>
          </Reveal>

          <section id="bang-gia" className="scroll-mt-32">
            <Reveal>
              <span className="eyebrow">Bảng giá</span>
              <h2 className="mt-3 text-3xl text-ink">Chi phí {s.name}</h2>
              <p className="mt-2 text-[15px] text-ink-soft">
                Giá niêm yết (gạch ngang) và giá ưu đãi hiện hành. Tần suất điều trị khuyến nghị ghi trong ngoặc.
              </p>
            </Reveal>
            <div className="mt-6 space-y-5">
              {s.priceGroups.map((g) => (
                <PriceTable key={g.title} group={g} />
              ))}
            </div>
          </section>

          <section>
            <span className="eyebrow">Hỏi đáp</span>
            <h2 className="mb-6 mt-3 text-3xl text-ink">Câu hỏi thường gặp</h2>
            <Faq items={s.faqs} />
          </section>

          {relatedPosts.length > 0 && (
            <section>
              <h2 className="text-2xl text-ink">Bài viết liên quan</h2>
              <div className="mt-5 space-y-3">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/bai-viet/${p.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-line p-3 transition hover:border-orange/40"
                  >
                    <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl">
                      <Image src={p.image} alt="" fill sizes="112px" className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink group-hover:text-orange-700">{p.title}</p>
                      <p className="mt-1 text-[13px] text-ink-soft">{p.readMin} phút đọc</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sticky booking */}
        <aside id="dat-lich" className="scroll-mt-32">
          <div className="sticky top-32 space-y-4">
            <div className="rounded-[28px] border border-line bg-white p-6 shadow-[0_30px_60px_-45px_rgba(0,0,0,0.35)]">
              <p className="font-serif text-2xl text-ink">Đặt lịch {s.name}</p>
              <p className="mb-5 mt-1 text-sm text-ink-soft">Thăm khám & soi da miễn phí cùng bác sĩ.</p>
              <BookingForm defaultService={s.slug} compact />
            </div>
            <a
              href={site.phoneHref}
              className="flex items-center justify-between rounded-[28px] bg-ink p-5 text-white transition hover:bg-orange-700"
            >
              <span>
                <span className="block text-[13px] text-white/70">Tư vấn nhanh</span>
                <span className="text-xl font-semibold">{site.phone}</span>
              </span>
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="bg-cream py-16 md:py-20">
          <div className="container-x">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-3xl text-ink">Dịch vụ liên quan</h2>
              <Link href="/dich-vu" className="hidden items-center gap-2 font-semibold text-orange-700 sm:flex">
                Tất cả dịch vụ <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <ServiceCard key={r.slug} s={r} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
