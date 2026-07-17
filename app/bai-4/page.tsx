import { AssignmentShell } from "@/components/AssignmentShell";
import { Evidence, ReportSection } from "@/components/ContentBlocks";

export default function Bai4Page() {
  return (
    <AssignmentShell
      number={4}
      title="Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm"
      kicker="Hợp tác số"
      summary="Báo cáo cá nhân về quá trình tham gia dự án nhóm trực tuyến bằng Trello, Google Docs, Google Drive và Google Meet."
      toc={[
        { id: "tong-quan", label: "Tổng quan dự án và vai trò" },
        { id: "cong-cu", label: "Các công cụ đã sử dụng" },
        { id: "trello", label: "Trello" },
        { id: "docs", label: "Google Docs" },
        { id: "drive", label: "Google Drive" },
        { id: "meet", label: "Google Meet" },
        { id: "phan-tich", label: "Hiệu quả và bài học" },
        { id: "ket-luan", label: "Kết luận" },
      ]}
    >
      <ReportSection id="tong-quan" title="I. Tổng quan dự án và vai trò cá nhân">
        <h3>1.1. Giới thiệu dự án nhóm</h3>
        <p>Trong tuần thực hành kỹ năng hợp tác trực tuyến, nhóm gồm 5 thành viên cùng thực hiện dự án, tất cả được thực hiện hoàn toàn trên các nền tảng trực tuyến, không có buổi gặp mặt trực tiếp nào. Mục tiêu của dự án không chỉ dừng lại ở sản phẩm cuối cùng, mà còn hướng đến việc rèn luyện khả năng làm việc từ xa, phối hợp đồng đội và sử dụng thành thạo các công cụ hợp tác hiện đại đang được nhiều doanh nghiệp áp dụng.</p>
        <h3>1.2. Vai trò của bản thân</h3>
        <p>Trong nhóm, tôi đảm nhận vai trò viết nội dung. Ngoài nhiệm vụ chính, tôi cũng tham gia hỗ trợ các thành viên trong việc làm quen với công cụ và giải quyết các vấn đề kỹ thuật phát sinh trong quá trình làm việc.</p>
      </ReportSection>

      <ReportSection id="cong-cu" title="II. Các công cụ hợp tác đã sử dụng">
        <p>Trong suốt tuần thực hiện dự án, cá nhân đã tham gia thiết lập và sử dụng 4 công cụ thuộc đủ các nhóm theo yêu cầu: Trello (quản lý dự án), Google Docs (soạn thảo cộng tác), Google Drive (lưu trữ và chia sẻ tệp), và Google Meet (giao tiếp nhóm). Mỗi công cụ phục vụ một mục đích riêng biệt, kết hợp lại tạo thành một quy trình làm việc liên thông, hiệu quả.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {["Trello · Quản lý dự án", "Google Docs · Soạn thảo cộng tác", "Google Drive · Lưu trữ và chia sẻ", "Google Meet · Giao tiếp nhóm"].map((tool) => (
            <div key={tool} className="callout font-semibold">{tool}</div>
          ))}
        </div>
      </ReportSection>

      <ReportSection id="trello" title="III. Chi tiết thực hiện — Trello">
        <p>Ngay từ ngày đầu tiên, tôi cùng nhóm truy cập Trello để thiết lập board dự án. Tôi chịu trách nhiệm tạo các cột nội dung. Mỗi nhiệm vụ được gắn nhãn màu theo mức độ ưu tiên và đặt ngày hết hạn cụ thể để cả nhóm nắm được tiến độ chung.</p>
        <p>Trong suốt tuần, tôi duy trì thói quen cập nhật trạng thái thẻ mỗi ngày, thêm checklist chi tiết vào nhiệm vụ cá nhân và để lại bình luận ghi chú tiến độ. Tất cả hoạt động này được Trello ghi nhận trong phần Activity Log với tên tài khoản cá nhân hiển thị rõ ràng, đây chính là minh chứng trực tiếp cho sự tham gia của tôi.</p>
        <p>Các tác vụ cụ thể đã thực hiện: tạo board và cấu hình cột quy trình; tạo và giao 5 thẻ nhiệm vụ cho các thành viên; đặt nhãn màu ưu tiên và deadline cho từng thẻ; cập nhật trạng thái thẻ cá nhân hàng ngày; bình luận tiến độ trên từng thẻ được giao.</p>
        <Evidence src="/assets/bai-4/trello.jpg" alt="Ảnh minh chứng board Trello của nhóm" caption="Board Trello với các cột nhiệm vụ và thẻ công việc của nhóm." />
      </ReportSection>

      <ReportSection id="docs" title="3.2. Công cụ soạn thảo — Google Docs">
        <p>Google Docs là nơi cả nhóm cùng xây dựng nội dung chính của dự án theo thời gian thực. Tôi đã trực tiếp soạn thảo nội dung này trong tài liệu dùng chung của nhóm.</p>
        <p>Tính năng Version History của Google Docs ghi nhận chính xác từng lần chỉnh sửa theo tên tài khoản Google, thời điểm và đoạn nội dung được thay đổi. Ngoài ra, tôi chủ động dùng tính năng Comment để góp ý vào phần nội dung của các thành viên khác, và sử dụng Suggest mode khi đề xuất những thay đổi lớn để đồng đội dễ xem xét trước khi chấp nhận.</p>
        <Evidence src="/assets/bai-4/google-docs.png" alt="Ảnh minh chứng tài liệu Google Docs cộng tác" caption="Tài liệu Google Docs dùng chung trong quá trình xây dựng nội dung." />
      </ReportSection>

      <ReportSection id="drive" title="3.3. Công cụ lưu trữ và chia sẻ tệp — Google Drive">
        <p>Tôi là người đề xuất và thiết lập cấu trúc thư mục cho Google Drive của nhóm. Thay vì để tệp tin lộn xộn trong một thư mục chung, tôi xây dựng hệ thống thư mục có tên rõ ràng.</p>
        <Evidence src="/assets/bai-4/google-drive.jpg" alt="Ảnh minh chứng cấu trúc thư mục Google Drive" caption="Không gian lưu trữ và chia sẻ tệp của nhóm trên Google Drive." />
      </ReportSection>

      <ReportSection id="meet" title="3.4. Công cụ giao tiếp nhóm — Google Meet">
        <p>Nhóm chọn Google Meet làm kênh giao tiếp chính. Trong tuần, tôi chủ động khởi xướng ít nhất 3 cuộc thảo luận, đặt câu hỏi định hướng để nhóm đưa ra quyết định nhanh.</p>
        <Evidence src="/assets/bai-4/google-meet.jpg" alt="Ảnh minh chứng buổi họp nhóm trên Google Meet" caption="Buổi trao đổi và điều phối công việc của nhóm qua Google Meet." />
      </ReportSection>

      <ReportSection id="phan-tich" title="IV. Phân tích hiệu quả và bài học kinh nghiệm">
        <h3>4.1. Đánh giá hiệu quả từng công cụ</h3>
        <p><strong>Trello</strong> phát huy tác dụng rõ nét nhất trong việc giúp cả nhóm hình dung được toàn bộ khối lượng công việc ngay từ đầu. Tính năng kéo thả thẻ trực quan giúp cập nhật trạng thái nhanh mà không cần họp, tiết kiệm đáng kể thời gian điều phối. Hạn chế duy nhất là phần giao tiếp trong thẻ còn khá đơn giản, không thay thế được kênh chat riêng.</p>
        <p><strong>Google Docs</strong> là công cụ hiệu quả nhất trong nhóm. Khả năng nhiều người cùng chỉnh sửa một tài liệu theo thời gian thực, kết hợp với lịch sử phiên bản minh bạch, giúp quá trình biên tập nội dung trở nên trơn tru và dễ kiểm soát. Tuy nhiên, khi nhiều người chỉnh sửa cùng lúc mà không có quy trình, nội dung dễ bị xung đột và lộn xộn.</p>
        <p><strong>Google Drive</strong> đóng vai trò nền tảng lưu trữ quan trọng. Việc phân quyền linh hoạt (xem/chỉnh sửa/bình luận) giúp bảo vệ tài liệu quan trọng khỏi việc bị xóa hoặc chỉnh sửa nhầm. Hạn chế là tốc độ đồng bộ đôi khi chậm khi nhiều người tải tệp lớn cùng lúc.</p>
        <p><strong>Google Meet</strong> giải quyết tốt bài toán giao tiếp. Thông tin được truyền đi rõ ràng và tính năng Video Call giúp mọi người nhìn thấy nhau và dễ dàng quản lí hơn.</p>

        <h3>4.2. Thách thức và cách giải quyết</h3>
        <p>Thách thức thứ nhất là một số thành viên không cập nhật Trello đúng hạn, khiến tôi không nắm được tiến độ thực tế của nhóm. Cách giải quyết: tôi thiết lập quy tắc chung – mỗi thành viên bắt buộc cập nhật thẻ trước 21:00 mỗi ngày, và tôi gửi nhắc nhở ngắn qua Google Meet vào buổi sáng. Sau hai ngày áp dụng, thói quen này đã được duy trì đều đặn.</p>
        <p>Thách thức thứ hai là xung đột nội dung trên Google Docs khi hai người chỉnh sửa cùng một đoạn văn. Giải pháp: tôi đề xuất quy trình phân ca – mỗi người chỉnh sửa theo khung giờ riêng (sáng/chiều/tối) và bắt buộc dùng chế độ Suggest thay vì chỉnh sửa trực tiếp để mọi thay đổi đều được xem xét trước khi chấp nhận.</p>

        <h3>4.3. Kỹ năng được hình thành</h3>
        <p>Qua trải nghiệm thực tế một tuần, tôi nhận ra rằng sử dụng công cụ hợp tác không chỉ là thao tác kỹ thuật – điều quan trọng hơn là kỷ luật số: cập nhật đúng giờ, giao tiếp rõ ràng, và tôn trọng quy trình chung. Kỹ năng tổ chức thông tin có cấu trúc (từ cách đặt tên tệp đến cách phân chia thư mục) và kỹ năng điều phối không đồng bộ là hai năng lực tôi thấy được cải thiện rõ rệt nhất sau bài tập này.</p>
      </ReportSection>

      <ReportSection id="ket-luan" title="V. Kết luận">
        <p>Bài tập thực hành đã giúp tôi có cái nhìn toàn diện về quy trình làm việc nhóm trong môi trường số. Thông qua việc trực tiếp thiết lập và vận hành 4 công cụ (Trello, Google Docs, Google Drive, Google Meet), tôi đã hình thành tư duy hệ thống trong tổ chức công việc và năng lực phối hợp nhóm nhỏ từ xa.</p>
        <p>Điều tôi rút ra sâu sắc nhất là: công cụ chỉ phát huy hiệu quả khi đi kèm với quy trình rõ ràng và ý thức trách nhiệm của từng cá nhân. Một nhóm có công cụ tốt nhưng thiếu kỷ luật vẫn sẽ kém hiệu quả hơn một nhóm dùng công cụ đơn giản nhưng có nề nếp làm việc nhất quán. Đây là bài học tôi sẽ mang theo vào môi trường làm việc thực tế sau này.</p>
      </ReportSection>
    </AssignmentShell>
  );
}
