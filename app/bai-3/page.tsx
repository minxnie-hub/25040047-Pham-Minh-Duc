import { AssignmentShell } from "@/components/AssignmentShell";
import { DataTable, Evidence, Prompt, ReportSection } from "@/components/ContentBlocks";

const comparisonRows: React.ReactNode[][] = [
  ["TT1 – Cơ bản", "3/10", "2/10", "3/10", "2.7", "Kết quả mơ hồ, không có cấu trúc, thiếu thông tin quan trọng"],
  ["TT1 – Cải tiến", "7/10", "7/10", "7/10", "7.0", "Có đủ các phần yêu cầu, dễ đọc, phù hợp để ôn tập"],
  ["TT1 – Nâng cao", "9/10", "10/10", "9/10", "9.3", "Tóm tắt chuyên nghiệp, cấu trúc học thuật rõ ràng, dễ dàng trích dẫn"],
  ["TT2 – Cơ bản", "4/10", "3/10", "3/10", "3.3", "Giải thích đúng nhưng quá kỹ thuật, không phù hợp người mới học"],
  ["TT2 – Cải tiến", "7/10", "7/10", "8/10", "7.3", "Ví dụ thực tế tốt, cấu trúc logic nhưng thiếu chiều sâu"],
  ["TT2 – Nâng cao", "9/10", "9/10", "10/10", "9.3", "Tiếp cận Socratic xuất sắc, kết nối đa ngành, kích thích tư duy"],
  ["TT3 – Cơ bản", "5/10", "3/10", "4/10", "4.0", "Câu hỏi đơn điệu, chỉ ở mức nhớ lại, thiếu đa dạng loại câu"],
  ["TT3 – Cải tiến", "7/10", "8/10", "7/10", "7.3", "Đa dạng loại câu, có đáp án, nhưng thiếu phân cấp độ khó"],
  ["TT3 – Nâng cao", "10/10", "10/10", "10/10", "10.0", "Bộ câu hỏi hoàn chỉnh theo thang Bloom, rõ mục tiêu học tập"],
];

const principleRows: React.ReactNode[][] = [
  ["1", "Xác định vai trò (Role)", "Giao cho AI một persona chuyên gia phù hợp. Ví dụ: \"Bạn là nhà nghiên cứu giáo dục\" thay vì không có vai trò nào.", "Prompt nâng cao TT3 tạo ra bộ câu hỏi chứa khái niệm thang Bloom hoàn chỉnh nhờ vai trò \"chuyên gia thiết kế kiểm tra\"."],
  ["2", "Phân rã tác vụ (Decompose)", "Chia nhiệm vụ thành các bước nhỏ theo trình tự. Dùng CoT khi cần suy luận nhiều bước hoặc tổng hợp từ nhiều góc độ.", "Prompt TT1 nâng cao với 4 bước xử lý tạo ra tóm tắt có cấu trúc học thuật hoàn chỉnh so với kết quả mơ hồ của prompt cơ bản."],
  ["3", "Ràng buộc đầu ra (Constrain)", "Xác định rõ: độ dài (số từ/câu), định dạng (markdown/bảng/danh sách), ngôn ngữ, giọng văn. Cung cấp template nếu có thể.", "Tất cả 3 prompt nâng cao đều cho điểm \"Cấu trúc\" 9–10/10, so với 2–3/10 của prompt cơ bản không có ràng buộc."],
  ["4", "Cung cấp ví dụ (Few-shot)", "Đưa vào prompt 1–2 ví dụ về đầu ra mong muốn. Ví dụ không cần hoàn hảo – chỉ cần đủ để AI calibrate định dạng và mức độ chi tiết.", "Prompt TT1 nâng cao với ví dụ mẫu tạo ra đầu ra nhất quán về cấu trúc ngay lần đầu tiên, không cần chỉnh sửa lại."],
  ["5", "Kiểm tra và lặp (Iterate)", "Coi prompt là \"bản nháp đầu tiên\". Sau khi nhận kết quả, xác định phần nào thiếu/sai và thêm điều kiện vào prompt để cải thiện. Mỗi vòng lặp tăng chất lượng đáng kể.", "Phiên bản cải tiến của cả 3 tác vụ đều được xây dựng bằng cách phân tích điểm yếu của prompt cơ bản và bổ sung các ràng buộc cụ thể."],
];

export default function Bai3Page() {
  return (
    <AssignmentShell
      number={3}
      title="Viết prompt hiệu quả cho các tác vụ học tập"
      kicker="Prompt engineering"
      summary="Báo cáo phân tích ba tác vụ học tập, xây dựng ba cấp độ prompt cho mỗi tác vụ, thử nghiệm thực tế và tổng hợp năm nguyên tắc viết prompt hiệu quả."
      toc={[
        { id: "mo-dau", label: "Mở đầu" },
        { id: "tac-vu", label: "Lựa chọn và phân tích tác vụ" },
        { id: "prompt", label: "Các phiên bản prompt" },
        { id: "thu-nghiem", label: "Thử nghiệm và so sánh" },
        { id: "phan-tich", label: "Phân tích hiệu quả" },
        { id: "nguyen-tac", label: "Nguyên tắc viết prompt" },
        { id: "ket-luan", label: "Kết luận" },
      ]}
    >
      <ReportSection id="mo-dau" title="I. Mở đầu">
        <p>Trong bối cảnh trí tuệ nhân tạo (AI) ngày càng phát triển và được tích hợp sâu rộng vào mọi lĩnh vực, kỹ năng giao tiếp hiệu quả với các mô hình ngôn ngữ lớn (LLM) trở thành năng lực cốt lõi của người học trong thế kỷ 21. Nghệ thuật thiết kế câu lệnh đầu vào cho AI có ảnh hưởng trực tiếp và đáng kể đến chất lượng đầu ra, quyết định liệu một công cụ AI có thực sự phục vụ được mục tiêu học tập hay không.</p>
        <p>Bài thực hành này được thực hiện nhằm ba mục tiêu chính: (1) Hiểu và phân biệt các cấp độ thiết kế prompt từ cơ bản đến nâng cao; (2) Áp dụng các kỹ thuật prompt engineering trong các tác vụ học tập thực tế; (3) Xây dựng khả năng tư duy phê phán khi đánh giá chất lượng đầu ra của AI thông qua so sánh có hệ thống.</p>
        <p>Bài báo cáo được cấu trúc gồm năm phần chính: phân tích ba tác vụ học tập được chọn, trình bày ba phiên bản prompt cho mỗi tác vụ, kết quả thử nghiệm thực tế, phân tích nguyên nhân hiệu quả, và tổng hợp các nguyên tắc viết prompt.</p>
      </ReportSection>

      <ReportSection id="tac-vu" title="II. Lựa chọn và phân tích tác vụ học tập">
        <h3>1. Tác vụ 1: Tóm tắt tài liệu học tập</h3>
        <p><strong>Mục tiêu:</strong> Rút gọn nội dung dài thành bản tóm tắt có cấu trúc, giữ lại ý chính và loại bỏ thông tin thứ cấp.</p>
        <p><strong>Thách thức:</strong> AI dễ sa vào việc diễn giải tuỳ tiện, bỏ sót các luận điểm quan trọng, hoặc tóm tắt quá ngắn/quá dài. Nếu không chỉ định định dạng đầu ra, kết quả thường thiếu cấu trúc và khó sử dụng cho việc ôn tập.</p>
        <p><strong>Yêu cầu cụ thể của tác vụ:</strong> Độ dài tóm tắt mong muốn; ngôn ngữ và giọng văn; các phần cần bao gồm luận điểm chính, bằng chứng, kết luận; đối tượng đọc giả của bản tóm tắt.</p>

        <h3>2. Tác vụ 2: Giải thích khái niệm phức tạp</h3>
        <p><strong>Mục tiêu:</strong> Chuyển đổi các khái niệm chuyên ngành trừu tượng thành nội dung dễ hiểu, phù hợp với trình độ người học.</p>
        <p><strong>Thách thức:</strong> Mức độ đơn giản hoá phải phù hợp: quá đơn giản mất đi tính chính xác khoa học, quá phức tạp không giúp được người học. AI cũng có xu hướng dùng thuật ngữ chuyên môn mà không giải thích kèm theo.</p>
        <p><strong>Yêu cầu cụ thể:</strong> Trình độ người học (trung học, đại học, chuyên gia); Cần ví dụ minh hoạ thực tế; Liên kết với kiến thức đã biết; Mức độ sâu của giải thích.</p>

        <h3>3. Tác vụ 3: Tạo bộ câu hỏi ôn tập</h3>
        <p><strong>Mục tiêu:</strong> Tạo ra hệ thống câu hỏi đa dạng bao phủ các cấp độ tư duy theo thang Bloom, giúp người học tự kiểm tra và củng cố kiến thức.</p>
        <p><strong>Thách thức:</strong> AI thường tạo câu hỏi quá đơn giản (chỉ mức nhớ lại), thiếu phân bổ đều theo cấp độ nhận thức, hoặc tạo câu hỏi đúng/sai không rõ đáp án.</p>
        <p><strong>Yêu cầu cụ thể:</strong> Số lượng và loại câu hỏi; Phân bổ theo thang Bloom; Có kèm đáp án gợi ý; Độ khó phù hợp với cấp độ học.</p>
      </ReportSection>

      <ReportSection id="prompt" title="III. Xây dựng các phiên bản prompt">
        <h3>Tác vụ 1: Tóm tắt tài liệu học tập</h3>
        <h4>Cơ bản</h4>
        <Prompt>Tóm tắt bài báo này cho tôi.</Prompt>
        <h4>Cải tiến</h4>
        <Prompt>Hãy tóm tắt bài báo khoa học sau đây. Tóm tắt cần bao gồm: mục tiêu nghiên cứu, phương pháp sử dụng, kết quả chính và kết luận. Độ dài khoảng 200 từ, viết bằng tiếng Việt.</Prompt>
        <h4>Nâng cao</h4>
        <Prompt>Vai trò: Bạn là một trợ lý nghiên cứu học thuật chuyên nghiệp, có kinh nghiệm tóm tắt tài liệu khoa học cho sinh viên đại học. Nhiệm vụ: Tóm tắt bài báo dưới đây theo quy trình từng bước: Bước 1 – Xác định chủ đề và mục tiêu nghiên cứu chính. Bước 2 – Trích xuất 3–5 luận điểm quan trọng nhất. Bước 3 – Ghi nhận phương pháp và đối tượng nghiên cứu. Bước 4 – Tổng hợp kết quả và đóng góp của nghiên cứu. Định dạng đầu ra: [CHỦ ĐỀ]: ... [MỤC TIÊU]: ... [PHƯƠNG PHÁP]: ... [KẾT QUẢ CHÍNH]: (danh sách 3–5 điểm) [KẾT LUẬN &amp; Ý NGHĨA]: ... Độ dài: 250–300 từ. Ngôn ngữ: Học thuật, rõ ràng, tiếng Việt. Ví dụ mẫu đầu ra (với bài báo mẫu về biến đổi khí hậu): [CHỦ ĐỀ]: Tác động của biến đổi khí hậu đến năng suất nông nghiệp tại Đồng bằng sông Cửu Long [MỤC TIÊU]: Đánh giá mức độ ảnh hưởng của nhiệt độ tăng và xâm nhập mặn... Bây giờ hãy áp dụng với bài báo sau: [Dán nội dung bài báo vào đây]</Prompt>

        <h3>Tác vụ 2: Giải thích khái niệm phức tạp</h3>
        <h4>Cơ bản</h4>
        <Prompt>Giải thích khái niệm entropy trong nhiệt động lực học.</Prompt>
        <h4>Cải tiến</h4>
        <Prompt>Hãy giải thích khái niệm entropy trong nhiệt động lực học theo cách dễ hiểu nhất cho sinh viên năm nhất đại học. Bắt đầu bằng một ví dụ thực tế trong cuộc sống hàng ngày, sau đó đưa ra định nghĩa chính thức và cuối cùng giải thích ý nghĩa ứng dụng. Tránh dùng các công thức toán học phức tạp.</Prompt>
        <h4>Nâng cao</h4>
        <Prompt>Bạn là một giáo viên vật lý xuất sắc với phong cách dạy Socratic – dẫn dắt người học tự khám phá thay vì chỉ thụ động tiếp nhận. Giải thích khái niệm ENTROPY trong nhiệt động lực học theo cấu trúc sau: 1. MÓC NỐI với trải nghiệm thực: Bắt đầu bằng một tình huống quen thuộc (ví dụ: căn phòng tự nhiên trở nên bừa bộn, không bao giờ tự dọn gọn) và đặt câu hỏi kích thích tư duy: "Tại sao điều này xảy ra?" 2. XÂY DỰNG KHÁI NIỆM qua 3 lớp: Lớp 1 (Trực quan): Entropy là thước đo sự hỗn loạn/mất trật tự của hệ thống; Lớp 2 (Thống kê): Entropy liên quan đến số lượng trạng thái vi mô; Lớp 3 (Nhiệt động lực học): Công thức S = k·ln(W) và ý nghĩa. 3. BA VÍ DỤ MINH HOẠ đa dạng: Ví dụ vật lý (khí giãn nở), ví dụ hoá học (hoà tan muối), ví dụ đời sống (thông tin và sự hỗn loạn). 4. CẦU NỐI sang ứng dụng: Entropy trong kỹ thuật, công nghệ thông tin (lý thuyết thông tin Shannon), và sinh học. 5. KIỂM TRA HIỂU BIẾT: Đặt 2 câu hỏi gợi mở để người đọc tự kiểm tra mức độ nắm bắt. Độ dài: 400–500 từ. Giọng văn: Sinh động, kích thích tư duy, không khô cứng.</Prompt>

        <h3>Tác vụ 3: Tạo bộ câu hỏi ôn tập</h3>
        <h4>Cơ bản</h4>
        <Prompt>Tạo 10 câu hỏi ôn tập về quang hợp.</Prompt>
        <h4>Cải tiến</h4>
        <Prompt>Tạo 10 câu hỏi ôn tập về chủ đề quang hợp dành cho học sinh trung học phổ thông. Bao gồm 4 câu trắc nghiệm, 3 câu điền khuyết, và 3 câu hỏi tự luận ngắn. Mỗi câu hỏi trắc nghiệm cần có 4 lựa chọn và đáp án đúng. Câu hỏi cần bao phủ các nội dung: phương trình quang hợp, vai trò của chlorophyll, pha sáng và pha tối.</Prompt>
        <h4>Nâng cao</h4>
        <Prompt>Vai trò: Bạn là chuyên gia thiết kế kiểm tra giáo dục (assessment designer) với kinh nghiệm xây dựng đề thi theo thang nhận thức Bloom. Nhiệm vụ: Thiết kế BỘ CÂU HỎI ÔN TẬP toàn diện về chủ đề QUANG HỢP cho học sinh lớp 10 THPT. CẤU TRÚC BỘ CÂU HỎI (12 câu, phân bổ theo thang Bloom): [MỨC 1 – BIẾT] (2 câu trắc nghiệm 1 điểm); [MỨC 2 – HIỂU] (2 câu trắc nghiệm 1 điểm); [MỨC 3 – VẬN DỤNG] (3 câu hỏi ngắn 2 điểm); [MỨC 4 – PHÂN TÍCH] (3 câu hỏi 2 điểm); [MỨC 5-6 – ĐÁNH GIÁ/SÁNG TẠO] (2 câu hỏi tự luận 3 điểm). YÊU CẦU ĐỊNH DẠNG cho mỗi câu: Số câu và mức Bloom; Nội dung câu hỏi; Đáp án / Gợi ý trả lời; Mục tiêu học tập câu hỏi hướng đến. Chủ đề cần bao phủ: phương trình tổng quát, nguyên liệu và sản phẩm, pha sáng, chu trình Calvin, yếu tố ảnh hưởng, vai trò sinh thái.</Prompt>
      </ReportSection>

      <ReportSection id="thu-nghiem" title="IV. Thử nghiệm và so sánh kết quả">
        <p>Các phiên bản prompt được thử nghiệm với công cụ AI và ghi lại bằng ảnh chụp màn hình.</p>
        <Evidence src="/assets/bai-3/thu-nghiem-01.png" alt="Ảnh thử nghiệm các phiên bản prompt thứ nhất" caption="Minh chứng thử nghiệm prompt — phần 1." />
        <Evidence src="/assets/bai-3/thu-nghiem-02.png" alt="Ảnh thử nghiệm các phiên bản prompt thứ hai" caption="Minh chứng thử nghiệm prompt — phần 2." />
        <Evidence src="/assets/bai-3/thu-nghiem-03.png" alt="Ảnh thử nghiệm và bảng so sánh kết quả" caption="Minh chứng thử nghiệm prompt — phần 3." />
        <h3>Bảng so sánh tổng hợp kết quả</h3>
        <DataTable headers={["Tác vụ / Cấp độ", "Đầy đủ nội dung", "Cấu trúc rõ ràng", "Hữu ích thực tế", "Điểm tổng (/10)", "Nhận xét chính"]} rows={comparisonRows} />
      </ReportSection>

      <ReportSection id="phan-tich" title="V. Phân tích hiệu quả prompt">
        <p>Phân tích bảng trên cho thấy xu hướng rõ ràng: điểm số tăng đều qua ba cấp độ prompt, với mức tăng bình quân từ 3.3 điểm (cơ bản) lên 7.2 điểm (cải tiến) và 9.5 điểm (nâng cao). Đáng chú ý là tiêu chí "Cấu trúc rõ ràng" có mức cải thiện lớn nhất, từ 2–3/10 ở prompt cơ bản lên 9–10/10 ở prompt nâng cao. Điều này xác nhận giả thuyết: khi người dùng cung cấp cấu trúc đầu ra mong muốn trong prompt, AI sẽ tổ chức thông tin theo cách đó thay vì tự quyết định.</p>
        <p><strong>Prompt nâng cao tích hợp nhiều kỹ thuật cộng hưởng:</strong></p>
        <p><strong>Role Prompting:</strong> Giao vai trò chuyên gia ("chuyên gia thiết kế kiểm tra giáo dục") kích hoạt AI áp dụng khuôn khổ chuyên ngành – trong trường hợp này là thang Bloom – mà một người dùng thông thường có thể không biết yêu cầu cụ thể.</p>
        <p><strong>Chain-of-Thought (CoT):</strong> Yêu cầu xử lý từng bước ("Bước 1... Bước 2...") giúp AI phân tích sâu hơn thay vì tổng hợp nhanh, đặc biệt quan trọng với tác vụ giải thích khái niệm phức tạp.</p>
        <p><strong>Few-shot Examples:</strong> Ví dụ mẫu đầu ra trong prompt tóm tắt cung cấp một "mẫu nhận thức" để AI calibrate, giảm thiểu sự mơ hồ về định dạng và mức độ chi tiết mong muốn.</p>
        <p><strong>Structured Output Templates:</strong> Bộ khung định dạng với nhãn cụ thể ([CHỦ ĐỀ], [MỤC TIÊU]...) hoạt động như một hợp đồng đầu ra – AI hiểu rằng mọi trường đều cần được điền đầy đủ và chính xác.</p>
        <p><strong>Meta-cognitive Prompting:</strong> Yêu cầu AI tự đặt câu hỏi kiểm tra ("đặt 2 câu hỏi gợi mở để người đọc tự kiểm tra") thể hiện mức độ hiểu biết sâu về thiết kế học tập, tạo ra giá trị vượt xa yêu cầu ban đầu.</p>
      </ReportSection>

      <ReportSection id="nguyen-tac" title="VI. Tổng hợp nguyên tắc viết prompt hiệu quả">
        <p>Dựa trên kết quả thực nghiệm, có thể đúc kết 5 nguyên tắc nền tảng trong thiết kế prompt:</p>
        <DataTable headers={["#", "Nguyên tắc", "Mô tả và cách áp dụng", "Bằng chứng từ thực nghiệm"]} rows={principleRows} />
      </ReportSection>

      <ReportSection id="ket-luan" title="VII. Kết luận">
        <p>Bài thực hành đã chứng minh rằng prompt engineering là kỹ năng có thể học và cải thiện được qua thực hành có hệ thống. Kết quả thực nghiệm trên ba tác vụ học tập cho thấy mức chênh lệch chất lượng đầu ra lên tới 3–4 lần giữa prompt cơ bản và prompt nâng cao, không phải vì AI "giỏi hơn" trong lần thứ hai, mà vì người dùng đã cung cấp đủ thông tin và cấu trúc để AI thể hiện đúng tiềm năng.</p>
        <p>Quan trọng hơn, nghiên cứu này cho thấy prompt engineering không chỉ là "mẹo viết câu lệnh" mà là một hình thức tư duy có cấu trúc: người dùng buộc phải xác định rõ mục tiêu, tiêu chí thành công, và khuôn khổ phù hợp trước khi yêu cầu AI hỗ trợ – đây cũng chính là kỹ năng tư duy phê phán cốt lõi trong học tập.</p>
        <p><strong>Hướng phát triển tiếp theo:</strong> Nghiên cứu sâu hơn về hiệu quả của các kỹ thuật như self-consistency prompting, Tree-of-Thought, và các phương pháp tăng cường độ tin cậy (grounding) của đầu ra AI trong bối cảnh học thuật.</p>
      </ReportSection>
    </AssignmentShell>
  );
}
