import { AssignmentShell } from "@/components/AssignmentShell";
import { DataTable, ReportSection } from "@/components/ContentBlocks";
import { Check, X, Brain, Scales, GraduationCap } from "@phosphor-icons/react/dist/ssr";

const policyRows: React.ReactNode[][] = [
  ["Phạm vi áp dụng", "Toàn bộ bài tập, luận văn, nghiên cứu khoa học", "Tất cả hoạt động học tập có đánh giá"],
  ["Mức độ cho phép", "Được dùng để hỗ trợ tìm hiểu; không được thay thế nội dung gốc", "Cho phép hỗ trợ ý tưởng; cấm nộp bài do AI viết hoàn toàn"],
  ["Khai báo bắt buộc", "Phải ghi rõ trong mục phương pháp hoặc phụ lục", "Phải có mục AI Disclosure Statement"],
  ["Hình thức vi phạm", "Cảnh cáo, hủy điểm, đình chỉ học", "Điểm 0, kỷ luật theo quy chế đào tạo"],
  ["Công cụ phát hiện", "Turnitin AI Detection + kiểm tra thủ công", "GPTZero, Turnitin, phỏng vấn trực tiếp"],
];

const promptRows: React.ReactNode[][] = [
  ["1", "Xác định vấn đề", '"Liệt kê các vấn đề phổ biến trong dịch vụ giao hàng thức ăn tại Việt Nam"', "Thu thập ý tưởng ban đầu, mở rộng góc nhìn"],
  ["2", "Tìm kiếm tài liệu", '"Gợi ý các nguồn học thuật về customer satisfaction trong food delivery"', "Định hướng tài liệu tham khảo để tự tìm kiếm thêm"],
  ["3", "Lập dàn ý", '"Xây dựng dàn ý cho báo cáo cải thiện dịch vụ giao hàng gồm 5 phần chính"', "Tạo khung cấu trúc; sau đó tự viết từng phần"],
  ["4", "Kiểm tra ngôn ngữ", '"Check grammar và gợi ý cách diễn đạt tự nhiên hơn cho đoạn sau: [đoạn văn]"', "Chỉnh sửa ngôn ngữ, KHÔNG thay nội dung chuyên môn"],
];

const principleRows: React.ReactNode[][] = [
  ["1", "Minh bạch & Khai báo", "Luôn ghi rõ tên công cụ AI, phiên bản và mục đích sử dụng trong mọi bài nộp khi có yêu cầu."],
  ["2", "Tư duy chủ động", "AI chỉ cung cấp gợi ý; mọi quyết định về nội dung, lập luận và kết luận phải do bản thân xác định."],
  ["3", "Xác minh thông tin", "Kiểm tra chéo mọi dữ kiện, số liệu và trích dẫn mà AI cung cấp trước khi đưa vào bài."],
  ["4", "Không thay thế tư duy", "Không dùng AI viết thay toàn bộ bài; giữ phần lập luận, phân tích và kết luận là sản phẩm của riêng mình."],
  ["5", "Tôn trọng sở hữu trí tuệ", "Không yêu cầu AI tái tạo nội dung có bản quyền; tự trích dẫn nguồn gốc theo chuẩn APA/IEEE."],
  ["6", "Phát triển năng lực", "Dùng AI để học cách tiếp cận vấn đề mới, không dùng để né tránh quá trình học tập thực sự."],
  ["7", "Tuân thủ chính sách", "Đọc và tuân theo quy định cụ thể của từng môn học/trường về giới hạn sử dụng AI."],
];

const shouldDo = [
  "Khai báo rõ công cụ AI đã dùng",
  "Dùng AI để brainstorm ý tưởng",
  "Xác minh mọi thông tin AI cung cấp",
  "Tự viết lập luận và kết luận",
  "Học cách AI giải quyết vấn đề",
  "Tuân thủ chính sách từng môn học",
];

const shouldNot = [
  "Nộp nguyên bài do AI tạo ra",
  "Dùng AI thay thế suy nghĩ của mình",
  "Bỏ qua việc kiểm tra nguồn trích dẫn",
  "Giấu việc sử dụng AI khi bắt buộc khai báo",
  "Dùng AI để làm bài kiểm tra cá nhân",
  "Sao chép nội dung có bản quyền qua AI",
];

export default function Bai6Page() {
  return (
    <AssignmentShell
      number={6}
      title="Sử dụng AI có trách nhiệm trong học tập và nghiên cứu"
      kicker="Đạo đức học thuật"
      summary="Báo cáo phân tích chính sách sử dụng AI, mô tả một nhiệm vụ học tập có AI hỗ trợ, thảo luận đạo đức, xây dựng bảy nguyên tắc cá nhân và infographic thực hành."
      toc={[
        { id: "chinh-sach", label: "Phân tích chính sách" },
        { id: "qua-trinh", label: "Quá trình sử dụng AI" },
        { id: "dao-duc", label: "Phân tích đạo đức" },
        { id: "nguyen-tac", label: "Bộ nguyên tắc cá nhân" },
        { id: "infographic", label: "Infographic" },
        { id: "tham-khao", label: "Tài liệu tham khảo" },
      ]}
    >
      <ReportSection id="chinh-sach" title="I. Phân tích chính sách sử dụng AI tại các trường đại học Việt Nam">
        <h3>1.1. Tổng quan chính sách</h3>
        <p>Trong bối cảnh AI ngày càng phổ biến, nhiều trường đại học lớn tại Việt Nam đã ban hành chính sách chính thức nhằm định hướng việc sử dụng AI trong học tập và nghiên cứu. Hai trường tiêu biểu được phân tích gồm Đại học Ngoại Thương (FTU) và Đại học Quốc gia Hà Nội (VNU).</p>
        <DataTable headers={["Khía cạnh", "ĐH Ngoại Thương (FTU)", "ĐH Quốc gia HN (VNU)"]} rows={policyRows} />
        <h3>1.2. Nhận xét chính sách</h3>
        <p>Nhìn chung, các chính sách đều hướng đến mục tiêu: (1) không cấm tuyệt đối AI nhưng kiểm soát phạm vi sử dụng, (2) bắt buộc khai báo để đảm bảo trung thực học thuật, và (3) xử lý nghiêm các trường hợp gian lận. Điểm đáng chú ý là cả hai trường đều nhấn mạnh tính chủ động của sinh viên trong việc tư duy và sáng tạo — AI chỉ được coi là công cụ hỗ trợ.</p>
      </ReportSection>

      <ReportSection id="qua-trinh" title="II. Mô tả quá trình sử dụng AI">
        <h3>2.1. Nhiệm vụ được chọn</h3>
        <p><strong>Nhiệm vụ:</strong> Xây dựng bài thuyết trình về "Cải thiện chất lượng dịch vụ giao hàng thức ăn" – môn Business Communication.</p>
        <p><strong>Công cụ AI sử dụng:</strong> Claude (Anthropic) – phiên bản Claude Sonnet 4.6.</p>

        <h3>2.2. Nhật ký prompt & đầu ra AI</h3>
        <DataTable headers={["#", "Giai đoạn", "Prompt sử dụng", "Mục đích"]} rows={promptRows} />

        <h3>2.3. Cách đánh giá, chỉnh sửa và tích hợp đầu ra</h3>
        <ul>
          <li><strong>Đánh giá:</strong> So sánh gợi ý của AI với kiến thức từ bài giảng và tài liệu học; loại bỏ các ý không phù hợp với bối cảnh Việt Nam.</li>
          <li><strong>Chỉnh sửa:</strong> Viết lại toàn bộ nội dung bằng ngôn ngữ riêng; chỉ giữ cấu trúc dàn ý và các từ khóa gợi ý.</li>
          <li><strong>Tích hợp:</strong> Ghép phần gợi ý từ AI (đã chỉnh sửa) vào bài thuyết trình; ghi chú rõ nguồn hỗ trợ.</li>
          <li><strong>Khai báo:</strong> Ghi ở cuối bài: "Bài thuyết trình này sử dụng Claude AI (Anthropic, 2025) để hỗ trợ brainstorm và kiểm tra ngôn ngữ. Toàn bộ nội dung, phân tích và kết luận là sản phẩm của nhóm sinh viên."</li>
        </ul>
      </ReportSection>

      <ReportSection id="dao-duc" title="III. Phân tích đạo đức">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="border border-[var(--ink)] bg-[var(--white)] p-5">
            <Scales size={28} className="mb-3 text-[var(--teacher-red)]" />
            <h3 className="mt-0 text-xl">Ranh giới hợp lý / gian lận</h3>
            <ul>
              <li>Dùng AI gợi ý ý tưởng rồi tự viết: HỢP LÝ</li>
              <li>Dùng AI tổ chức dàn ý: HỢP LÝ</li>
              <li>Nộp bài do AI viết nguyên văn: GIAN LẬN</li>
              <li>Không khai báo khi bắt buộc: GIAN LẬN</li>
            </ul>
          </div>
          <div className="border border-[var(--ink)] bg-[var(--white)] p-5">
            <GraduationCap size={28} className="mb-3 text-[var(--chalk)]" />
            <h3 className="mt-0 text-xl">Quyền sở hữu trí tuệ & trích dẫn</h3>
            <ul>
              <li>AI tổng hợp từ nhiều nguồn → cần xác minh nguồn gốc</li>
              <li>Không trích dẫn tự động → tự kiểm tra tài liệu gốc</li>
              <li>Khai báo: (Hỗ trợ bởi Claude AI, Anthropic, 2025)</li>
            </ul>
          </div>
          <div className="border border-[var(--ink)] bg-[var(--white)] p-5">
            <Brain size={28} className="mb-3 text-[var(--teacher-red)]" />
            <h3 className="mt-0 text-xl">Tác động đến phát triển kỹ năng</h3>
            <ul>
              <li>Rủi ro: phụ thuộc AI, giảm tư duy độc lập</li>
              <li>Cơ hội: tăng hiệu suất nếu dùng đúng cách</li>
              <li>Nguyên tắc: AI là công cụ, não người là chủ thể</li>
            </ul>
          </div>
        </div>
        <p className="mt-7">Ranh giới mỏng giữa "hỗ trợ hợp lý" và "gian lận học thuật" phụ thuộc chủ yếu vào ý định của người dùng và mức độ khai báo minh bạch. Về sở hữu trí tuệ, AI không tạo ra tài liệu có nguồn trích dẫn hợp lệ nên sinh viên phải tự xác minh và trích dẫn theo chuẩn. Về phát triển kỹ năng, nguy cơ lớn nhất là sự phụ thuộc thụ động — vì vậy cần đặt rõ giới hạn cho bản thân.</p>
      </ReportSection>

      <ReportSection id="nguyen-tac" title="IV. Bộ nguyên tắc cá nhân sử dụng AI có trách nhiệm">
        <DataTable headers={["#", "Nguyên tắc", "Cách áp dụng"]} rows={principleRows} />
      </ReportSection>

      <ReportSection id="infographic" title="V. Infographic: Sử dụng AI có trách nhiệm trong học thuật">
        <div className="overflow-hidden border-2 border-[var(--ink)] bg-[var(--white)] shadow-[10px_10px_0_rgba(20,40,60,.14)]">
          <div className="bg-[var(--ink)] px-6 py-7 text-[var(--white)] sm:px-9">
            <h3 className="display-font m-0 text-3xl sm:text-4xl">Sử dụng AI có trách nhiệm trong học thuật</h3>
            <p className="mt-2 text-white/75">Hướng dẫn thực hành dành cho sinh viên</p>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="border-b border-[var(--ink)] bg-[rgba(31,90,74,.08)] p-6 md:border-b-0 md:border-r sm:p-8">
              <h3 className="mt-0 flex items-center gap-2 text-2xl text-[var(--chalk)]"><Check weight="bold" /> Nên làm</h3>
              <ul className="list-none pl-0">
                {shouldDo.map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 shrink-0 text-[var(--chalk)]" weight="bold" /> <span>{item}</span></li>)}
              </ul>
            </div>
            <div className="bg-[rgba(162,61,53,.07)] p-6 sm:p-8">
              <h3 className="mt-0 flex items-center gap-2 text-2xl text-[var(--teacher-red)]"><X weight="bold" /> Không nên</h3>
              <ul className="list-none pl-0">
                {shouldNot.map((item) => <li key={item} className="flex gap-3"><X className="mt-1 shrink-0 text-[var(--teacher-red)]" weight="bold" /> <span>{item}</span></li>)}
              </ul>
            </div>
          </div>

          <div className="border-t border-[var(--ink)] p-6 sm:p-8">
            <h3 className="mt-0 text-2xl">Quy trình 5 bước sử dụng AI trong học tập</h3>
            <div className="mt-5 grid gap-2 sm:grid-cols-5">
              {["Xác định nhiệm vụ", "Đặt câu hỏi cho AI", "Đánh giá & lọc kết quả", "Tự viết nội dung", "Khai báo sử dụng AI"].map((step, index) => (
                <div key={step} className="border border-[var(--ink)] p-4">
                  <span className="display-font block text-3xl text-[var(--teacher-red)]">{String(index + 1).padStart(2, "0")}</span>
                  <strong className="mt-2 block text-sm leading-5">{step}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="grid border-t border-[var(--ink)] md:grid-cols-3">
            {[
              ["Tư duy Phê phán", "Luôn đặt câu hỏi về độ chính xác của thông tin AI cung cấp"],
              ["Đạo đức Học thuật", "Tuân thủ quy định của trường và tinh thần trung thực học thuật"],
              ["Phát triển Năng lực", "Dùng AI để học hỏi thêm, không phải để thay thế việc học"],
            ].map(([title, body]) => (
              <div key={title} className="border-b border-[var(--ink)] p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <h3 className="mt-0 text-xl">{title}</h3>
                <p className="mb-0 text-sm text-[var(--ink-soft)]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </ReportSection>

      <ReportSection id="tham-khao" title="Tài liệu tham khảo">
        <ol className="space-y-3">
          <li>Anthropic. (2025). Claude AI [Large language model]. https://www.anthropic.com</li>
          <li>Đại học Ngoại Thương. (2024). Quy định về sử dụng trí tuệ nhân tạo trong học tập và nghiên cứu. FTU.</li>
          <li>Đại học Quốc gia Hà Nội. (2024). Hướng dẫn sử dụng AI trong hoạt động đào tạo. VNU.</li>
          <li>UNESCO. (2023). ChatGPT and artificial intelligence in higher education: Quick start guide. UNESCO.</li>
          <li>Zawacki-Richter, O., Marín, V. I., Bond, M., & Gouverneur, F. (2019). Systematic review of research on artificial intelligence applications in higher education. International Journal of Educational Technology in Higher Education, 16(1), 39. https://doi.org/10.1186/s41239-019-0171-0</li>
        </ol>
      </ReportSection>
    </AssignmentShell>
  );
}
