import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { Breadcrumb, CtaBand } from "@/components/ui";
import { formatDate, getPost, posts } from "@/data/posts";
import { getService } from "@/data/services";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/bai-viet/${p.slug}` },
    openGraph: { type: "article", images: [{ url: p.image }], publishedTime: p.date },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const service = p.relatedService ? getService(p.relatedService) : undefined;
  const others = posts.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="bg-gradient-to-b from-blue-50 to-white">
          <div className="container-x max-w-4xl py-10 md:py-14">
            <Breadcrumb items={[{ label: "Bài viết", href: "/bai-viet" }, { label: p.category }]} />
            <p className="mt-6 text-[13px] font-semibold uppercase tracking-wider text-orange-700">{p.category}</p>
            <h1 className="mt-3 text-3xl text-ink md:text-5xl">{p.title}</h1>
            <p className="mt-4 flex items-center gap-2 text-sm text-ink-soft">
              <Clock className="h-4 w-4" /> {p.readMin} phút đọc · {formatDate(p.date)} · Lagoon Clinic
            </p>
          </div>
        </header>
        <div className="container-x max-w-5xl">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[32px] bg-blue-50">
            <Image src={p.image} alt={p.title} fill priority sizes="(min-width:1024px) 1000px, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="container-x grid max-w-5xl gap-12 py-12 lg:grid-cols-[1fr_300px]">
          <div className="prose-lagoon text-[17px]">
            <p className="!text-lg !text-ink">{p.excerpt}</p>
            {p.content.map((b, i) => {
              if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
              if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
              if (b.type === "ul")
                return (
                  <ul key={i}>
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{b.text}</p>;
            })}
            <p className="mt-8 rounded-2xl bg-cream p-4 !text-[14px]">
              Nội dung mang tính tham khảo, không thay thế chẩn đoán và chỉ định của bác sĩ. Vui lòng thăm khám để được tư vấn phù hợp với
              tình trạng da của bạn.
            </p>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-32 lg:self-start">
            {service && (
              <Link href={`/dich-vu/${service.slug}`} className="group block overflow-hidden rounded-[24px] border border-line">
                <div className="relative aspect-[4/3]">
                  <Image src={service.image} alt={service.name} fill sizes="300px" className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-ink-soft">Dịch vụ liên quan</p>
                  <p className="mt-1 font-serif text-xl text-ink group-hover:text-orange-700">{service.name}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-orange-700">
                    Xem chi tiết <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            )}
            <div className="rounded-[24px] bg-cream p-5">
              <p className="mb-4 font-serif text-xl text-ink">Nhận tư vấn miễn phí</p>
              <BookingForm compact defaultService={service?.slug} />
            </div>
          </aside>
        </div>
      </article>

      <section className="bg-cream py-14">
        <div className="container-x">
          <h2 className="text-3xl text-ink">Bài viết khác</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/bai-viet/${o.slug}`} className="group flex gap-4 rounded-3xl bg-white p-3">
                <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-2xl">
                  <Image src={o.image} alt="" fill sizes="112px" className="object-cover" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-orange-700">{o.category}</p>
                  <p className="mt-1 font-semibold leading-snug text-ink group-hover:text-orange-700">{o.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
