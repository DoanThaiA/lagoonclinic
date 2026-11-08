export type Block = { type: "p" | "h2" | "h3"; text: string } | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readMin: number;
  image: string;
  relatedService?: string;
  content: Block[];
};

export const posts: Post[] = [
  {
    slug: "ultherapy-prime-hay-thermage-flx",
    title: "Ultherapy Prime hay Thermage FLX: nên chọn công nghệ nào?",
    excerpt:
      "Hai “tượng đài” trẻ hóa không xâm lấn có cơ chế khác nhau. Hiểu đúng giúp bạn chọn liệu trình phù hợp – hoặc kết hợp để đạt hiệu quả toàn diện.",
    category: "Trẻ hóa da",
    date: "2026-10-20",
    readMin: 5,
    image: "/images/thermage.webp",
    relatedService: "ultherapy-prime",
    content: [
      {
        type: "p",
        text: "Chùng nhão, chảy xệ và nếp nhăn là dấu hiệu lão hóa xuất hiện ở nhiều tầng khác nhau của da. Vì vậy không có một công nghệ duy nhất cho mọi vấn đề – mà cần chọn đúng công nghệ cho đúng tầng.",
      },
      { type: "h2", text: "Ultherapy Prime – nâng cơ từ lớp SMAS" },
      {
        type: "p",
        text: "Ultherapy Prime sử dụng sóng siêu âm hội tụ, đưa năng lượng chính xác tới lớp cơ SMAS ở độ sâu 4.5mm – lớp mà các bác sĩ phẫu thuật căng da vẫn tác động. Màn hình siêu âm thời gian thực giúp bác sĩ nhìn thấy từng lớp mô để đặt năng lượng đúng chỗ.",
      },
      {
        type: "ul",
        items: [
          "Mạnh về: nâng cơ, gọn đường viền hàm, giảm nọng cằm.",
          "Hiệu quả: rõ dần sau 2–3 tháng, duy trì 1–2 năm.",
          "Phù hợp: da bắt đầu chảy xệ vùng má, hàm, cổ.",
        ],
      },
      { type: "h2", text: "Thermage FLX – căng bóng và săn chắc bề mặt" },
      {
        type: "p",
        text: "Thermage FLX dùng sóng RF đơn cực 6MHz làm nóng lan tỏa lớp trung bì. Nhiệt khiến các sợi collagen co lại tức thì và kích thích tạo collagen mới. Đầu Total Tip 4.0 phân bổ năng lượng đồng đều trên bề mặt.",
      },
      {
        type: "ul",
        items: [
          "Mạnh về: căng bóng, săn da mí mắt, cổ, thu nhỏ lỗ chân lông.",
          "Hiệu quả: thấy ngay sau buổi đầu, tối ưu sau 3–6 tháng.",
          "Phù hợp: da mỏng, nhăn nhỏ, kém đàn hồi.",
        ],
      },
      { type: "h2", text: "Khi nào nên kết hợp?" },
      {
        type: "p",
        text: "Nếu vừa chảy xệ vừa nhăn nhỏ, bác sĩ thường đề xuất phối hợp: Ultherapy “nâng khung” ở tầng sâu, Thermage “làm căng” lớp trên. Hai công nghệ bổ trợ cho nhau thay vì thay thế nhau.",
      },
      {
        type: "p",
        text: "Tại Lagoon, mỗi phác đồ đều bắt đầu bằng buổi thăm khám để đánh giá độ dày mô, mức chảy xệ và mong muốn của bạn – vì “ít hơn, đúng hơn” luôn đẹp hơn.",
      },
    ],
  },
  {
    slug: "aviclear-laser-1726nm-tri-mun",
    title: "AviClear – laser 1726nm điều trị mụn tận gốc tuyến bã nhờn",
    excerpt:
      "AviClear là công nghệ laser nhắm chọn lọc vào tuyến bã nhờn – nguyên nhân gốc của mụn trứng cá. Cùng tìm hiểu cơ chế, liệu trình và ai nên thực hiện.",
    category: "Điều trị mụn",
    date: "2026-10-05",
    readMin: 4,
    image: "/images/aviclear.webp",
    relatedService: "aviclear",
    content: [
      {
        type: "p",
        text: "Mụn trứng cá hình thành khi tuyến bã nhờn tiết quá nhiều dầu, kết hợp tế bào chết gây bít tắc và vi khuẩn phát triển. Hầu hết các phương pháp truyền thống chỉ xử lý phần “ngọn”; AviClear tác động thẳng vào “gốc”.",
      },
      { type: "h2", text: "Vì sao là bước sóng 1726nm?" },
      {
        type: "p",
        text: "Ở bước sóng 1726nm, năng lượng laser được lipid (chất béo/dầu) hấp thụ mạnh hơn nước trong mô. Nhờ đó nhiệt tập trung vào tuyến bã nhờn, làm thu nhỏ và giảm hoạt động của tuyến – trong khi vùng da xung quanh được bảo vệ.",
      },
      { type: "h2", text: "Liệu trình như thế nào?" },
      {
        type: "ul",
        items: [
          "3 buổi, mỗi buổi cách nhau 1 tháng.",
          "Không cần nghỉ dưỡng, có thể trang điểm sau điều trị theo hướng dẫn.",
          "Mụn giảm dần và tiếp tục cải thiện nhiều tháng sau khi kết thúc liệu trình.",
        ],
      },
      { type: "h2", text: "Ai phù hợp với AviClear?" },
      {
        type: "ul",
        items: [
          "Mụn viêm, mụn mủ, mụn bọc, mụn nang và mụn đầu đen/đầu trắng.",
          "Người không muốn hoặc không dung nạp thuốc uống isotretinoin/kháng sinh.",
          "Da dầu, lỗ chân lông to, mụn lưng.",
        ],
      },
      {
        type: "p",
        text: "Bác sĩ da liễu sẽ thăm khám để xác định loại mụn, loại trừ các tình trạng cần điều trị nội khoa và xây dựng quy trình chăm sóc tại nhà đi kèm.",
      },
    ],
  },
  {
    slug: "nam-da-phan-loai-va-dieu-tri",
    title: "Nám da: phân loại, nguyên nhân và nguyên tắc điều trị bằng laser",
    excerpt:
      "Nám là tình trạng tăng sắc tố mạn tính, dễ tái phát. Điều trị hiệu quả cần đúng chẩn đoán, đúng công nghệ và một kế hoạch duy trì lâu dài.",
    category: "Điều trị nám",
    date: "2026-09-18",
    readMin: 6,
    image: "/images/laser-woman.webp",
    relatedService: "laser-tri-nam",
    content: [
      { type: "h2", text: "Các dạng nám thường gặp" },
      {
        type: "ul",
        items: [
          "Nám mảng (thượng bì): ranh giới rõ, màu nâu nhạt – đáp ứng điều trị tốt hơn.",
          "Nám chân sâu (trung bì): màu nâu xám, xanh xám – cần liệu trình dài và kiên trì.",
          "Nám hỗn hợp: kết hợp cả hai, thường gặp nhất.",
        ],
      },
      { type: "h2", text: "Nguyên nhân" },
      {
        type: "p",
        text: "Ánh nắng (UV và ánh sáng nhìn thấy), thay đổi nội tiết (mang thai, thuốc tránh thai), yếu tố di truyền, stress và chăm sóc da sai cách (dùng kem trộn, corticoid) đều có thể kích hoạt hoặc làm nám nặng hơn.",
      },
      { type: "h2", text: "Nguyên tắc điều trị bằng laser" },
      {
        type: "p",
        text: "Laser Q-Switched Nd:YAG như Hollywood Spectra phát xung cực ngắn, phá vỡ hắc tố thành hạt siêu nhỏ để cơ thể đào thải. Với nám, bác sĩ thường dùng kỹ thuật Laser Toning năng lượng thấp, nhiều buổi – thay vì năng lượng cao gây kích ứng và tăng sắc tố sau viêm.",
      },
      {
        type: "ul",
        items: [
          "Điều trị theo liệu trình, không “bắn mạnh cho nhanh”.",
          "Kết hợp hoạt chất ức chế sắc tố, phục hồi hàng rào da.",
          "Chống nắng nghiêm ngặt mỗi ngày, kể cả trong nhà.",
          "Duy trì định kỳ sau khi đạt hiệu quả để hạn chế tái phát.",
        ],
      },
      {
        type: "p",
        text: "Các gói Hollywood Spectra tại Lagoon (Glow, Premium, Luxury, Royal) được thiết kế theo mức độ nám và đi kèm chế độ bảo hành – giúp bạn yên tâm đồng hành cùng liệu trình dài hạn.",
      },
    ],
  },
  {
    slug: "rejuran-profhilo-skinbooster-khac-nhau",
    title: "Rejuran, Profhilo, Skinbooster khác nhau như thế nào?",
    excerpt:
      "Cùng là tiêm dưỡng chất nhưng mỗi dòng sản phẩm có thành phần và mục tiêu riêng. Bài viết giúp bạn hiểu để trao đổi với bác sĩ dễ dàng hơn.",
    category: "Tiêm dưỡng chất",
    date: "2026-08-30",
    readMin: 4,
    image: "/images/meso.webp",
    relatedService: "mesotherapy-bap",
    content: [
      { type: "h2", text: "Rejuran – “chữa lành” làn da" },
      {
        type: "p",
        text: "Thành phần chính là Polynucleotide (PN) chiết xuất từ DNA cá hồi, hỗ trợ sửa chữa và tái tạo tế bào da. Phù hợp da mỏng yếu, da sau laser, sẹo nông, lỗ chân lông to. Có các dòng Rejuran I (vùng mắt), Rejuran S (sẹo) và Rejuran Healer.",
      },
      { type: "h2", text: "Profhilo – cấp ẩm sâu và làm săn" },
      {
        type: "p",
        text: "Profhilo là HA nồng độ cao với công nghệ B.A.P, lan tỏa đều dưới da sau khi tiêm ở các điểm cố định. Sản phẩm vừa cấp ẩm sâu vừa kích thích collagen và elastin, giúp da săn chắc hơn. Profhilo Structura được phát triển cho vùng cần nâng đỡ cấu trúc.",
      },
      { type: "h2", text: "Skinbooster & Collagen" },
      {
        type: "p",
        text: "Nhóm Skinbooster (Nano Diamond, Karisma, Nano Collagen Redensity1, Linerase, Exo Booster) bổ sung dưỡng chất, collagen hoặc exosome giúp da căng bóng, đều màu và mịn hơn.",
      },
      { type: "h2", text: "Chọn thế nào?" },
      {
        type: "ul",
        items: [
          "Da yếu, sau điều trị: ưu tiên Rejuran.",
          "Da khô, chảy xệ nhẹ: ưu tiên Profhilo.",
          "Da xỉn màu, muốn căng bóng nhanh: Skinbooster.",
          "Nhiều vấn đề cùng lúc: bác sĩ sẽ phối hợp theo phác đồ.",
        ],
      },
    ],
  },
  {
    slug: "cham-soc-sau-botox-filler",
    title: "Chăm sóc sau tiêm Botox, Filler: những điều cần biết",
    excerpt:
      "Kết quả đẹp không chỉ đến từ kỹ thuật tiêm mà còn từ cách chăm sóc sau đó. Ghi nhớ những lưu ý quan trọng trong 24–72 giờ đầu.",
    category: "Tiêm thẩm mỹ",
    date: "2026-08-12",
    readMin: 3,
    image: "/images/filler.webp",
    relatedService: "botox",
    content: [
      { type: "h2", text: "Sau tiêm Botox" },
      {
        type: "ul",
        items: [
          "Giữ tư thế thẳng, không nằm trong 4 giờ đầu.",
          "Không xoa, ấn mạnh vào vùng tiêm.",
          "Tránh vận động mạnh, xông hơi, rượu bia trong 24 giờ.",
          "Hiệu quả xuất hiện sau 3–14 ngày – hãy kiên nhẫn trước khi đánh giá.",
        ],
      },
      { type: "h2", text: "Sau tiêm Filler" },
      {
        type: "ul",
        items: [
          "Có thể sưng, bầm nhẹ 1–3 ngày; chườm lạnh nhẹ nhàng nếu cần.",
          "Tránh nhiệt độ cao, massage mặt trong 1–2 tuần.",
          "Hạn chế trang điểm vùng tiêm trong 24 giờ.",
          "Liên hệ ngay phòng khám nếu thấy đau tăng, da đổi màu trắng/tím bất thường.",
        ],
      },
      {
        type: "p",
        text: "Lagoon luôn tái khám và theo dõi sau tiêm. Đừng ngần ngại gọi hotline nếu bạn có bất kỳ thắc mắc nào trong quá trình chăm sóc.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}
