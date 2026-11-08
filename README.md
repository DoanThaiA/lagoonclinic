# Lagoon Clinic – Website giới thiệu

Website giới thiệu **Lagoon – Phòng khám Chuyên khoa Da liễu** (480 Xã Đàn, Hà Nội).
Nội dung dịch vụ & bảng giá lấy từ *Menu dịch vụ* (catalog); màu sắc, font, logo theo *Brand Guideline 12/2025*.

## Stack

| Thành phần | Lựa chọn | Lý do |
|---|---|---|
| Framework | **Next.js 15 (App Router) + React 19 + TypeScript** | SSG cho trang tĩnh (SEO tốt, tải nhanh), API route cho form đặt lịch |
| Styling | **Tailwind CSS v4** | Design tokens theo brand đặt trong `src/app/globals.css` |
| Font | Lora (tiêu đề) + Barlow (nội dung) qua `next/font` | Đúng Brand Guideline, hỗ trợ tiếng Việt, tự host |
| Icon | lucide-react | Nhẹ, tree-shake |
| Ảnh | `next/image` + WebP | Ảnh trích từ catalog/brand book, tự sinh kích thước phù hợp |

## Sơ đồ trang (tham khảo cấu trúc nura.vn, điều chỉnh cho phòng khám da liễu)

```
/                       Trang chủ: hero, giá trị cốt lõi, công nghệ, 13 nhóm dịch vụ,
                        triết lý Lagoon, quy trình, không gian, bài viết, FAQ + form đặt lịch
/gioi-thieu             Câu chuyện thương hiệu, giá trị, đội ngũ, không gian
/dich-vu                Danh mục dịch vụ theo 4 nhóm
/dich-vu/[slug]         13 trang chi tiết: cơ chế, hiệu quả, đối tượng, bảng giá, FAQ, form đặt lịch
/cong-nghe              6 công nghệ: Ultherapy Prime, Thermage FLX, CFU Èlife, Viora, AviClear, Hollywood Spectra
/bang-gia               Bảng giá đầy đủ toàn bộ menu
/bai-viet, /bai-viet/[slug]   Blog kiến thức da liễu
/lien-he                Thông tin liên hệ, bản đồ, form
/dat-lich               Trang đặt lịch (hỗ trợ ?dv=<slug> để chọn sẵn dịch vụ)
/chinh-sach-bao-mat, /dieu-khoan
/sitemap.xml, /robots.txt
```

Tiện ích: thanh liên hệ nổi (Gọi / Zalo / Đặt lịch), mega menu dịch vụ, menu mobile, JSON-LD (MedicalClinic, MedicalProcedure).

## Chạy dự án

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Cập nhật nội dung

- **Thông tin phòng khám** (hotline, địa chỉ, giờ làm việc, Facebook, domain): `src/data/site.ts`
- **Dịch vụ & bảng giá**: `src/data/services.ts` (`original` = giá niêm yết gạch ngang, `price` = giá ưu đãi)
- **Bài viết**: `src/data/posts.ts`
- **Ảnh**: `public/images/`

## Form đặt lịch

`POST /api/booking` kiểm tra dữ liệu (họ tên, SĐT Việt Nam, ngày) và có honeypot chống spam.
Đặt biến môi trường `BOOKING_WEBHOOK_URL` (xem `.env.example`) để chuyển tiếp dữ liệu sang Google Sheets (Apps Script),
Zapier/Make, Lark, Slack… Nếu không đặt, yêu cầu chỉ được ghi log phía server.

## Việc cần làm trước khi go-live

- [ ] Xác nhận giờ làm việc, link fanpage/Messenger, email, tên miền trong `src/data/site.ts` (đánh dấu `TODO`)
- [ ] Cấu hình `BOOKING_WEBHOOK_URL` để nhận lead
- [ ] Thay ảnh không gian (hiện là ảnh concept trong Brand Guideline) bằng ảnh chụp thực tế phòng khám
- [ ] Bổ sung thông tin bác sĩ, giấy phép hoạt động, ảnh trước/sau thật của khách hàng (có đồng ý)
- [ ] Rà soát nội dung y khoa & quảng cáo theo quy định về quảng cáo dịch vụ khám chữa bệnh

## Deploy

Khuyến nghị **Vercel** (zero-config cho Next.js): import repo → thêm biến `BOOKING_WEBHOOK_URL` → Deploy.
