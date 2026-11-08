import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Điều khoản sử dụng", alternates: { canonical: "/dieu-khoan" } };

export default function Page() {
  return (
    <LegalPage
      title="Điều khoản sử dụng"
      updated="08/11/2026"
      sections={[
        {
          h: "1. Nội dung website",
          p: [
            "Thông tin về dịch vụ, công nghệ và bài viết trên website mang tính chất tham khảo, không thay thế cho chẩn đoán, tư vấn và chỉ định của bác sĩ.",
            "Hiệu quả điều trị có thể khác nhau tùy cơ địa và tình trạng da của mỗi người.",
          ],
        },
        {
          h: "2. Giá dịch vụ",
          p: [
            "Bảng giá trên website là giá tham khảo theo menu dịch vụ hiện hành, có thể thay đổi theo chương trình ưu đãi. Chi phí chính xác được thông báo sau khi bác sĩ thăm khám và xây dựng phác đồ.",
          ],
        },
        {
          h: "3. Đặt lịch",
          p: [
            "Lịch hẹn chỉ được xác nhận khi chuyên viên Lagoon liên hệ lại. Vui lòng thông báo trước nếu bạn cần thay đổi hoặc hủy lịch.",
          ],
        },
        {
          h: "4. Bản quyền",
          p: ["Hình ảnh, logo và nội dung trên website thuộc quyền sở hữu của Lagoon. Không sao chép khi chưa có sự đồng ý bằng văn bản."],
        },
      ]}
    />
  );
}
