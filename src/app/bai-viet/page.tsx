import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/ui";
import { formatDate, posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Bài viết – Kiến thức làn da",
  description: "Kiến thức da liễu, trẻ hóa, điều trị mụn, nám, sẹo và chăm sóc da từ chuyên gia Lagoon.",
  alternates: { canonical: "/bai-viet" },
};

export default function BlogPage() {
  const [first, ...rest] = posts;
  return (
    <>
      <PageHero
        crumbs={[{ label: "Bài viết" }]}
        eyebrow="Kiến thức làn da"
        title="Bài viết từ chuyên gia"
        desc="Hiểu đúng làn da để chăm sóc đúng cách – cập nhật kiến thức da liễu và công nghệ thẩm mỹ mới."
      />

      <div className="container-x py-14 md:py-20">
        <Reveal>
          <Link href={`/bai-viet/${first.slug}`} className="group grid overflow-hidden rounded-[36px] border border-line bg-white lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto">
              <Image src={first.image} alt={first.title} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-7 md:p-12">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-orange-700">
                {first.category} · {formatDate(first.date)}
              </p>
              <h2 className="mt-3 text-3xl text-ink transition group-hover:text-orange-700 md:text-4xl">{first.title}</h2>
              <p className="mt-4 text-ink-soft">{first.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-700">
                Đọc bài viết <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Link href={`/bai-viet/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-blue-50">
                  <Image src={p.image} alt={p.title} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <p className="mt-4 text-[12px] font-semibold uppercase tracking-wider text-orange-700">{p.category}</p>
                <h3 className="mt-1.5 text-lg leading-snug text-ink transition group-hover:text-orange-700">{p.title}</h3>
                <p className="mt-2 flex items-center gap-1.5 text-[13px] text-ink-soft">
                  <Clock className="h-3.5 w-3.5" /> {p.readMin} phút đọc · {formatDate(p.date)}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
