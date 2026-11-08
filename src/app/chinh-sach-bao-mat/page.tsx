import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Chính sách bảo mật", alternates: { canonical: "/chinh-sach-bao-mat" } };

export default function Page() {
  return (
    <LegalPage
      title="Chính sách bảo mật"
      updated="08/11/2026"
      sections={[
        {
          h: "1. Thông tin chúng tôi thu thập",
          p: [
            "Khi bạn đặt lịch hoặc gửi yêu cầu tư vấn, Lagoon thu thập các thông tin bạn cung cấp: họ tên, số điện thoại, dịch vụ quan tâm, ngày mong muốn và ghi chú về tình trạng da.",
          ],
        },
        {
          h: "2. Mục đích sử dụng",
          p: [
            "Thông tin được sử dụng để liên hệ xác nhận lịch hẹn, tư vấn dịch vụ, chăm sóc khách hàng và nâng cao chất lượng dịch vụ.",
            "Lagoon không bán, trao đổi hay chia sẻ thông tin cá nhân của bạn cho bên thứ ba vì mục đích thương mại.",
          ],
        },
        {
          h: "3. Bảo mật thông tin",
          p: [
            "Thông tin cá nhân và hồ sơ da liễu được lưu trữ an toàn, chỉ nhân sự có thẩm quyền mới được truy cập, phù hợp quy định pháp luật Việt Nam về bảo vệ dữ liệu cá nhân.",
          ],
        },
        {
          h: "4. Quyền của bạn",
          p: [
            `Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân bằng cách liên hệ hotline ${site.phone} hoặc trực tiếp tại ${site.address}.`,
          ],
        },
      ]}
    />
  );
}
