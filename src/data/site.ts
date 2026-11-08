/**
 * Thông tin chung của phòng khám.
 * Nguồn: Menu dịch vụ (catalog) & Brand Guideline Lagoon.
 * Các trường đánh dấu TODO cần phòng khám xác nhận trước khi go-live.
 */
export const site = {
  name: "Lagoon Clinic",
  legalName: "Lagoon - Phòng khám Chuyên khoa Da liễu",
  shortName: "Lagoon",
  slogan: "Ít hơn, đúng hơn, đẹp hơn",
  tagline: "Giải pháp trẻ hóa & Điều trị da công nghệ cao",
  description:
    "Lagoon – Phòng khám Chuyên khoa Da liễu tại Hà Nội. Trẻ hóa, nâng cơ, điều trị mụn, nám, sẹo và chăm sóc da chuyên sâu bằng công nghệ chuẩn y khoa: Ultherapy Prime, Thermage FLX, AviClear, Hollywood Spectra…",
  url: "https://lagoonclinic.vn", // TODO: thay bằng tên miền chính thức
  address: "480 Xã Đàn, P. Văn Miếu - Quốc Tử Giám, TP. Hà Nội",
  phone: "0829.962.269",
  phoneHref: "tel:0829962269",
  zalo: "https://zalo.me/0829962269",
  // TODO: thay bằng link fanpage chính thức
  facebook:
    "https://www.facebook.com/search/top?q=Lagoon%20-%20Ph%C3%B2ng%20kh%C3%A1m%20Chuy%C3%AAn%20khoa%20Da%20li%E1%BB%85u",
  messenger: "", // TODO: https://m.me/<page-id>
  email: "", // TODO: email liên hệ
  hours: "08:30 – 20:00, Thứ 2 – Chủ nhật", // TODO: xác nhận giờ làm việc
  mapEmbed:
    "https://www.google.com/maps?q=480%20X%C3%A3%20%C4%90%C3%A0n%2C%20%C4%90%E1%BB%91ng%20%C4%90a%2C%20H%C3%A0%20N%E1%BB%99i&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=480%20X%C3%A3%20%C4%90%C3%A0n%2C%20H%C3%A0%20N%E1%BB%99i",
};

export const mainNav = [
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Dịch vụ", href: "/dich-vu", mega: true },
  { label: "Công nghệ", href: "/cong-nghe" },
  { label: "Bảng giá", href: "/bang-gia" },
  { label: "Bài viết", href: "/bai-viet" },
  { label: "Liên hệ", href: "/lien-he" },
];
