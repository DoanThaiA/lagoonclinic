import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Cpu,
  HeartHandshake,
  Microscope,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import { CtaBand, Faq, SectionHeading, ServiceCard } from "@/components/ui";
import { formatVnd, minPrice, serviceGroups, servicesOrdered, technologies } from "@/data/services";
import { posts, formatDate } from "@/data/posts";
import { site } from "@/data/site";

const pillars = [
  {
    icon: Stethoscope,
    title: "Chuẩn y khoa",
    desc: "Phòng khám Chuyên khoa Da liễu, mọi chỉ định đều qua thăm khám và đánh giá của bác sĩ.",
  },
  {
    icon: Cpu,
    title: "Công nghệ cao",
    desc: "Ultherapy Prime, Thermage FLX, AviClear, Hollywood Spectra… thiết bị thế hệ mới cho từng vấn đề da.",
  },
  {
    icon: ScanFace,
    title: "Cá nhân hóa",
    desc: "Phác đồ thiết kế riêng theo tình trạng, cơ địa và mong muốn của từng khách hàng.",
  },
  {
    icon: HeartHandshake,
    title: "Đồng hành dài lâu",
    desc: "Theo dõi, tái khám và chăm sóc sau điều trị – kèm chế độ bảo hành với các liệu trình trị nám.",
  },
];

const steps = [
  { icon: Microscope, title: "Soi da & thăm khám", desc: "Bác sĩ soi da, phân tích tình trạng và lắng nghe mong muốn của bạn." },
  { icon: ScanFace, title: "Tư vấn phác đồ", desc: "Đề xuất giải pháp phù hợp, minh bạch số buổi, chi phí và kỳ vọng kết quả." },
  { icon: Sparkles, title: "Điều trị chuẩn y khoa", desc: "Thực hiện trong phòng điều trị vô khuẩn với công nghệ chính hãng." },
  { icon: ShieldCheck, title: "Chăm sóc & tái khám", desc: "Hướng dẫn chăm sóc tại nhà, theo dõi và tái khám định kỳ." },
];

const homeFaqs = [
  {
    q: "Lagoon có thăm khám, soi da miễn phí không?",
    a: "Có. Bạn được bác sĩ da liễu thăm khám, soi da và tư vấn phác đồ trước khi quyết định điều trị.",
  },
  {
    q: "Giá trên website đã là giá cuối cùng chưa?",
    a: "Bảng giá trên website là giá tham khảo theo menu dịch vụ hiện hành, bao gồm giá niêm yết và giá ưu đãi. Chi phí thực tế phụ thuộc phác đồ bác sĩ chỉ định sau thăm khám.",
  },
  {
    q: "Điều trị công nghệ cao có cần nghỉ dưỡng không?",
    a: "Phần lớn công nghệ như Ultherapy Prime, Thermage FLX, AviClear, Laser Toning không cần nghỉ dưỡng – bạn có thể sinh hoạt bình thường ngay sau buổi điều trị.",
  },
  {
    q: "Làm sao để đặt lịch?",
    a: `Bạn có thể đặt lịch qua form trên website, gọi hotline ${site.phone} hoặc nhắn Zalo. Chuyên viên sẽ liên hệ xác nhận lịch hẹn.`,
  },
];

export default function Home() {
  const featured = posts.slice(0, 3);
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <Image src="/images/bg-water.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-40 mix-blend-multiply" />
        <div aria-hidden className="absolute -left-24 bottom-[-120px] h-96 w-72 rotate-[20deg] bg-blue-100/70 drop-mask" />
        <div className="container-x relative grid items-center gap-10 pb-16 pt-10 md:pt-16 lg:grid-cols-[1.1fr_1fr] lg:pb-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-white/80 px-4 py-1.5 text-[13px] font-semibold text-orange-700 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-orange" /> Phòng khám Chuyên khoa Da liễu
            </span>
            <h1 className="mt-6 text-[2.6rem] leading-[1.08] text-ink sm:text-6xl lg:text-[4.2rem]">
              Kiến tạo vẻ đẹp
              <br />
              tự nhiên – <em className="whitespace-nowrap font-medium text-orange">Không tuổi</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              Giải pháp trẻ hóa & điều trị da công nghệ cao <strong className="text-ink">bằng công nghệ chuẩn y khoa</strong>. Mỗi
              phác đồ tại Lagoon được cá nhân hóa – ít hơn, đúng hơn, đẹp hơn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/dat-lich" className="btn btn-primary">
                <CalendarCheck className="h-4 w-4" /> Đặt lịch soi da miễn phí
              </Link>
              <Link href="/dich-vu" className="btn btn-outline text-ink">
                Khám phá dịch vụ <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-ink/10 pt-6">
              <div>
                <dt className="text-[13px] text-ink-soft">Nhóm dịch vụ</dt>
                <dd className="font-serif text-3xl text-ink">13+</dd>
              </div>
              <div>
                <dt className="text-[13px] text-ink-soft">Công nghệ cao cấp</dt>
                <dd className="font-serif text-3xl text-ink">{technologies.length}</dd>
              </div>
              <div>
                <dt className="text-[13px] text-ink-soft">Bảo hành nám</dt>
                <dd className="font-serif text-3xl text-ink">5 năm</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute inset-x-6 bottom-0 top-10 bg-gradient-to-b from-blue/30 to-blue-100/50 drop-mask" />
            <div className="absolute -right-2 top-16 h-24 w-20 animate-float bg-orange/80 drop-mask md:h-28 md:w-24" />
            <div className="absolute -left-4 bottom-24 h-16 w-12 animate-float bg-mint drop-mask [animation-delay:1.5s]" />
            <Image
              src="/images/hero-face.webp"
              alt="Làn da căng mịn tự nhiên cùng Lagoon"
              width={1100}
              height={1962}
              priority
              sizes="(min-width:1024px) 460px, 80vw"
              className="fade-bottom relative mx-auto h-[400px] w-auto object-contain md:h-[560px]"
            />
            <div className="absolute bottom-10 left-0 rounded-2xl bg-white/90 p-4 shadow-xl shadow-black/5 backdrop-blur md:-left-8">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-ink-soft">Ưu đãi Ultherapy Prime</p>
              <p className="font-serif text-2xl text-orange-700">giảm đến 58%</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PILLARS ===== */}
      <section className="container-x -mt-6 relative z-10">
        <div className="grid gap-4 rounded-[32px] border border-line bg-white p-4 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.25)] sm:grid-cols-2 md:p-6 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="rounded-3xl p-5 transition hover:bg-orange-50/60">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-700">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-xl text-ink">{p.title}</h3>
              <p className="mt-2 text-[15px] text-ink-soft">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== TECHNOLOGIES ===== */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Công nghệ tại Lagoon"
              title={
                <>
                  Công nghệ đỉnh cao cho <em className="text-orange">từng tầng da</em>
                </>
              }
              desc="Mỗi công nghệ được lựa chọn cho một mục tiêu cụ thể – từ nâng cơ tầng SMAS, căng bóng trung bì đến điều trị tận gốc tuyến bã và sắc tố."
            />
            <Link href="/cong-nghe" className="btn btn-outline text-ink">
              Tất cả công nghệ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((t, i) => (
              <Reveal key={t.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/dich-vu/${t.slug}`}
                  className="group relative flex h-full min-h-[340px] flex-col justify-end overflow-hidden rounded-[28px] bg-ink p-6 text-white"
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    className="object-cover opacity-90 transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                  <div className="relative">
                    <span className="rounded-full bg-orange px-3 py-1 text-[12px] font-semibold uppercase tracking-wider">
                      {t.techLabel}
                    </span>
                    <h3 className="mt-3 text-2xl text-white">{t.name}</h3>
                    <p className="mt-1 text-[15px] text-white/80">{t.tagline}</p>
                    <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-orange-100">
                      Từ {formatVnd(minPrice(t))}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES BY GROUP ===== */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Menu dịch vụ"
            title="Giải pháp toàn diện cho làn da của bạn"
            desc="13 nhóm dịch vụ từ trẻ hóa, nâng cơ, điều trị mụn – nám – sẹo đến chăm sóc da và tiêm thẩm mỹ."
          />
          <div className="mt-12 space-y-14">
            {serviceGroups.map((g) => (
              <div key={g.key}>
                <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-line pb-3">
                  <h3 className="text-2xl text-ink">{g.label}</h3>
                  <span className="hidden text-sm text-ink-soft sm:block">{g.desc}</span>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {servicesOrdered
                    .filter((s) => s.group === g.key)
                    .map((s, i) => (
                      <ServiceCard key={s.slug} s={s} index={i} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="relative overflow-hidden bg-orange py-20 text-white md:py-28">
        <div aria-hidden className="absolute -left-20 -top-20 h-[420px] w-[320px] rotate-[-12deg] bg-white/10 drop-mask" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Lagoon Therapy</span>
            <h2 className="mt-4 text-4xl text-white md:text-5xl">
              “Ít hơn, đúng hơn,
              <br /> <em>đẹp hơn</em>”
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/90">
              Giọt nước Lagoon – biểu tượng của sự tinh khiết và sức sống – là trái tim của thương hiệu. Nước là khởi nguồn của sự
              sống, yếu tố không thể thiếu cho làn da rạng ngời.
            </p>
            <p className="mt-4 max-w-xl text-white/85">
              Hình dáng giọt nước biểu trưng cho sự kết hợp hoàn mỹ giữa công nghệ cao và tinh thần chuẩn y khoa. Lagoon cam kết mang
              đến giải pháp điều trị cá nhân hóa, đánh thức vẻ đẹp tiềm ẩn, giúp làn da bạn đạt đến trạng thái hoàn hảo nhất.
            </p>
            <Link href="/gioi-thieu" className="btn btn-light mt-8">
              Câu chuyện Lagoon <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-[40px]">
              <Image src="/images/tech-face.webp" alt="Công nghệ phân tích da tại Lagoon" fill sizes="(min-width:1024px) 520px, 90vw" className="object-cover" />
            </div>
            <Image
              src="/images/drops-dna.webp"
              alt=""
              width={444}
              height={328}
              className="absolute -bottom-8 -left-2 w-40 drop-shadow-2xl md:-left-10 md:w-56"
            />
          </Reveal>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading center eyebrow="Quy trình" title="Hành trình làn da tại Lagoon" />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <li className="relative h-full rounded-[28px] border border-line bg-white p-7">
                  <span className="absolute right-6 top-5 font-serif text-5xl text-orange/15">0{i + 1}</span>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-[15px] text-ink-soft">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== SPACE ===== */}
      <section className="bg-blue-50 py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Không gian Lagoon"
              title="Thư thái như chạm vào làn nước"
              desc="Gam xanh Lagoon Blue dịu mát kết hợp điểm nhấn cam ấm áp, khung tranh giọt nước đặc trưng – không gian chuẩn y khoa mà vẫn thư giãn."
            />
            <Link href="/gioi-thieu#khong-gian" className="btn btn-outline text-ink">
              Xem thêm <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
            {[
              { src: "/images/facade.webp", cls: "col-span-2 row-span-2", alt: "Mặt tiền phòng khám Lagoon" },
              { src: "/images/interior-3.webp", cls: "", alt: "Sảnh chờ" },
              { src: "/images/room-1.webp", cls: "", alt: "Phòng điều trị" },
              { src: "/images/interior-drops.webp", cls: "", alt: "Khung tranh giọt nước" },
              { src: "/images/interior-1.webp", cls: "", alt: "Quầy lễ tân" },
            ].map((g, i) => (
              <Reveal key={g.src} delay={i * 60} className={`relative overflow-hidden rounded-3xl ${g.cls}`}>
                <Image src={g.src} alt={g.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 hover:scale-105" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Kiến thức làn da" title="Bài viết từ chuyên gia" />
            <Link href="/bai-viet" className="btn btn-outline text-ink">
              Tất cả bài viết <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link href={`/bai-viet/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-blue-50">
                    <Image src={p.image} alt={p.title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <p className="mt-5 text-[13px] font-semibold uppercase tracking-wider text-orange-700">
                    {p.category} · {formatDate(p.date)}
                  </p>
                  <h3 className="mt-2 text-xl text-ink transition group-hover:text-orange-700">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-[15px] text-ink-soft">{p.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ + BOOKING ===== */}
      <section id="dat-lich" className="bg-cream py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Câu hỏi thường gặp" title="Bạn đang băn khoăn?" />
            <div className="mt-8">
              <Faq items={homeFaqs} />
            </div>
          </div>
          <Reveal className="rounded-[32px] bg-ink p-6 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">Đặt lịch hẹn</p>
            <h2 className="mt-3 text-3xl text-white">Nhận tư vấn từ bác sĩ da liễu</h2>
            <p className="mb-7 mt-3 text-white/70">Để lại thông tin, Lagoon sẽ liên hệ trong thời gian sớm nhất.</p>
            <BookingForm dark />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
