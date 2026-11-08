import type { Metadata } from "next";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { PageHero } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: `Liên hệ Lagoon – ${site.address}. Hotline ${site.phone}.`,
  alternates: { canonical: "/lien-he" },
};

export default function ContactPage() {
  const cards = [
    { icon: MapPin, label: "Địa chỉ", value: site.address, href: site.mapLink, external: true },
    { icon: Phone, label: "Hotline", value: site.phone, href: site.phoneHref },
    { icon: MessageCircle, label: "Zalo", value: "Chat với Lagoon", href: site.zalo, external: true },
    { icon: Clock, label: "Giờ làm việc", value: site.hours },
  ];
  return (
    <>
      <PageHero
        crumbs={[{ label: "Liên hệ" }]}
        eyebrow="Liên hệ"
        title="Lagoon luôn sẵn sàng lắng nghe bạn"
        desc="Ghé thăm phòng khám, gọi hotline hoặc để lại thông tin – chúng tôi sẽ phản hồi trong thời gian sớm nhất."
        image="/images/interior-1.webp"
      />

      <section className="container-x py-14 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => {
            const inner = (
              <>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-700">
                  <c.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-[13px] font-semibold uppercase tracking-wider text-ink-soft">{c.label}</p>
                <p className="mt-1 font-semibold text-ink">{c.value}</p>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="rounded-[24px] border border-line bg-white p-6 transition hover:border-orange/40 hover:shadow-lg"
              >
                {inner}
              </a>
            ) : (
              <div key={c.label} className="rounded-[24px] border border-line bg-white p-6">
                {inner}
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] border border-line bg-blue-50">
            <iframe
              title="Bản đồ Lagoon Clinic"
              src={site.mapEmbed}
              className="h-[360px] w-full lg:h-full lg:min-h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-[32px] bg-cream p-6 md:p-10">
            <h2 className="text-3xl text-ink">Gửi yêu cầu tư vấn</h2>
            <p className="mb-6 mt-2 text-ink-soft">Điền thông tin bên dưới, chuyên viên Lagoon sẽ gọi lại cho bạn.</p>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
