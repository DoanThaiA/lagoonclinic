/**
 * Dữ liệu dịch vụ & bảng giá – trích từ "Menu dịch vụ" Lagoon.
 * original = giá niêm yết (gạch ngang), price = giá ưu đãi.
 */

export type PriceItem = {
  name: string;
  detail?: string;
  original?: number;
  price: number;
  priceMax?: number;
  frequency?: string;
  note?: string;
  /** Giá theo đơn vị lẻ (vd: 1 line) – không dùng để tính "giá từ" */
  perUnit?: boolean;
};

export type PriceGroup = {
  title: string;
  subtitle?: string;
  items: PriceItem[];
};

export type ServiceGroupKey = "nang-co" | "dieu-tri" | "cham-soc" | "tiem";

export type Service = {
  slug: string;
  no: string;
  name: string;
  menuName: string;
  group: ServiceGroupKey;
  tagline: string;
  summary: string;
  image: string;
  deviceImage?: string;
  isTechnology?: boolean;
  techLabel?: string;
  mechanism: string[];
  benefits: string[];
  suitableFor: string[];
  facts: { label: string; value: string }[];
  priceGroups: PriceGroup[];
  faqs: { q: string; a: string }[];
};

export const serviceGroups: { key: ServiceGroupKey; label: string; desc: string }[] = [
  { key: "nang-co", label: "Nâng cơ & Trẻ hóa", desc: "Công nghệ không xâm lấn tác động tầng sâu" },
  { key: "dieu-tri", label: "Điều trị da", desc: "Mụn, nám, sắc tố, sẹo và các vấn đề da" },
  { key: "cham-soc", label: "Chăm sóc da", desc: "Phục hồi, cấp ẩm, thay da sinh học" },
  { key: "tiem", label: "Tiêm thẩm mỹ", desc: "Botox, Filler, Mesotherapy & B.A.P" },
];

export const services: Service[] = [
  {
    slug: "ultherapy-prime",
    no: "01",
    name: "Ultherapy Prime",
    menuName: "Ultherapy Prime – Nâng cơ tầng sâu",
    group: "nang-co",
    tagline: "Nâng cơ trẻ hóa tầng sâu",
    summary:
      "Công nghệ sóng siêu âm hội tụ đỉnh cao, tác động chính xác đến lớp cơ SMAS ở độ sâu 4.5mm mà không xâm lấn – nâng cơ, xóa nọng và tái cấu trúc toàn bộ khuôn mặt.",
    image: "/images/ultherapy.webp",
    deviceImage: "/images/device-ultherapy.webp",
    isTechnology: true,
    techLabel: "Sóng siêu âm hội tụ (MFU-V)",
    mechanism: [
      "Tác động chính xác đến lớp cơ SMAS ở độ sâu 4.5mm mà không xâm lấn.",
      "Màn hình siêu âm thời gian thực giúp bác sĩ quan sát các lớp mô và đặt năng lượng đúng tầng.",
      "Tăng sinh Collagen & Elastin tự nhiên, tái cấu trúc toàn bộ khuôn mặt.",
    ],
    benefits: [
      "Thắt chặt cơ chùng nhão, nâng cơ mặt, xóa nọng cằm.",
      "Xóa mờ nếp nhăn vùng mắt, trán và rãnh cười.",
      "Đường viền hàm gọn gàng, gương mặt thanh thoát hơn.",
      "Hiệu quả cải thiện dần trong 2–3 tháng và duy trì 1–2 năm.",
    ],
    suitableFor: [
      "Da bắt đầu chùng nhão, chảy xệ vùng má, hàm, cổ",
      "Có nọng cằm, đường viền hàm kém sắc nét",
      "Muốn trẻ hóa nhưng không phẫu thuật, không nghỉ dưỡng",
    ],
    facts: [
      { label: "Độ sâu tác động", value: "Lớp SMAS 4.5mm" },
      { label: "Thời gian thực hiện", value: "60 – 90 phút" },
      { label: "Nghỉ dưỡng", value: "Không cần" },
      { label: "Duy trì", value: "1 – 2 năm/lần" },
    ],
    priceGroups: [
      {
        title: "Ultherapy Prime",
        items: [
          { name: "1 line", original: 168_000, price: 100_000, perUnit: true },
          { name: "600 lines", original: 108_000_000, price: 45_000_000, frequency: "1-2 năm/lần" },
          { name: "1000 lines", original: 168_000_000, price: 70_000_000, frequency: "1-2 năm/lần" },
        ],
      },
    ],
    faqs: [
      {
        q: "Ultherapy Prime có đau không?",
        a: "Bạn có thể cảm nhận các điểm ấm/châm chích nhẹ khi năng lượng tới lớp sâu. Bác sĩ sẽ điều chỉnh mức năng lượng và có thể dùng thuốc tê bôi để buổi điều trị dễ chịu hơn.",
      },
      {
        q: "Bao lâu thì thấy hiệu quả?",
        a: "Da săn hơn ngay sau buổi đầu, hiệu quả nâng cơ rõ nhất sau 2–3 tháng khi collagen mới được tạo thành và duy trì khoảng 1–2 năm.",
      },
      {
        q: "Bao nhiêu line là phù hợp?",
        a: "Số line phụ thuộc diện tích và mức độ chảy xệ. Bác sĩ sẽ thăm khám, đánh giá độ dày mô và tư vấn số line tối ưu – thường 600 line cho mặt hoặc 1000 line cho mặt và cổ.",
      },
    ],
  },
  {
    slug: "thermage-flx",
    no: "02",
    name: "Thermage FLX",
    menuName: "Thermage FLX – Siêu trẻ hóa & căng bóng",
    group: "nang-co",
    tagline: "Siêu trẻ hóa & Căng bóng da",
    summary:
      "Khai phóng làn da căng mịn, xóa nhăn vượt thời gian với sóng RF đơn cực 6MHz làm nóng sâu các lớp tế bào da, kết hợp đầu Total Tip 4.0 phân bổ năng lượng đồng đều.",
    image: "/images/thermage.webp",
    isTechnology: true,
    techLabel: "Sóng RF đơn cực 6MHz",
    mechanism: [
      "Sử dụng sóng RF đơn cực 6MHz làm nóng sâu các lớp tế bào da.",
      "Đầu thông minh Total Tip 4.0 giúp phân bổ năng lượng đồng đều, tối ưu hiệu quả.",
      "Nhiệt làm co các sợi collagen hiện có và kích thích tạo collagen mới.",
    ],
    benefits: [
      "Căng bóng tức thì, săn chắc da chùng nhão mi mắt và vùng cổ.",
      "Phục hồi độ đàn hồi, thu nhỏ lỗ chân lông.",
      "Làm mờ nếp nhăn, da mịn và đều màu hơn.",
    ],
    suitableFor: [
      "Da mỏng, kém đàn hồi, có nếp nhăn nhỏ",
      "Mí mắt chùng, vùng cổ nhăn",
      "Muốn da căng bóng nhanh trước sự kiện",
    ],
    facts: [
      { label: "Công nghệ", value: "RF đơn cực 6MHz" },
      { label: "Đầu điều trị", value: "Total Tip 4.0" },
      { label: "Nghỉ dưỡng", value: "Không cần" },
      { label: "Duy trì", value: "12 – 18 tháng" },
    ],
    priceGroups: [
      {
        title: "Thermage FLX",
        items: [
          { name: "Vùng mắt", detail: "450 shots", original: 50_000_000, price: 30_000_000, frequency: "12-18 tháng" },
          { name: "Vùng mặt & cổ", detail: "900 - 1200 shots", original: 100_000_000, price: 70_000_000, frequency: "12-18 tháng" },
        ],
      },
    ],
    faqs: [
      {
        q: "Thermage FLX khác Ultherapy thế nào?",
        a: "Thermage dùng sóng RF làm nóng lan tỏa lớp trung bì – mạnh về căng bóng, săn da, thu nhỏ lỗ chân lông. Ultherapy dùng siêu âm hội tụ tác động điểm tới lớp SMAS – mạnh về nâng cơ. Hai công nghệ thường được phối hợp để đạt hiệu quả toàn diện.",
      },
      {
        q: "Sau Thermage có cần kiêng gì không?",
        a: "Không cần nghỉ dưỡng. Bạn nên dưỡng ẩm, chống nắng kỹ và tránh xông hơi, tắm nước quá nóng trong 2–3 ngày đầu.",
      },
    ],
  },
  {
    slug: "cfu-elife",
    no: "03",
    name: "CFU Èlife",
    menuName: "CFU Èlife – Nâng cơ & giảm mỡ",
    group: "nang-co",
    tagline: "Nâng cơ & Giảm mỡ công nghệ mới",
    summary:
      "Định hình vóc dáng & đường nét khuôn mặt bằng sóng siêu âm hội tụ tác động đến lớp cơ SMAS, đồng thời hủy mỡ cục bộ vùng nọng cằm, bắp tay, bụng, đùi.",
    image: "/images/cfu.webp",
    deviceImage: "/images/device-cfu.webp",
    isTechnology: true,
    techLabel: "Siêu âm hội tụ đa tầng",
    mechanism: [
      "Tác động sâu đến lớp cơ SMAS (4.5mm), giúp co thắt sợi cơ, nâng các vùng da chảy xệ như đường viền hàm, má chùng nhão.",
      "Tác động nhiệt lý tưởng (~65°C) ở tầng trung bì giúp tái cấu trúc sợi collagen.",
      "Đầu điều trị độ sâu lớn (6mm – 13mm) giảm mỡ cục bộ và siết chặt vùng da chảy xệ ở bắp tay, bụng, đùi.",
    ],
    benefits: [
      "Thon gọn gương mặt: siết chặt cơ, tạo hiệu ứng mặt V-line và định hình góc cạnh rõ nét.",
      "Mờ nếp nhăn & rãnh sâu: chân chim, nếp nhăn trán, rãnh mũi - má và nếp nhăn vùng cổ.",
      "Tăng độ đàn hồi: da săn chắc, mướt mịn và thu nhỏ lỗ chân lông.",
      "Hủy mỡ nọng cằm: phá hủy tế bào mỡ thừa vùng cằm và má dưới mà không ảnh hưởng bề mặt da.",
      "Săn chắc & thon gọn cơ thể vùng bắp tay, bụng, đùi.",
    ],
    suitableFor: [
      "Mặt tròn, nọng cằm, muốn gương mặt V-line",
      "Mỡ thừa cục bộ vùng tay, bụng",
      "Da chùng nhão sau giảm cân hoặc sinh con",
    ],
    facts: [
      { label: "Độ sâu", value: "1.5 – 13mm" },
      { label: "Nhiệt độ mô", value: "~65°C" },
      { label: "Nghỉ dưỡng", value: "Không cần" },
      { label: "Duy trì", value: "8 – 18 tháng" },
    ],
    priceGroups: [
      {
        title: "Gương mặt",
        items: [
          { name: "Vùng mặt", original: 75_000_000, price: 35_000_000, frequency: "8-18 tháng" },
          { name: "Vùng cổ", original: 40_000_000, price: 19_000_000, frequency: "8-18 tháng" },
          { name: "Vùng mắt / nọng cằm", original: 20_000_000, price: 10_000_000, frequency: "8-18 tháng" },
        ],
      },
      {
        title: "Cơ thể",
        items: [
          { name: "Giảm mỡ, săn chắc tay", original: 85_000_000, price: 37_000_000, frequency: "8-18 tháng" },
          { name: "Giảm mỡ, săn chắc bụng", original: 95_000_000, price: 40_000_000, frequency: "8-18 tháng" },
        ],
      },
    ],
    faqs: [
      {
        q: "CFU Èlife có giảm mỡ vĩnh viễn không?",
        a: "Tế bào mỡ bị phá hủy sẽ được cơ thể đào thải tự nhiên. Để duy trì kết quả, bạn nên giữ cân nặng ổn định, ăn uống hợp lý và vận động đều đặn.",
      },
    ],
  },
  {
    slug: "song-rf-viora",
    no: "04",
    name: "Sóng RF Viora",
    menuName: "Sóng RF Viora – Săn chắc & thon gọn",
    group: "nang-co",
    tagline: "Nâng cơ, săn chắc da và thon gọn vóc dáng",
    summary:
      "Công nghệ sóng RF Viora không xâm lấn giúp nâng cơ, săn chắc da và thon gọn vóc dáng – liệu trình nhẹ nhàng, thực hiện hàng tuần, phù hợp cả mặt, cổ, môi và cơ thể.",
    image: "/images/viora.webp",
    isTechnology: true,
    techLabel: "Sóng RF đa tần",
    mechanism: [
      "Sóng RF làm ấm có kiểm soát các lớp mô dưới da.",
      "Kích thích tăng sinh Collagen, cải thiện độ đàn hồi.",
      "Hỗ trợ giảm mỡ, siết gọn đường nét cơ thể.",
    ],
    benefits: [
      "Nâng cơ & săn chắc: tái tạo đường nét gương mặt & cơ thể.",
      "Xóa mờ nếp nhăn: trán, khóe mắt, miệng & vùng cổ.",
      "Căng bóng da: tăng sinh Collagen, cải thiện độ đàn hồi.",
      "Thon gọn vóc dáng: giảm mỡ nọng cằm, bụng, tay & bikini.",
      "Lips Reborn: trẻ hóa, căng mọng vùng môi.",
    ],
    suitableFor: [
      "Muốn duy trì da săn chắc định kỳ",
      "Kết hợp sau Ultherapy/Thermage để tối ưu hiệu quả",
      "Chăm sóc vùng môi, vùng bikini",
    ],
    facts: [
      { label: "Liệu trình", value: "1 tuần/lần" },
      { label: "Cảm giác", value: "Ấm nhẹ, dễ chịu" },
      { label: "Nghỉ dưỡng", value: "Không cần" },
      { label: "Vùng điều trị", value: "Mặt, cổ, môi, cơ thể" },
    ],
    priceGroups: [
      {
        title: "Sóng RF Viora",
        items: [
          { name: "Vùng mặt / cổ", original: 10_000_000, price: 7_000_000, frequency: "1 tuần/lần" },
          { name: "Vùng bụng / tay", original: 15_000_000, price: 10_000_000, frequency: "1 tuần/lần" },
          { name: "Vùng mắt / môi", original: 5_000_000, price: 3_000_000, frequency: "1 tuần/lần" },
          { name: "Lips Reborn", original: 5_000_000, price: 3_000_000, frequency: "1 tuần/lần" },
          { name: "Bikini", original: 10_000_000, price: 7_000_000, frequency: "1 tuần/lần" },
        ],
      },
    ],
    faqs: [
      {
        q: "Một liệu trình Viora gồm bao nhiêu buổi?",
        a: "Thông thường 4–6 buổi, mỗi tuần 1 buổi tùy tình trạng da và mục tiêu. Bác sĩ sẽ xây dựng phác đồ cụ thể sau khi thăm khám.",
      },
    ],
  },
  {
    slug: "aviclear",
    no: "05",
    name: "AviClear",
    menuName: "AviClear – Điều trị mụn công nghệ cao",
    group: "dieu-tri",
    tagline: "Điều trị mụn công nghệ cao",
    summary:
      "Đột phá triệt tiêu gốc mụn – không xâm lấn, không nghỉ dưỡng. Bước sóng 1726nm nhắm chính xác vào tuyến bã nhờn – nguyên nhân gốc rễ gây ra mụn trứng cá.",
    image: "/images/aviclear.webp",
    deviceImage: "/images/device-aviclear.webp",
    isTechnology: true,
    techLabel: "Laser 1726nm",
    mechanism: [
      "Tác động trúng đích: bước sóng 1726nm hấp thụ đặc hiệu vào lipid, nhắm chính xác vào tuyến bã nhờn.",
      "Ức chế tiết dầu: năng lượng nhiệt làm suy yếu hoặc thu nhỏ tuyến bã nhờn hoạt động quá mức, giảm dầu thừa rõ rệt mà không làm khô vùng da xung quanh.",
      "Thay đổi lâu dài cấu trúc và hoạt động của tuyến bã nhờn, giúp duy trì làn da sạch mụn rất lâu sau liệu trình.",
    ],
    benefits: [
      "Hiệu quả trên mọi loại mụn: mụn viêm, mụn mủ, mụn bọc, mụn nang và mụn đầu đen/đầu trắng.",
      "Có thể thay thế thuốc uống isotretinoin/kháng sinh – không lo tác dụng phụ lên gan, thận, khô môi nặng hay phải thử máu định kỳ.",
      "Giảm tiết dầu liên tục giúp thu nhỏ lỗ chân lông, bề mặt da mịn màng hơn.",
    ],
    suitableFor: [
      "Mụn trứng cá từ nhẹ đến nặng, mụn tái phát",
      "Da dầu, lỗ chân lông to",
      "Không muốn hoặc không dung nạp thuốc uống trị mụn",
      "Mụn lưng",
    ],
    facts: [
      { label: "Bước sóng", value: "1726nm" },
      { label: "Liệu trình", value: "3 buổi, cách 1 tháng" },
      { label: "Nghỉ dưỡng", value: "Không cần" },
      { label: "Vùng điều trị", value: "Mặt, lưng" },
    ],
    priceGroups: [
      {
        title: "AviClear",
        items: [
          { name: "Vùng mặt", original: 20_000_000, price: 15_000_000, frequency: "1 tháng/lần" },
          { name: "Vùng lưng", original: 30_000_000, price: 20_000_000, frequency: "1 tháng/lần" },
        ],
      },
    ],
    faqs: [
      {
        q: "AviClear cần bao nhiêu buổi?",
        a: "Liệu trình tiêu chuẩn gồm 3 buổi, mỗi buổi cách nhau 1 tháng. Mụn giảm dần trong và sau liệu trình, hiệu quả tiếp tục cải thiện trong nhiều tháng.",
      },
      {
        q: "Có thể dùng song song với skincare trị mụn không?",
        a: "Có. Bác sĩ sẽ hướng dẫn quy trình chăm sóc da phù hợp, tạm ngưng các hoạt chất gây kích ứng mạnh trước và sau mỗi buổi chiếu.",
      },
    ],
  },
  {
    slug: "laser-tri-nam",
    no: "08",
    name: "Laser & Trị nám công nghệ cao",
    menuName: "Laser & Trị nám – Hollywood Spectra",
    group: "dieu-tri",
    tagline: "Hollywood Spectra – Chuẩn vàng điều trị sắc tố",
    summary:
      "Laser Q-Switched Nd:YAG Hollywood Spectra phá vỡ các đốm sắc tố thành hạt siêu nhỏ để cơ thể đào thải – điều trị nám, tàn nhang, thâm, bớt sắc tố và trẻ hóa da.",
    image: "/images/laser.webp",
    deviceImage: "/images/device-spectra.webp",
    isTechnology: true,
    techLabel: "Q-Switched Nd:YAG",
    mechanism: [
      "Laser Q-Switched Nd:YAG phá vỡ các đốm sắc tố thành hạt siêu nhỏ.",
      "Xung cực ngắn hạn chế tổn thương nhiệt lên mô lành xung quanh.",
      "Kết hợp Laser Toning, Glass Skin, Carbon Peel cho từng mục tiêu điều trị.",
    ],
    benefits: [
      "Trị tận gốc nám mảng, nám chân sâu, tàn nhang.",
      "Làm đều màu da, thu nhỏ lỗ chân lông.",
      "Điều trị thâm vùng nách, bẹn, mông, chân, lưng.",
      "Làm mờ bớt sắc tố bẩm sinh (bớt chàm, bớt bẩm sinh).",
    ],
    suitableFor: [
      "Nám mảng, nám chân sâu, nám hỗn hợp",
      "Tàn nhang, đồi mồi, da xỉn màu",
      "Thâm vùng cơ thể",
      "Bớt sắc tố bẩm sinh",
    ],
    facts: [
      { label: "Công nghệ", value: "Q-Switched Nd:YAG" },
      { label: "Laser Toning", value: "1 tuần/lần" },
      { label: "Gói trị nám", value: "3 – 12 tháng" },
      { label: "Bảo hành", value: "Đến 5 năm" },
    ],
    priceGroups: [
      {
        title: "Hollywood Spectra – Gói trị nám",
        subtitle: "Liệu trình cá nhân hóa kèm bảo hành",
        items: [
          { name: "1 buổi lẻ", price: 4_400_000 },
          { name: "Glow – cấp 1", detail: "3 tháng", original: 60_000_000, price: 35_000_000, note: "Bảo hành 2 tháng" },
          { name: "Premium – cấp 2", detail: "5 tháng", original: 100_000_000, price: 67_500_000, note: "Bảo hành 12 tháng" },
          { name: "Luxury – cấp 3", detail: "8 tháng", original: 160_000_000, price: 110_000_000, note: "Bảo hành 2 năm · Tặng 2 buổi Mesotherapy" },
          { name: "Royal – cấp 4", detail: "12 tháng", original: 250_000_000, price: 200_000_000, note: "Bảo hành 5 năm · Tặng 5 buổi Mesotherapy" },
        ],
      },
      {
        title: "Laser Toning",
        items: [
          { name: "Mặt / Cổ", original: 2_000_000, price: 1_500_000, frequency: "1 tuần/lần" },
          { name: "1/2 Tay / Chân", original: 4_000_000, price: 2_000_000, frequency: "1 tuần/lần" },
          { name: "Full Tay / Chân, Lưng / Mông", original: 5_000_000, price: 3_000_000, frequency: "1 tuần/lần" },
          { name: "Full Body", original: 25_000_000, price: 13_000_000, frequency: "1 tuần/lần" },
        ],
      },
      {
        title: "Trẻ hóa da",
        items: [
          { name: "Spectra Glass Skin", original: 2_000_000, price: 1_500_000, frequency: "1 tuần/lần" },
          { name: "Spectra Carbon Peel", original: 5_000_000, price: 3_000_000, frequency: "1 tuần/lần" },
        ],
      },
      {
        title: "Điều trị thâm",
        items: [
          { name: "Nách / Bẹn / Bikini", original: 5_000_000, price: 3_000_000, frequency: "1 tháng/lần" },
          { name: "Vùng mông", original: 7_000_000, price: 4_000_000, frequency: "1 tháng/lần" },
          { name: "1/2 Chân / Lưng", original: 10_000_000, price: 5_000_000, frequency: "1 tháng/lần" },
          { name: "Full Chân / Lưng", original: 15_000_000, price: 6_000_000, frequency: "1 tháng/lần" },
        ],
      },
      {
        title: "Điều trị bớt sắc tố (chàm, bớt bẩm sinh)",
        items: [
          { name: "Diện tích 3cm", original: 4_000_000, price: 2_500_000, frequency: "1 tháng/lần" },
          { name: "Diện tích 6cm", original: 10_000_000, price: 5_000_000, frequency: "1 tháng/lần" },
          { name: "Diện tích 10cm", original: 18_000_000, price: 9_000_000, frequency: "1 tháng/lần" },
          { name: "Diện tích >11cm", original: 25_000_000, price: 12_000_000, frequency: "1 tháng/lần" },
        ],
      },
      {
        title: "Điều trị tàn nhang",
        items: [{ name: "Liệu trình tàn nhang", original: 15_000_000, price: 10_000_000, frequency: "1 tháng/lần" }],
      },
    ],
    faqs: [
      {
        q: "Nám có trị dứt điểm được không?",
        a: "Nám là tình trạng mạn tính, dễ tái phát khi gặp nắng, nội tiết hoặc chăm sóc sai cách. Phác đồ laser kết hợp chăm sóc và chống nắng đúng giúp kiểm soát nám lâu dài – vì vậy các gói Spectra đi kèm chế độ bảo hành.",
      },
      {
        q: "Laser có làm mỏng da không?",
        a: "Laser Toning năng lượng thấp được thực hiện đúng kỹ thuật không làm mỏng da. Bác sĩ sẽ điều chỉnh thông số theo độ dày và độ nhạy cảm của da bạn.",
      },
    ],
  },
  {
    slug: "dieu-tri-van-de-da",
    no: "09",
    name: "Điều trị các vấn đề về da khác",
    menuName: "Đồi mồi, nốt ruồi, mụn thịt, xóa xăm",
    group: "dieu-tri",
    tagline: "Đồi mồi · Nốt ruồi · Mụn thịt · U tuyến bã · Xóa xăm",
    summary:
      "Xử lý gọn gàng, thẩm mỹ các tổn thương da lành tính và hình xăm không mong muốn bằng laser chuyên dụng – được bác sĩ da liễu thăm khám, đánh giá trước khi điều trị.",
    image: "/images/skin-issues.webp",
    mechanism: [
      "Bác sĩ soi da, đánh giá tính chất tổn thương trước khi chỉ định.",
      "Laser chuyên dụng loại bỏ chính xác tổn thương, hạn chế ảnh hưởng mô lành.",
      "Laser Q-Switched phá vỡ hạt mực xăm để cơ thể đào thải dần qua các buổi.",
    ],
    benefits: [
      "Làm sạch đồi mồi, nốt ruồi, mụn thịt, hạt cơm, u tuyến bã.",
      "Xóa xăm mí, môi, lông mày và hình xăm cơ thể.",
      "Hạn chế để lại sẹo, thời gian lành nhanh.",
    ],
    suitableFor: [
      "Đồi mồi vùng mặt, tay, cổ, vai, lưng",
      "Nốt ruồi, mụn thịt, hạt cơm, u tuyến bã",
      "Hình xăm/phun xăm không ưng ý",
    ],
    facts: [
      { label: "Liệu trình", value: "1 tháng/lần" },
      { label: "Thăm khám", value: "Bác sĩ da liễu" },
      { label: "Chăm sóc", value: "Theo hướng dẫn sau điều trị" },
      { label: "Phương pháp", value: "Laser chuyên dụng" },
    ],
    priceGroups: [
      {
        title: "Điều trị đồi mồi",
        items: [
          { name: "1 nốt >1cm", original: 1_500_000, price: 1_000_000, frequency: "1 tháng/lần" },
          { name: "1 nốt >2cm", original: 3_000_000, price: 1_800_000, frequency: "1 tháng/lần" },
          { name: "Mu bàn tay / Cổ", original: 8_000_000, price: 5_000_000, frequency: "1 tháng/lần" },
          { name: "1/2 Chân / Tay", original: 10_000_000, price: 6_000_000, frequency: "1 tháng/lần" },
          { name: "Full Chân / Tay", original: 12_000_000, price: 7_000_000, frequency: "1 tháng/lần" },
          { name: "2 Vai", original: 15_000_000, price: 8_000_000, frequency: "1 tháng/lần" },
          { name: "Vùng ngực", original: 20_000_000, price: 10_000_000, frequency: "1 tháng/lần" },
          { name: "1/2 Lưng", original: 25_000_000, price: 12_000_000, frequency: "1 tháng/lần" },
          { name: "Full Lưng", original: 30_000_000, price: 15_000_000, frequency: "1 tháng/lần" },
        ],
      },
      {
        title: "Tẩy nốt ruồi",
        items: [
          { name: "1 nốt", original: 300_000, price: 200_000, frequency: "1 tháng/lần" },
          { name: "10 nốt", original: 3_000_000, price: 1_800_000, frequency: "1 tháng/lần" },
          { name: "Full Mặt + Cổ", original: 10_000_000, price: 4_000_000, frequency: "1 tháng/lần" },
        ],
      },
      {
        title: "Điều trị mụn thịt / Hạt cơm",
        items: [
          { name: "10 nốt", original: 5_000_000, price: 3_000_000, frequency: "1 tháng/lần" },
          { name: "20 nốt", original: 10_000_000, price: 5_000_000, frequency: "1 tháng/lần" },
          { name: "Nửa mặt", original: 16_000_000, price: 8_000_000, frequency: "1 tháng/lần" },
          { name: "Cả mặt", original: 20_000_000, price: 10_000_000, frequency: "1 tháng/lần" },
          { name: "Mặt & Cổ", original: 30_000_000, price: 15_000_000, frequency: "1 tháng/lần" },
        ],
      },
      {
        title: "Điều trị U tuyến bã",
        items: [
          { name: "Cằm – Mũi mức 1", original: 5_000_000, price: 3_000_000, frequency: "1 tháng/lần" },
          { name: "Cằm – Mũi mức 2", original: 10_000_000, price: 6_000_000, frequency: "1 tháng/lần" },
          { name: "Cằm – Mũi mức 3", original: 19_000_000, price: 10_000_000, frequency: "1 tháng/lần" },
        ],
      },
      {
        title: "Xóa xăm thẩm mỹ",
        items: [
          { name: "Xóa viền môi trên/dưới", original: 5_000_000, price: 2_000_000, frequency: "1 tháng/lần" },
          { name: "Xóa xăm mí trên/dưới", original: 5_000_000, price: 2_000_000, frequency: "1 tháng/lần" },
          { name: "Xóa xăm đuôi/đầu lông mày", original: 7_000_000, price: 3_000_000, frequency: "1 tháng/lần" },
          { name: "Xóa xăm môi", original: 10_000_000, price: 7_000_000, frequency: "1 tháng/lần" },
          { name: "Xóa xăm chỉnh dáng lông mày", original: 10_000_000, price: 7_000_000, frequency: "1 tháng/lần" },
        ],
      },
      {
        title: "Xóa hình xăm",
        items: [
          { name: "Diện tích 5cm", original: 2_500_000, price: 1_800_000, frequency: "1 tháng/lần" },
          { name: "Diện tích 15cm", original: 8_000_000, price: 5_000_000, frequency: "1 tháng/lần" },
          { name: "Diện tích 25cm", original: 13_000_000, price: 9_000_000, frequency: "1 tháng/lần" },
          { name: "Diện tích 35cm", original: 18_000_000, price: 12_000_000, frequency: "1 tháng/lần" },
          { name: "Diện tích >40cm", original: 37_000_000, price: 25_000_000, frequency: "1 tháng/lần" },
        ],
      },
    ],
    faqs: [
      {
        q: "Xóa xăm cần bao nhiêu buổi?",
        a: "Tùy màu mực, độ sâu và tuổi hình xăm, thường cần nhiều buổi, mỗi buổi cách nhau khoảng 1 tháng để da phục hồi và cơ thể đào thải mực.",
      },
      {
        q: "Tẩy nốt ruồi có để lại sẹo không?",
        a: "Với nốt nhỏ, nông và chăm sóc đúng hướng dẫn, vùng điều trị thường lành phẳng. Nốt ruồi có dấu hiệu bất thường sẽ được bác sĩ tư vấn kiểm tra chuyên sâu trước.",
      },
    ],
  },
  {
    slug: "tai-tao-be-mat-da",
    no: "10",
    name: "Tái tạo & Cải thiện bề mặt",
    menuName: "Điều trị sẹo & se khít lỗ chân lông",
    group: "dieu-tri",
    tagline: "Sẹo lõm · Sẹo lồi · Se khít lỗ chân lông",
    summary:
      "Phác đồ kết hợp P.R.P, TCA Cross, Laser CO2 Fractional và tiêm điều trị giúp làm đầy sẹo lõm, làm phẳng sẹo lồi và se khít lỗ chân lông cho bề mặt da mịn màng.",
    image: "/images/scar.webp",
    mechanism: [
      "Laser CO2 Fractional tạo vi tổn thương có kiểm soát, kích thích tái tạo da mới.",
      "P.R.P (huyết tương giàu tiểu cầu) chứa yếu tố tăng trưởng giúp tăng tốc phục hồi.",
      "TCA Cross tác động chọn lọc vào sẹo đáy nhọn.",
      "Sẹo lồi được điều trị kết hợp tiêm và laser để làm phẳng, giảm đỏ.",
    ],
    benefits: [
      "Làm đầy sẹo lõm, cải thiện bề mặt da gồ ghề.",
      "Làm phẳng, mềm sẹo lồi.",
      "Se khít lỗ chân lông, da mịn hơn.",
    ],
    suitableFor: ["Sẹo rỗ, sẹo lõm sau mụn", "Sẹo lồi, sẹo phì đại", "Lỗ chân lông to"],
    facts: [
      { label: "Liệu trình", value: "1 tháng/lần" },
      { label: "Phương pháp", value: "PRP · TCA · CO2" },
      { label: "Phục hồi", value: "3 – 7 ngày" },
      { label: "Chống nắng", value: "Bắt buộc sau điều trị" },
    ],
    priceGroups: [
      {
        title: "Điều trị sẹo lõm",
        items: [
          { name: "P.R.P", original: 8_000_000, price: 3_000_000, frequency: "1 tháng/lần" },
          { name: "P.R.P chuyên sâu", original: 12_000_000, price: 5_500_000, frequency: "1 tháng/lần" },
          { name: "TCA Cross", original: 5_000_000, price: 3_500_000, frequency: "1 tháng/lần" },
          { name: "Laser CO2 Fractional", original: 7_000_000, price: 5_000_000, frequency: "1 tháng/lần" },
        ],
      },
      {
        title: "Điều trị sẹo lồi (Tiêm + Laser)",
        items: [
          { name: "Diện tích <4cm", original: 5_000_000, price: 2_000_000, frequency: "1 tháng/lần" },
          { name: "Diện tích <8cm", original: 6_000_000, price: 2_500_000, frequency: "1 tháng/lần" },
          { name: "Diện tích <16cm", original: 8_000_000, price: 3_000_000, frequency: "1 tháng/lần" },
          { name: "Diện tích <32cm", original: 10_000_000, price: 3_500_000, frequency: "1 tháng/lần" },
          { name: "Diện tích <64cm", original: 11_000_000, price: 5_000_000, frequency: "1 tháng/lần" },
          { name: "Diện tích >64cm", original: 13_000_000, price: 7_000_000, frequency: "1 tháng/lần" },
        ],
      },
      {
        title: "Se khít lỗ chân lông",
        items: [{ name: "Se khít lỗ chân lông", original: 9_000_000, price: 5_000_000, frequency: "1 tháng/lần" }],
      },
    ],
    faqs: [
      {
        q: "Sẹo rỗ lâu năm có cải thiện được không?",
        a: "Có. Sẹo lâu năm thường cần phối hợp nhiều phương pháp và nhiều buổi. Mức cải thiện phụ thuộc loại sẹo, độ sâu và cơ địa – bác sĩ sẽ đánh giá cụ thể khi thăm khám.",
      },
    ],
  },
  {
    slug: "cham-soc-da-chuyen-sau",
    no: "06",
    name: "Chăm sóc da chuyên sâu",
    menuName: "Chăm sóc da chuyên sâu – Hydrafacial",
    group: "cham-soc",
    tagline: "Cung cấp dưỡng chất – Phục hồi hàng rào bảo vệ da",
    summary:
      "Các liệu trình chăm sóc da y khoa cá nhân hóa – làm sạch sâu, cấp ẩm, phục hồi và làm sáng – giúp làn da khỏe từ bên trong và duy trì kết quả điều trị.",
    image: "/images/hydrafacial.webp",
    mechanism: [
      "Soi da, phân tích tình trạng để chọn liệu trình phù hợp.",
      "Làm sạch sâu, hút dầu thừa và bã nhờn trong lỗ chân lông.",
      "Đưa dưỡng chất chuyên biệt, phục hồi hàng rào bảo vệ da.",
    ],
    benefits: [
      "Da sạch thoáng, ẩm mịn và rạng rỡ ngay sau buổi chăm sóc.",
      "Phục hồi da nhạy cảm, da yếu, da sau điều trị.",
      "Hỗ trợ kiểm soát dầu, giảm mụn ẩn.",
    ],
    suitableFor: ["Mọi loại da cần chăm sóc định kỳ", "Da khô, xỉn màu, mất nước", "Da nhạy cảm, kích ứng (SOS Skin)"],
    facts: [
      { label: "Liệu trình", value: "1 tuần/lần" },
      { label: "Hydrafacial", value: "1 tháng/lần" },
      { label: "Thời gian", value: "60 – 75 phút" },
      { label: "Nghỉ dưỡng", value: "Không cần" },
    ],
    priceGroups: [
      {
        title: "Chăm sóc da chuyên sâu",
        items: [
          { name: "Baby Skin Reset", original: 2_000_000, price: 1_500_000, frequency: "1 tuần/lần" },
          { name: "Hydra Luxury Glow", original: 2_000_000, price: 1_500_000, frequency: "1 tuần/lần" },
          { name: "Aqua Skin", original: 1_200_000, price: 999_000, frequency: "1 tuần/lần" },
          { name: "SOS Skin", original: 1_200_000, price: 999_000, frequency: "1 tuần/lần" },
          { name: "Hydrafacial", original: 4_000_000, price: 3_000_000, frequency: "1 tháng/lần" },
        ],
      },
    ],
    faqs: [
      {
        q: "Nên chăm sóc da tại phòng khám bao lâu một lần?",
        a: "Các liệu trình phục hồi, cấp ẩm có thể thực hiện 1 tuần/lần; Hydrafacial khoảng 1 tháng/lần. Bác sĩ sẽ tư vấn tần suất theo tình trạng da của bạn.",
      },
    ],
  },
  {
    slug: "peel-da-sinh-hoc",
    no: "07",
    name: "Peel da sinh học",
    menuName: "Peel da sinh học – Thay da nhẹ nhàng",
    group: "cham-soc",
    tagline: "Giải pháp thay da nhẹ nhàng – Loại bỏ tế bào sừng – Kích thích tế bào mới",
    summary:
      "Peel sinh học tẩy tế bào chết chuyên sâu, hỗ trợ gom khô cồi mụn và làm sáng da; Peel tảo vi điểm tái tạo bề mặt da thô ráp, làm mờ thâm mụn.",
    image: "/images/peel.webp",
    mechanism: [
      "Hoạt chất peel nồng độ phù hợp loại bỏ lớp tế bào sừng già cỗi.",
      "Vi kim tảo tự nhiên kích thích tái tạo bề mặt da.",
      "Thúc đẩy quá trình thay mới tế bào, da sáng mịn hơn.",
    ],
    benefits: [
      "Tẩy tế bào chết chuyên sâu, hỗ trợ gom khô cồi mụn, sáng da.",
      "Tái tạo bề mặt da thô ráp, làm mờ thâm mụn.",
      "Giúp da hấp thu dưỡng chất tốt hơn.",
    ],
    suitableFor: ["Da mụn, da dầu, bít tắc", "Thâm mụn, da sần sùi", "Da xỉn màu, không đều màu"],
    facts: [
      { label: "Liệu trình", value: "3 – 4 tuần/lần" },
      { label: "Bong nhẹ", value: "2 – 5 ngày" },
      { label: "Lựa chọn", value: "Soft · Pure · Acne · Aqua" },
      { label: "Chống nắng", value: "Bắt buộc" },
    ],
    priceGroups: [
      {
        title: "Peel da sinh học",
        items: [
          {
            name: "Soft Peel / Pure Peel / Acne Peel / Aqua Peel",
            original: 1_500_000,
            price: 1_000_000,
            priceMax: 1_200_000,
            frequency: "3-4 tuần/lần",
          },
          { name: "Peel tảo vi điểm", original: 2_000_000, price: 1_500_000, frequency: "3-4 tuần/lần" },
        ],
      },
    ],
    faqs: [
      {
        q: "Peel da có bong tróc nhiều không?",
        a: "Peel sinh học tại Lagoon được chọn nồng độ phù hợp nên thường chỉ bong nhẹ, khô nhẹ trong vài ngày. Bạn cần dưỡng ẩm và chống nắng kỹ.",
      },
    ],
  },
  {
    slug: "botox",
    no: "11",
    name: "Botox",
    menuName: "Botox – Xóa nhăn, thon gọn hàm",
    group: "tiem",
    tagline: "Xóa nhăn · Thon gọn góc hàm · Giảm tiết mồ hôi",
    summary:
      "Tiêm Botox (Hàn Quốc hoặc Mỹ) do bác sĩ thực hiện giúp xóa nhăn động, thon gọn góc hàm, điều trị hôi nách và giảm tiết mồ hôi tay chân – nhanh, an toàn, tự nhiên.",
    image: "/images/botox.webp",
    mechanism: [
      "Botulinum toxin làm giãn có chọn lọc các cơ gây nếp nhăn động.",
      "Giảm hoạt động cơ cắn giúp góc hàm thon gọn dần.",
      "Ức chế tín hiệu thần kinh tới tuyến mồ hôi.",
    ],
    benefits: [
      "Xóa nhăn trán, cau mày, đuôi mắt, mí dưới, nhăn mũi.",
      "Gương mặt thon gọn, góc hàm mềm mại.",
      "Giảm hôi nách, giảm tiết mồ hôi tay/chân.",
    ],
    suitableFor: ["Nếp nhăn động vùng trán, mắt", "Cơ hàm to, mặt vuông", "Tăng tiết mồ hôi, hôi nách"],
    facts: [
      { label: "Lựa chọn", value: "Botox Hàn / Mỹ" },
      { label: "Thời gian", value: "15 – 30 phút" },
      { label: "Hiệu quả", value: "Sau 3 – 14 ngày" },
      { label: "Duy trì", value: "6 – 12 tháng" },
    ],
    priceGroups: [
      {
        title: "Xóa nhăn trán",
        items: [
          { name: "Botox Hàn", original: 7_000_000, price: 5_000_000, frequency: "6-12 tháng" },
          { name: "Botox Mỹ", original: 10_000_000, price: 8_000_000, frequency: "6-12 tháng" },
        ],
      },
      {
        title: "Xóa nhăn cau mày, đuôi mắt, mí dưới, mũi",
        items: [
          { name: "Botox Hàn", original: 5_000_000, price: 3_000_000, frequency: "6-12 tháng" },
          { name: "Botox Mỹ", original: 10_000_000, price: 6_000_000, frequency: "6-12 tháng" },
        ],
      },
      {
        title: "Thon gọn góc hàm",
        items: [
          { name: "Botox Hàn", original: 15_000_000, price: 9_000_000, frequency: "6-12 tháng" },
          { name: "Botox Mỹ", original: 20_000_000, price: 15_000_000, frequency: "6-12 tháng" },
        ],
      },
      {
        title: "Điều trị hôi nách",
        items: [
          { name: "Botox Hàn", original: 10_000_000, price: 7_000_000, frequency: "6-12 tháng" },
          { name: "Botox Mỹ", original: 17_000_000, price: 13_000_000, frequency: "6-12 tháng" },
        ],
      },
      {
        title: "Giảm tiết mồ hôi tay / chân",
        items: [
          { name: "Botox Hàn", original: 10_000_000, price: 7_000_000, frequency: "6-12 tháng" },
          { name: "Botox Mỹ", original: 20_000_000, price: 15_000_000, frequency: "6-12 tháng" },
        ],
      },
    ],
    faqs: [
      {
        q: "Botox Hàn và Botox Mỹ khác nhau thế nào?",
        a: "Cả hai đều là botulinum toxin dùng trong thẩm mỹ. Khác biệt nằm ở nhà sản xuất, độ tinh khiết và thời gian duy trì. Bác sĩ sẽ tư vấn lựa chọn phù hợp với vùng tiêm và ngân sách của bạn.",
      },
      {
        q: "Sau tiêm Botox cần lưu ý gì?",
        a: "Không nằm, không xoa bóp vùng tiêm trong 4 giờ đầu; tránh vận động mạnh, xông hơi, rượu bia trong 24 giờ.",
      },
    ],
  },
  {
    slug: "filler",
    no: "12",
    name: "Filler",
    menuName: "Filler – Làm đầy, trẻ hóa môi",
    group: "tiem",
    tagline: "Làm đầy · Tạo đường nét · Trẻ hóa hồng môi",
    summary:
      "Filler Hyaluronic Acid chính hãng (Teoxane, Juvederm, Restylane, Filler Hàn) giúp làm đầy rãnh nhăn, vùng hõm và tạo đường nét hài hòa – kết quả tự nhiên, có thể điều chỉnh.",
    image: "/images/filler.webp",
    mechanism: [
      "Hyaluronic Acid liên kết nước, làm đầy thể tích tại vị trí tiêm.",
      "Bác sĩ thiết kế điểm tiêm theo tỷ lệ khuôn mặt.",
      "Có thể hòa tan khi cần điều chỉnh.",
    ],
    benefits: [
      "Làm đầy rãnh mũi má, thái dương, má hóp, cằm.",
      "Môi căng mọng, hồng hào tự nhiên.",
      "Gương mặt cân đối, trẻ trung hơn.",
    ],
    suitableFor: ["Rãnh nhăn sâu, vùng hõm", "Môi mỏng, môi thâm, mất thể tích", "Muốn cải thiện đường nét không phẫu thuật"],
    facts: [
      { label: "Thương hiệu", value: "Teoxane · Juvederm · Restylane" },
      { label: "Thời gian", value: "30 – 45 phút" },
      { label: "Nghỉ dưỡng", value: "Gần như không" },
      { label: "Duy trì", value: "12 – 24 tháng" },
    ],
    priceGroups: [
      {
        title: "Filler",
        items: [
          { name: "Filler Hàn", detail: "1cc", original: 4_000_000, price: 3_000_000, frequency: "12 tháng" },
          { name: "Teoxane", detail: "1cc", original: 15_000_000, price: 9_000_000, frequency: "18-24 tháng/lần" },
          { name: "Juvederm", detail: "1cc", original: 15_000_000, price: 9_000_000, frequency: "18-24 tháng/lần" },
          { name: "Restylane", detail: "1cc", original: 15_000_000, price: 9_000_000, frequency: "18-24 tháng/lần" },
          { name: "Trẻ hóa hồng môi", original: 15_000_000, price: 9_000_000, frequency: "12-18 tháng/lần" },
        ],
      },
    ],
    faqs: [
      {
        q: "Tiêm filler có an toàn không?",
        a: "Filler HA chính hãng do bác sĩ được đào tạo thực hiện tại cơ sở y tế có đầy đủ quy trình vô khuẩn và xử trí là lựa chọn an toàn. Lagoon chỉ sử dụng sản phẩm có nguồn gốc rõ ràng.",
      },
    ],
  },
  {
    slug: "mesotherapy-bap",
    no: "13",
    name: "Mesotherapy & B.A.P",
    menuName: "Mesotherapy – Rejuran, Profhilo, Skinbooster",
    group: "tiem",
    tagline: "Rejuran · Profhilo · Skinbooster · Collagen",
    summary:
      "Tiêm vi điểm dưỡng chất thế hệ mới – Rejuran, Profhilo, Skinbooster, Nano Collagen, Exo Booster – phục hồi, cấp ẩm sâu, tăng sinh collagen cho làn da căng bóng, khỏe từ bên trong.",
    image: "/images/meso.webp",
    mechanism: [
      "Rejuran (PN – Polynucleotide) sửa chữa, tái tạo tế bào da tổn thương.",
      "Profhilo (HA nồng độ cao – B.A.P) lan tỏa, cấp ẩm và kích thích collagen, elastin.",
      "Skinbooster & Collagen bổ sung dưỡng chất, cải thiện cấu trúc da.",
    ],
    benefits: [
      "Da căng bóng, ẩm mượt, đàn hồi tốt hơn.",
      "Phục hồi da mỏng yếu, da sau điều trị laser.",
      "Mờ nếp nhăn nhỏ, thu nhỏ lỗ chân lông.",
    ],
    suitableFor: ["Da khô, thiếu ẩm, xỉn màu", "Da mỏng, yếu, nhạy cảm", "Lão hóa sớm, nếp nhăn nhỏ"],
    facts: [
      { label: "Rejuran / Skinbooster", value: "2 – 4 tuần/lần" },
      { label: "Profhilo", value: "1 tháng/lần" },
      { label: "Thời gian", value: "30 – 45 phút" },
      { label: "Nghỉ dưỡng", value: "1 – 2 ngày nổi sẩn nhẹ" },
    ],
    priceGroups: [
      {
        title: "Rejuran",
        items: [
          { name: "Rejuran I", original: 10_000_000, price: 7_500_000, frequency: "2-4 tuần/lần" },
          { name: "Rejuran S", original: 12_000_000, price: 8_000_000, frequency: "2-4 tuần/lần" },
          { name: "Rejuran Healer", original: 17_000_000, price: 13_000_000, frequency: "2-4 tuần/lần" },
        ],
      },
      {
        title: "Profhilo",
        items: [
          { name: "Profhilo", original: 20_000_000, price: 14_000_000, frequency: "1 tháng/lần" },
          { name: "Profhilo Structura", original: 27_000_000, price: 19_000_000, frequency: "1 tháng/lần" },
        ],
      },
      {
        title: "Skinbooster",
        items: [
          { name: "Nano Diamond (Cellbooster)", original: 7_000_000, price: 4_500_000, frequency: "2-4 tuần/lần" },
          { name: "Karisma", original: 15_000_000, price: 10_000_000, frequency: "1 tháng/lần" },
          { name: "Nano Collagen Redensity1 2ml", original: 17_000_000, price: 12_500_000, frequency: "2-4 tuần/lần" },
          { name: "Nano Collagen Redensity1 3ml", original: 25_000_000, price: 17_000_000, frequency: "2-4 tuần/lần" },
          { name: "Linerase Collagen", original: 15_000_000, price: 10_000_000, frequency: "3-4 tuần/lần" },
          { name: "Exo Booster", original: 15_000_000, price: 10_000_000, frequency: "2-4 tuần/lần" },
        ],
      },
    ],
    faqs: [
      {
        q: "Rejuran và Profhilo nên chọn loại nào?",
        a: "Rejuran thiên về phục hồi, tái tạo da tổn thương, da mỏng yếu; Profhilo thiên về cấp ẩm sâu và làm săn da chảy xệ nhẹ. Nhiều trường hợp kết hợp cả hai theo phác đồ của bác sĩ.",
      },
    ],
  },
];

// Thứ tự hiển thị theo số thứ tự trong menu dịch vụ
export const servicesOrdered = [...services].sort((a, b) => a.no.localeCompare(b.no));

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const technologies = servicesOrdered.filter((s) => s.isTechnology);

export function formatVnd(n: number) {
  return n.toLocaleString("vi-VN").replace(/,/g, ".") + "đ";
}

export function minPrice(s: Service) {
  return Math.min(...s.priceGroups.flatMap((g) => g.items.filter((i) => !i.perUnit).map((i) => i.price)));
}
