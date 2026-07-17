import { AssignmentShell } from "@/components/AssignmentShell";
import { Evidence, ReportSection } from "@/components/ContentBlocks";

const steps = [
  { title: "Mở File Explorer", body: "Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.", image: "/assets/bai-1/01-mo-file-explorer.png" },
  { title: "Truy cập ổ D", body: "Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào ổ D.", image: "/assets/bai-1/02-truy-cap-o-d.png" },
  { title: "Tạo thư mục mới", body: "Nhấp chuột phải vào một khoảng trống, chọn New → Folder và đặt tên thư mục thực hành.", image: "/assets/bai-1/03-tao-thu-muc.png" },
  { title: "Vào thư mục vừa tạo", body: "Nhấp đúp vào thư mục vừa tạo để tiếp tục các thao tác bên trong.", image: "/assets/bai-1/04-vao-thu-muc.png" },
  { title: "Tạo tệp tin văn bản", body: "Nhấp chuột phải vào khoảng trống, chọn New → Text Document và tạo tệp GhiChu.txt.", image: "/assets/bai-1/05-tao-tep-van-ban.png" },
  { title: "Đổi tên tệp tin", body: "Nhấp chuột phải vào tệp GhiChu.txt, chọn Rename và đổi tên thành GhiChuQuanTrong.txt.", image: "/assets/bai-1/06-doi-ten-tep.png" },
  { title: "Tạo thư mục con", body: "Trong thư mục thực hành, tạo thư mục con có tên TaiLieu.", image: "/assets/bai-1/07-tao-thu-muc-con.png" },
  { title: "Sao chép tệp tin (Copy & Paste)", body: "Sao chép tệp GhiChuQuanTrong.txt và dán một bản sao vào thư mục TaiLieu.", image: "/assets/bai-1/08-sao-chep-tep.png" },
  { title: "Di chuyển tệp tin (Cut & Paste)", body: "Tạo tệp DiChuyen.txt, cắt tệp khỏi vị trí cũ và dán vào thư mục TaiLieu.", image: "/assets/bai-1/09-di-chuyen-tep.png" },
  { title: "Xóa tệp tin", body: "Trong thư mục TaiLieu, xóa tệp GhiChuQuanTrong.txt để tệp được chuyển vào Recycle Bin.", image: "/assets/bai-1/10-xoa-tep.png" },
  { title: "Xóa vĩnh viễn", body: "Chọn tệp DiChuyen.txt, nhấn giữ Shift và nhấn Delete; xác nhận cảnh báo để xóa mà không qua Thùng rác.", image: "/assets/bai-1/11-xoa-vinh-vien.png" },
  { title: "Khôi phục từ Thùng rác", body: "Mở Recycle Bin, tìm tệp đã xóa, nhấp chuột phải và chọn Restore để đưa tệp về vị trí ban đầu.", image: "/assets/bai-1/12-khoi-phuc-thung-rac.jpg" },
];

export default function Bai1Page() {
  return (
    <AssignmentShell
      number={1}
      title="Thao tác cơ bản với tệp tin và thư mục"
      kicker="Kỹ năng số nền tảng"
      summary="Bài thực hành ghi lại 12 thao tác tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp/thư mục trên Windows."
      toc={steps.map((step, index) => ({ id: `buoc-${index + 1}`, label: step.title }))}
    >
      {steps.map((step, index) => (
        <ReportSection key={step.title} id={`buoc-${index + 1}`} title={`${index + 1}. ${step.title}`}>
          <p>{step.body}</p>
          <Evidence src={step.image} alt={`Ảnh minh chứng bước ${index + 1}: ${step.title}`} caption={`Minh chứng bước ${index + 1} — ${step.title}.`} priority={index === 0} />
        </ReportSection>
      ))}
    </AssignmentShell>
  );
}
