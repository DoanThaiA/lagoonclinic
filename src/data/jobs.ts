export type JobSection = {
  title: string;
  intro?: string[];
  groups: { heading?: string; items: string[] }[];
};

export type Job = {
  slug: string;
  title: string;
  fullTitle: string;
  department: string;
  location: string;
  salaryText: string;
  salaryMin: number;
  salaryMax: number;
  employmentType: "FULL_TIME" | "PART_TIME";
  typeLabel: string;
  schedule: string;
  reportTo: string;
  datePosted: string; // ISO
  validThrough?: string; // ISO
  tagline: string;
  summary: string;
  image: string;
  highlights: string[];
  sections: JobSection[];
  applyItems: string[];
  closing: string;
};

export const jobs: Job[] = [
  {
    slug: "content-creator",
    title: "Content Creator",
    fullTitle: "Content Creator – Nhân viên sáng tạo nội dung đa nền tảng",
    department: "Marketing",
    location: "480 Xã Đàn, Hà Nội",
    salaryText: "10 – 14 triệu/tháng",
    salaryMin: 10_000_000,
    salaryMax: 14_000_000,
    employmentType: "FULL_TIME",
    typeLabel: "Toàn thời gian",
    schedule: "8:30 – 17:30, nghỉ 1 ngày/tuần",
    reportTo: "Trưởng phòng / Quản lý Marketing",
    datePosted: "2026-11-08",
    tagline: "Không chỉ sáng tạo nội dung – cùng Lagoon xây dựng thương hiệu và tạo ra giá trị kinh doanh.",
    summary:
      "Sáng tạo, sản xuất và phát triển nội dung đa nền tảng (Facebook, TikTok, Instagram) cho Lagoon – từ lên ý tưởng, viết kịch bản, quay dựng video ngắn đến đo lường hiệu quả.",
    image: "/images/tuyen-dung-content-creator.webp",
    highlights: ["Lương cứng 10 – 14 triệu + trợ cấp + thưởng", "Làm việc cùng đội ngũ bác sĩ da liễu", "Được cấp thiết bị, công cụ sản xuất"],
    sections: [
      {
        title: "Mục tiêu công việc",
        intro: [
          "Chịu trách nhiệm sáng tạo, sản xuất và phát triển nội dung trên các nền tảng truyền thông của Lagoon; góp phần xây dựng hình ảnh thương hiệu chuyên nghiệp, gia tăng độ nhận diện, thu hút khách hàng tiềm năng và hỗ trợ mục tiêu doanh thu.",
          "Bạn không chỉ thực hiện nội dung theo yêu cầu mà cần chủ động đề xuất ý tưởng, nắm bắt xu hướng và tạo ra những nội dung có khả năng thu hút, tạo niềm tin và thúc đẩy hành vi sử dụng dịch vụ.",
        ],
        groups: [],
      },
      {
        title: "Mô tả công việc",
        groups: [
          {
            heading: "Xây dựng chiến lược và kế hoạch nội dung",
            items: [
              "Nghiên cứu chân dung khách hàng mục tiêu, nhu cầu, insight và hành vi của khách hàng trong lĩnh vực da liễu, chăm sóc da và thẩm mỹ.",
              "Xây dựng các tuyến nội dung theo từng nhóm dịch vụ, từng giai đoạn trong hành trình khách hàng.",
              "Lập kế hoạch nội dung tuần/tháng cho Facebook, TikTok, Instagram và các kênh truyền thông khác.",
              "Đề xuất Big Idea, chủ đề truyền thông, concept hình ảnh và chiến dịch nội dung theo từng thời điểm.",
              "Nghiên cứu đối thủ, cập nhật xu hướng thị trường và đề xuất hướng phát triển nội dung phù hợp với định vị Lagoon.",
            ],
          },
          {
            heading: "Sáng tạo và sản xuất nội dung",
            items: [
              "Trực tiếp viết bài truyền thông, bài giới thiệu dịch vụ, nội dung quảng bá và nội dung xây dựng thương hiệu.",
              "Xây dựng kịch bản video ngắn, video chuyên môn, video giải đáp thắc mắc, video review và nội dung tương tác.",
              "Phối hợp với bác sĩ, chuyên viên và đội ngũ phòng khám để phát triển nội dung chuyên môn chính xác, dễ hiểu và hấp dẫn.",
              "Trực tiếp tham gia quay video, chụp ảnh và sản xuất tư liệu truyền thông tại phòng khám.",
              "Sử dụng Canva, CapCut hoặc công cụ tương đương để thiết kế hình ảnh, biên tập video cơ bản.",
              "Phát triển nội dung đa dạng: giáo dục khách hàng, xây dựng niềm tin, thương hiệu, câu chuyện khách hàng và nội dung chuyển đổi.",
            ],
          },
          {
            heading: "Phát triển thương hiệu trên nền tảng số",
            items: [
              "Triển khai nội dung đồng bộ trên các kênh truyền thông của Lagoon.",
              "Đảm bảo hình ảnh, ngôn ngữ và thông điệp nhất quán với định vị thương hiệu.",
              "Xây dựng các series nội dung dài hạn nhằm tạo dấu ấn riêng cho Lagoon.",
              "Phát triển nội dung về đội ngũ bác sĩ, chuyên môn, quy trình dịch vụ, trải nghiệm khách hàng và môi trường phòng khám.",
              "Theo dõi xu hướng và đề xuất các hình thức nội dung mới để tăng khả năng tiếp cận khách hàng.",
            ],
          },
          {
            heading: "Tối ưu hiệu quả và hỗ trợ kinh doanh",
            items: [
              "Theo dõi, đo lường và đánh giá hiệu quả nội dung trên từng nền tảng.",
              "Phân tích các chỉ số: lượt tiếp cận, lượt xem, tỷ lệ tương tác, lượt nhắn tin, khách hàng tiềm năng.",
              "Phối hợp với bộ phận Ads và Kinh doanh để xây dựng nội dung phục vụ các chiến dịch quảng cáo và bán hàng.",
              "Đề xuất cải thiện nội dung dựa trên phản hồi thực tế của khách hàng và dữ liệu hiệu quả.",
              "Chủ động phát triển nội dung có khả năng tạo nhu cầu, giải quyết rào cản và thúc đẩy khách hàng tìm hiểu dịch vụ.",
            ],
          },
        ],
      },
      {
        title: "Yêu cầu ứng viên",
        groups: [
          {
            heading: "Kinh nghiệm và chuyên môn",
            items: [
              "Tối thiểu 1–2 năm kinh nghiệm ở vị trí Content Creator, Content Marketing hoặc tương đương.",
              "Có khả năng viết tốt, tư duy sáng tạo và xây dựng nội dung theo mục tiêu cụ thể.",
              "Có kinh nghiệm xây dựng kịch bản và sản xuất video ngắn trên TikTok, Facebook Reels.",
              "Biết quay video bằng điện thoại, chỉnh sửa video bằng CapCut và thiết kế bằng Canva.",
              "Có khả năng lập kế hoạch, quản lý tiến độ và triển khai công việc độc lập.",
            ],
          },
          {
            heading: "Tư duy và thái độ",
            items: [
              "Có tư duy Marketing, hiểu rằng nội dung phải phục vụ mục tiêu thương hiệu và kinh doanh.",
              "Có khả năng nắm bắt tâm lý khách hàng, đặc biệt trong lĩnh vực làm đẹp.",
              "Chủ động, sáng tạo, có tinh thần trách nhiệm và không ngại thử nghiệm ý tưởng mới.",
              "Có gu thẩm mỹ tốt, nhạy bén với xu hướng mạng xã hội.",
            ],
          },
          {
            heading: "Ưu tiên",
            items: [
              "Đã từng làm việc trong ngành thẩm mỹ, da liễu, spa, clinic hoặc chăm sóc sắc đẹp.",
              "Có Portfolio thể hiện các bài viết, video hoặc chiến dịch nội dung đã thực hiện.",
              "Có khả năng sử dụng công cụ AI để hỗ trợ nghiên cứu, sáng tạo và tối ưu quy trình sản xuất nội dung.",
            ],
          },
        ],
      },
      {
        title: "Quyền lợi",
        groups: [
          {
            items: [
              "Thu nhập từ 10–14 triệu đồng/tháng theo năng lực, cùng trợ cấp và thưởng.",
              "Tham gia trực tiếp vào quá trình xây dựng và phát triển thương hiệu Lagoon.",
              "Làm việc cùng đội ngũ chuyên môn trong lĩnh vực da liễu và thẩm mỹ.",
              "Được tạo điều kiện về nguồn lực, thiết bị và công cụ phục vụ công việc.",
              "Cơ hội phát triển chuyên môn, nâng cao năng lực sáng tạo và tư duy Marketing.",
              "Hưởng đầy đủ chế độ phúc lợi theo chính sách công ty và quy định pháp luật.",
            ],
          },
        ],
      },
    ],
    applyItems: [
      "CV giới thiệu kinh nghiệm làm việc.",
      "Portfolio hoặc đường dẫn các sản phẩm nội dung đã thực hiện.",
      "Các video hoặc chiến dịch truyền thông nổi bật (nếu có).",
    ],
    closing:
      "Chúng tôi tìm kiếm một người không chỉ biết tạo ra nội dung đẹp, mà còn biết tạo ra nội dung có giá trị, có chiến lược và có hiệu quả.",
  },
];

export const getJob = (slug: string) => jobs.find((j) => j.slug === slug);
