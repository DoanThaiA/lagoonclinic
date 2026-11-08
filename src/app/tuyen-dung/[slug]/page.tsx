import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Banknote, Briefcase, Building2, CalendarClock, Check, FileText, MapPin, UserRound } from "lucide-react";
import ApplyForm from "@/components/ApplyForm";
import { Breadcrumb } from "@/components/ui";
import { getJob, jobs } from "@/data/jobs";
import { site } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const j = getJob(slug);
  if (!j) return {};
  return {
    title: `Tuyển dụng ${j.title} – ${j.salaryText}`,
    description: `${j.tagline} ${j.summary}`,
    alternates: { canonical: `/tuyen-dung/${j.slug}` },
    openGraph: { images: [{ url: j.image, width: 1200, height: 1311 }] },
  };
}

export default async function JobPage({ params }: Params) {
  const { slug } = await params;
  const j = getJob(slug);
  if (!j) notFound();

  const info = [
    { icon: Banknote, label: "Thu nhập", value: `Lương cứng ${j.salaryText} + trợ cấp + thưởng` },
    { icon: Building2, label: "Phòng ban", value: j.department },
    { icon: MapPin, label: "Địa điểm", value: j.location },
    { icon: Briefcase, label: "Hình thức", value: j.typeLabel },
    { icon: CalendarClock, label: "Thời gian", value: j.schedule },
    { icon: UserRound, label: "Báo cáo trực tiếp", value: j.reportTo },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: j.fullTitle,
    description: [j.tagline, j.summary, ...j.sections.flatMap((s) => [...(s.intro ?? []), ...s.groups.flatMap((g) => g.items)])]
      .map((t) => `<p>${t}</p>`)
      .join(""),
    datePosted: j.datePosted,
    ...(j.validThrough ? { validThrough: j.validThrough } : {}),
    employmentType: j.employmentType,
    hiringOrganization: { "@type": "Organization", name: site.legalName, sameAs: site.url, logo: `${site.url}/icon.svg` },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", streetAddress: "480 Xã Đàn", addressLocality: "Hà Nội", addressCountry: "VN" },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "VND",
      value: { "@type": "QuantitativeValue", minValue: j.salaryMin, maxValue: j.salaryMax, unitText: "MONTH" },
    },
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container-x grid items-center gap-10 py-10 md:py-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Breadcrumb items={[{ label: "Tuyển dụng", href: "/tuyen-dung" }, { label: j.title }]} />
            <span className="eyebrow mt-6">Lagoon Clinic tuyển dụng</span>
            <h1 className="mt-3 text-4xl text-ink md:text-6xl">{j.title}</h1>
            {j.fullTitle.includes("–") && <p className="mt-2 text-lg text-ink-soft">{j.fullTitle.split("–")[1].trim()}</p>}
            <p className="mt-6 inline-flex rounded-2xl bg-orange-600 px-5 py-2.5 text-[15px] font-bold text-white shadow-lg shadow-orange/30 sm:rounded-full sm:text-lg">
              Thu nhập: {j.salaryText} + trợ cấp + thưởng
            </p>
            <p className="mt-6 max-w-xl font-serif text-xl italic text-ink">“{j.tagline}”</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#ung-tuyen" className="btn btn-primary">Ứng tuyển ngay</a>
              <a href="#mo-ta" className="btn btn-outline text-ink">Xem mô tả công việc</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rotate-2 rounded-[36px] bg-orange/15" />
            <div className="relative overflow-hidden rounded-[32px] shadow-2xl shadow-black/10">
              <Image
                src={j.image}
                alt={`Lagoon tuyển dụng ${j.title} – lương ${j.salaryText}, làm việc tại ${j.location}`}
                width={1200}
                height={1311}
                priority
                sizes="(min-width:1024px) 448px, 90vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="container-x -mt-2">
        <dl className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {info.map((it) => (
            <div key={it.label} className="flex gap-4 bg-white p-5">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-700">
                <it.icon className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-[12px] font-semibold uppercase tracking-wider text-ink-soft">{it.label}</dt>
                <dd className="mt-0.5 font-semibold text-ink">{it.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </section>

      {/* BODY */}
      <div id="mo-ta" className="container-x grid scroll-mt-32 gap-12 py-14 lg:grid-cols-[1fr_400px] lg:py-20">
        <div className="space-y-14">
          {j.sections.map((s, si) => (
            <section key={s.title}>
              <p className="font-serif text-lg text-orange-700">{String(si + 1).padStart(2, "0")}.</p>
              <h2 className="text-3xl text-ink">{s.title}</h2>
              {s.intro?.map((p) => (
                <p key={p} className="mt-4 text-[16.5px] text-ink-soft">{p}</p>
              ))}
              <div className="mt-6 grid gap-5">
                {s.groups.map((g, gi) => (
                  <div key={gi} className={g.heading ? "rounded-[24px] border border-line bg-white p-6" : ""}>
                    {g.heading && (
                      <h3 className="mb-4 flex items-center gap-3 text-xl text-ink">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange text-sm font-bold text-white">
                          {s.title === "Mô tả công việc" ? String.fromCharCode(65 + gi) : gi + 1}
                        </span>
                        {g.heading}
                      </h3>
                    )}
                    <ul className="space-y-3">
                      {g.items.map((it) => (
                        <li key={it} className="flex gap-3 text-[15.5px] text-ink-soft">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-orange-700" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="rounded-[28px] bg-blue-50 p-7">
            <p className="font-serif text-lg text-orange-700">{String(j.sections.length + 1).padStart(2, "0")}.</p>
            <h2 className="text-3xl text-ink">Cách thức ứng tuyển</h2>
            <p className="mt-3 text-ink-soft">Ứng viên gửi hồ sơ qua form ứng tuyển, bao gồm:</p>
            <ul className="mt-4 space-y-3">
              {j.applyItems.map((it) => (
                <li key={it} className="flex gap-3 font-medium text-ink">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                  {it}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[15px] text-ink-soft">
              Địa điểm làm việc: <strong className="text-ink">{j.location}</strong>
            </p>
          </section>

          <blockquote className="relative overflow-hidden rounded-[32px] bg-orange p-8 text-white md:p-10">
            <div aria-hidden className="absolute -right-10 -top-16 h-64 w-48 rotate-12 bg-white/10 drop-mask" />
            <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Lagoon Clinic – Cùng bạn kiến tạo những giá trị làm đẹp bền vững
            </p>
            <p className="relative mt-4 font-serif text-2xl leading-snug md:text-3xl">“{j.closing}”</p>
          </blockquote>
        </div>

        <aside id="ung-tuyen" className="scroll-mt-32">
          <div className="sticky top-32 rounded-[28px] border border-line bg-white p-6 shadow-[0_30px_60px_-45px_rgba(0,0,0,0.35)]">
            <p className="font-serif text-2xl text-ink">Ứng tuyển {j.title}</p>
            <p className="mb-5 mt-1 text-sm text-ink-soft">Điền thông tin và gửi link CV, Portfolio của bạn.</p>
            <ApplyForm jobSlug={j.slug} jobTitle={j.title} />
          </div>
        </aside>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
