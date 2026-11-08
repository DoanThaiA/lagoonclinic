import type { Metadata } from "next";
import Image from "next/image";
import { Check, Phone } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { Breadcrumb } from "@/components/ui";
import { site } from "@/data/site";
import { getService } from "@/data/services";

export const metadata: Metadata = {
  title: "Đặt lịch thăm khám",
  description: "Đặt lịch thăm khám, soi da miễn phí cùng bác sĩ da liễu tại Lagoon Clinic.",
  alternates: { canonical: "/dat-lich" },
};

export default async function BookingPage({ searchParams }: { searchParams: Promise<{ dv?: string }> }) {
  const { dv } = await searchParams;
  const preset = dv && getService(dv) ? dv : "";
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="container-x grid gap-12 py-10 md:py-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Breadcrumb items={[{ label: "Đặt lịch" }]} />
          <span className="eyebrow mt-6">Đặt lịch hẹn</span>
          <h1 className="mt-3 text-4xl text-ink md:text-5xl">Thăm khám & soi da miễn phí</h1>
          <p className="mt-5 max-w-lg text-ink-soft">
            Mỗi hành trình đẹp bắt đầu từ việc hiểu đúng làn da. Bác sĩ Lagoon sẽ phân tích tình trạng da và tư vấn phác đồ phù hợp
            nhất cho bạn.
          </p>
          <ul className="mt-7 space-y-3">
            {["Soi da & phân tích chuyên sâu", "Tư vấn trực tiếp cùng bác sĩ da liễu", "Báo giá minh bạch, không phát sinh", "Không áp lực mua liệu trình"].map(
              (t) => (
                <li key={t} className="flex items-center gap-3 font-medium text-ink">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ),
            )}
          </ul>
          <a href={site.phoneHref} className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-lg shadow-black/5">
            <Phone className="h-5 w-5 text-orange-700" />
            <span className="text-sm text-ink-soft">Hoặc gọi ngay</span>
            <strong className="text-lg text-ink">{site.phone}</strong>
          </a>
          <div className="relative mt-10 hidden aspect-[16/9] max-w-lg overflow-hidden rounded-[32px] lg:block">
            <Image src="/images/model-pink-wide.webp" alt="" fill sizes="500px" className="object-cover" />
          </div>
        </div>
        <div className="rounded-[36px] border border-line bg-white p-6 shadow-[0_40px_80px_-50px_rgba(0,0,0,0.35)] md:p-10">
          <h2 className="text-2xl text-ink">Thông tin đặt lịch</h2>
          <p className="mb-6 mt-1 text-sm text-ink-soft">Các trường có dấu * là bắt buộc.</p>
          <BookingForm defaultService={preset} />
        </div>
      </div>
    </section>
  );
}
