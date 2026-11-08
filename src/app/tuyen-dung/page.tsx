import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Banknote, Clock, GraduationCap, HeartHandshake, MapPin, Sparkles, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/ui";
import { jobs } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Tuyển dụng",
  description: "Cơ hội việc làm tại Lagoon – Phòng khám Chuyên khoa Da liễu, 480 Xã Đàn, Hà Nội. Ứng tuyển trực tuyến.",
  alternates: { canonical: "/tuyen-dung" },
};

const reasons = [
  { icon: Sparkles, title: "Thương hiệu đang phát triển", desc: "Tham gia trực tiếp vào hành trình xây dựng Lagoon từ những ngày đầu." },
  { icon: Users, title: "Đội ngũ chuyên môn", desc: "Làm việc cùng bác sĩ da liễu và chuyên viên giàu kinh nghiệm." },
  { icon: GraduationCap, title: "Phát triển năng lực", desc: "Được đào tạo, trao quyền và hỗ trợ nguồn lực để phát huy tối đa." },
  { icon: HeartHandshake, title: "Môi trường tận tâm", desc: "Không gian làm việc chuẩn y khoa, hiện đại và thân thiện." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Tuyển dụng" }]}
        eyebrow="Gia nhập Lagoon"
        title={
          <>
            Cùng Lagoon kiến tạo <em className="text-orange">giá trị làm đẹp</em> bền vững
          </>
        }
        desc="Chúng tôi tìm kiếm những người đồng hành tận tâm, sáng tạo và chuyên nghiệp – cùng mang đến vẻ đẹp tự nhiên, không tuổi cho khách hàng."
        image="/images/consult.webp"
      />

      <section className="container-x py-14 md:py-20">
        <SectionHeading eyebrow="Vị trí đang tuyển" title={`${jobs.length} vị trí đang mở`} />
        <div className="mt-10 space-y-5">
          {jobs.map((j) => (
            <Reveal key={j.slug}>
              <Link
                href={`/tuyen-dung/${j.slug}`}
                className="group grid items-center gap-6 overflow-hidden rounded-[32px] border border-line bg-white p-5 transition hover:border-orange/40 hover:shadow-[0_24px_50px_-28px_rgba(244,121,32,0.55)] md:grid-cols-[180px_1fr_auto] md:p-6"
              >
                <div className="relative hidden aspect-square overflow-hidden rounded-3xl bg-orange-50 md:block">
                  <Image src={j.image} alt="" fill sizes="180px" className="object-cover object-top" />
                </div>
                <div>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
                    {j.department}
                  </span>
                  <h3 className="mt-3 text-2xl text-ink group-hover:text-orange-700 md:text-3xl">{j.title}</h3>
                  <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">{j.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink">
                    <li className="flex items-center gap-1.5"><Banknote className="h-4 w-4 text-orange-700" /> {j.salaryText}</li>
                    <li className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-orange-700" /> {j.location}</li>
                    <li className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-orange-700" /> {j.typeLabel}</li>
                  </ul>
                </div>
                <span className="btn btn-primary justify-self-start md:justify-self-end">
                  Xem chi tiết <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16 md:py-20">
        <div className="container-x">
          <SectionHeading center eyebrow="Vì sao chọn Lagoon" title="Làm việc tại Lagoon" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80} className="rounded-[28px] bg-white p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange text-white">
                  <r.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl text-ink">{r.title}</h3>
                <p className="mt-2 text-[15px] text-ink-soft">{r.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {["/images/interior-3.webp", "/images/room-1.webp", "/images/interior-drops.webp", "/images/interior-1.webp"].map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-3xl">
              <Image src={src} alt="Không gian làm việc tại Lagoon" fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
