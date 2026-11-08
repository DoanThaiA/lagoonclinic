import type { Metadata } from "next";
import Image from "next/image";
import { Droplet, Gem, Leaf, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Lagoon – Phòng khám Chuyên khoa Da liễu tại 480 Xã Đàn, Hà Nội. Triết lý “Ít hơn, đúng hơn, đẹp hơn”, kiến tạo vẻ đẹp tự nhiên không tuổi bằng công nghệ chuẩn y khoa.",
  alternates: { canonical: "/gioi-thieu" },
};

const values = [
  { icon: Droplet, title: "Tinh khiết", desc: "Như giọt nước – khởi nguồn của sự sống, Lagoon theo đuổi vẻ đẹp tự nhiên, trong trẻo và khỏe mạnh." },
  { icon: ShieldCheck, title: "Chuẩn y khoa", desc: "Mọi liệu trình đều dựa trên thăm khám chuyên khoa, quy trình vô khuẩn và thiết bị chính hãng." },
  { icon: Gem, title: "Cá nhân hóa", desc: "Không có công thức chung – mỗi làn da được đánh giá và xây dựng phác đồ riêng." },
  { icon: Leaf, title: "Bền vững", desc: "Ưu tiên giải pháp tác động tận gốc, giúp làn da khỏe lâu dài thay vì hiệu quả tức thời." },
];

const gallery = [
  { src: "/images/interior-3.webp", alt: "Sảnh chờ với khung tranh giọt nước" },
  { src: "/images/interior-5.webp", alt: "Hành lang phòng khám" },
  { src: "/images/room-1.webp", alt: "Phòng điều trị riêng" },
  { src: "/images/interior-2.webp", alt: "Khu vực tiếp đón" },
  { src: "/images/room-2.webp", alt: "Phòng chăm sóc da" },
  { src: "/images/interior-4.webp", alt: "Không gian thư giãn" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Giới thiệu" }]}
        eyebrow="Về Lagoon"
        title={
          <>
            Mang lại làn da <em className="text-orange">Không tuổi</em>
          </>
        }
        desc={`${site.legalName} – kiến tạo vẻ đẹp tự nhiên bằng công nghệ chuẩn y khoa.`}
        image="/images/consult.webp"
      />

      {/* Story */}
      <section className="container-x grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-[40px]">
            <Image src="/images/facade.webp" alt="Mặt tiền Lagoon" fill sizes="(min-width:1024px) 450px, 90vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 right-0 w-56 rounded-3xl bg-white p-5 shadow-2xl shadow-black/10 md:right-10">
            <p className="font-serif text-4xl text-orange-700">“</p>
            <p className="-mt-3 font-serif text-lg italic text-ink">{site.slogan}</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <span className="eyebrow">Câu chuyện thương hiệu</span>
          <h2 className="mt-3 text-3xl text-ink md:text-4xl">Vẻ đẹp là sự kết hợp của chăm sóc tự nhiên và nền tảng khoa học vững chắc</h2>
          <div className="prose-lagoon mt-6">
            <p>
              Lagoon ra đời với mong muốn mang đến một địa chỉ da liễu thẩm mỹ <strong>đáng tin cậy</strong>, nơi mỗi khách hàng được
              lắng nghe, thăm khám kỹ lưỡng và điều trị bằng những công nghệ phù hợp nhất.
            </p>
            <p>
              Biểu tượng giọt nước Lagoon tượng trưng cho sự tinh khiết và sức sống. Những đường cong bên dưới gợi lên hình ảnh gợn
              sóng lan tỏa – như hiệu quả chăm sóc được nuôi dưỡng từ bên trong và lan rộng ra bên ngoài.
            </p>
            <p>
              Triết lý <strong>“Ít hơn, đúng hơn, đẹp hơn”</strong> định hướng mọi quyết định điều trị: không lạm dụng, chỉ định đúng
              vấn đề, hướng đến vẻ đẹp tự nhiên và bền vững.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container-x">
          <SectionHeading center eyebrow="Giá trị cốt lõi" title="Điều Lagoon theo đuổi" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="rounded-[28px] bg-white p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange text-white">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl text-ink">{v.title}</h3>
                <p className="mt-2 text-[15px] text-ink-soft">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team (placeholder) */}
      <section className="container-x grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <Reveal delay={60} className="lg:order-2">
          <div className="relative aspect-square max-w-lg overflow-hidden rounded-[40px]">
            <Image src="/images/consult.webp" alt="Bác sĩ Lagoon tư vấn cho khách hàng" fill sizes="(min-width:1024px) 500px, 90vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal>
          <span className="eyebrow">Đội ngũ</span>
          <h2 className="mt-3 text-3xl text-ink md:text-4xl">Bác sĩ chuyên khoa da liễu đồng hành cùng bạn</h2>
          <p className="mt-5 text-ink-soft">
            Đội ngũ bác sĩ và kỹ thuật viên tại Lagoon được đào tạo bài bản, cập nhật liên tục các kỹ thuật và công nghệ mới. Mỗi khách
            hàng đều được bác sĩ trực tiếp thăm khám, tư vấn và theo dõi trong suốt liệu trình.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Thăm khám & soi da trực tiếp", "Phác đồ minh bạch, rõ ràng", "Theo dõi & tái khám định kỳ", "Hỗ trợ tận tâm sau điều trị"].map((t) => (
              <li key={t} className="rounded-2xl border border-line px-4 py-3 text-[15px] font-medium text-ink">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Space */}
      <section id="khong-gian" className="scroll-mt-32 bg-cream py-16 md:py-24">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Không gian"
            title="Không gian chuẩn y khoa, thư thái như làn nước"
            desc="Lagoon Blue dịu mát, điểm nhấn cam ấm áp và khung tranh giọt nước đặc trưng."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={(i % 3) * 70} className={`relative overflow-hidden rounded-3xl ${i === 0 ? "md:row-span-2" : ""} aspect-square ${i === 0 ? "md:aspect-auto" : ""}`}>
                <Image src={g.src} alt={g.alt} fill sizes="(min-width:768px) 33vw, 50vw" className="object-cover transition duration-700 hover:scale-105" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
