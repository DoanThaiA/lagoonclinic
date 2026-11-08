import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <Logo markOnly className="h-20 w-auto" />
      <p className="mt-6 font-serif text-7xl text-orange">404</p>
      <h1 className="mt-2 text-3xl text-ink">Trang bạn tìm không tồn tại</h1>
      <p className="mt-3 max-w-md text-ink-soft">Có thể đường dẫn đã thay đổi. Hãy quay về trang chủ hoặc khám phá các dịch vụ của Lagoon.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">
          Về trang chủ
        </Link>
        <Link href="/dich-vu" className="btn btn-outline text-ink">
          Xem dịch vụ
        </Link>
      </div>
    </section>
  );
}
