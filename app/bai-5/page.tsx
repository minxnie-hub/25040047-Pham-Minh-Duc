import { AssignmentShell } from "@/components/AssignmentShell";
import { DataTable, Prompt, ReportSection } from "@/components/ContentBlocks";

const toolsRows: React.ReactNode[][] = [
  ["1", "AI tạo văn bản", "Claude (Anthropic)", "Lên dàn ý, viết nội dung slide, phân tích dữ liệu"],
  ["2", "AI tạo văn bản", "ChatGPT (OpenAI)", "Tạo nội dung thay thế, so sánh chất lượng"],
  ["3", "AI tạo hình ảnh", "DALL-E 3 (OpenAI)", "Tạo hình ảnh minh họa về biến đổi khí hậu"],
  ["4", "AI tạo hình ảnh", "Midjourney", "Tạo hình ảnh phong cách nghệ thuật cho slide"],
  ["5", "AI hỗ trợ thiết kế", "Canva AI (Magic Design)", "Thiết kế layout slide, tạo đồ họa thông tin"],
  ["6", "AI hỗ trợ thiết kế", "Adobe Firefly", "Tạo và chỉnh sửa hình ảnh tích hợp vào thiết kế"],
];

const textComparisonRows: React.ReactNode[][] = [
  ["Cấu trúc dàn ý", "Logic, có narrative rõ ràng, chú trọng flow câu chuyện", "Chi tiết hơn, nhiều sub-bullets, phong cách học thuật"],
  ["Độ chính xác số liệu", "Cần kiểm chứng ~25% số liệu", "Cần kiểm chứng ~30% số liệu"],
  ["Khả năng tùy chỉnh", "Hiểu ngữ cảnh Việt Nam tốt hơn", "Đề xuất nhiều ví dụ quốc tế hơn"],
  ["Độ dài phản hồi", "Cân bằng, vừa đủ", "Có xu hướng dài hơn cần thiết"],
  ["Ngôn ngữ tiếng Việt", "Tự nhiên, địa phương hóa tốt", "Đúng ngữ pháp nhưng kém tự nhiên hơn"],
];

const imageComparisonRows: React.ReactNode[][] = [
  ["Độ chính xác chi tiết địa phương", "Cao hơn (80%)", "Trung bình (60%)"],
  ["Tính thẩm mỹ tổng thể", "Tốt", "Rất tốt"],
  ["Nhất quán phong cách", "Trung bình", "Cao"],
  ["Phù hợp slide thuyết trình", "Cần chỉnh sửa nhiều", "Có thể dùng ngay"],
  ["Dễ sử dụng", "Rất dễ (tích hợp ChatGPT)", "Cần học qua Discord"],
];

const workflowRows: React.ReactNode[][] = [
  ["Lên ý tưởng & dàn ý", "Claude, ChatGPT", "Lọc, điều chỉnh theo ngữ cảnh thực tế", "~2 giờ"],
  ["Nghiên cứu & số liệu", "Claude, ChatGPT", "Xác minh nguồn, kiểm tra độ chính xác", "~1.5 giờ"],
  ["Tạo hình ảnh", "DALL-E 3, Midjourney", "Chọn lọc, chỉnh sửa, crop phù hợp", "~3 giờ"],
  ["Thiết kế slide", "Canva AI, Adobe Firefly", "Điều chỉnh màu sắc, typography, layout", "~3 giờ"],
  ["Hoàn thiện & kiểm tra", "AI hỗ trợ proofreading", "Đọc soát toàn bộ, thêm ý kiến cá nhân", "~1 giờ"],
];

const appendixRows: React.ReactNode[][] = [
  ["1", "Claude", "Dàn ý slide", "Lên dàn ý 12 slide về biến đổi khí hậu + giới trẻ VN", "★★★★★"],
  ["2", "Claude", "Nội dung slide", "Viết chi tiết Slide 3 về thực trạng, 80 từ/bullet", "★★★★☆"],
  ["3", "ChatGPT", "So sánh dàn ý", "Cùng prompt với Claude để so sánh", "★★★★☆"],
  ["4", "ChatGPT", "Ví dụ quốc tế", "Liệt kê 5 mô hình thanh niên tiêu biểu về môi trường", "★★★★★"],
  ["5", "DALL-E 3", "Hình ảnh Slide 6", "Vietnamese youth planting trees, Mekong Delta, hopeful", "★★★☆☆"],
  ["6", "Midjourney", "Hình ảnh Slide 1", "Vietnamese students environmental cleanup, flat design", "★★★★☆"],
  ["7", "Canva AI", "Template tổng thể", "Environmental presentation, professional, modern", "★★★★☆"],
  ["8", "Adobe Firefly", "Background Slide 1", "Abstract green nature, Vietnamese elements, cover slide", "★★★★★"],
];

export default function Bai5Page() {
  return (
    <AssignmentShell
      number={5}
      title="Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung"
      kicker="Sáng tạo nội dung số"
      summary="Báo cáo quy trình thiết kế bài thuyết trình 12 slide về “Biến đổi khí hậu và hành động của giới trẻ Việt Nam” với sáu công cụ AI tạo sinh."
      toc={[
        { id: "gioi-thieu", label: "Giới thiệu dự án" },
        { id: "claude", label: "Claude" },
        { id: "chatgpt", label: "ChatGPT" },
        { id: "hinh-anh", label: "DALL-E 3 và Midjourney" },
        { id: "thiet-ke", label: "Canva AI và Adobe Firefly" },
        { id: "tong-ket", label: "Tổng kết vai trò AI" },
        { id: "dao-duc", label: "Các vấn đề đạo đức" },
        { id: "ket-luan", label: "Kết luận" },
        { id: "phu-luc", label: "Phụ lục prompt" },
      ]}
    >
      <ReportSection id="gioi-thieu" title="I. Giới thiệu dự án sáng tạo nội dung">
        <h3>1.1. Mô tả dự án</h3>
        <p>Dự án sáng tạo nội dung được lựa chọn trong bài thực hành này là thiết kế một bài thuyết trình với chủ đề: "Biến đổi khí hậu và hành động của giới trẻ Việt Nam". Đây là chủ đề có tính thời sự cao, phù hợp với đối tượng sinh viên đại học và có thể tận dụng tối đa sức mạnh của các công cụ AI tạo sinh trong việc nghiên cứu, viết nội dung, tạo hình ảnh và thiết kế.</p>
        <p>Bài thuyết trình được dự kiến gồm 12 slide, bao gồm: trang bìa, phần giới thiệu, thực trạng biến đổi khí hậu tại Việt Nam, vai trò của giới trẻ, các hành động cụ thể, case study thực tế và lời kêu gọi hành động.</p>

        <h3>1.2. Lý do lựa chọn dự án</h3>
        <ul>
          <li>Chủ đề quen thuộc nhưng cần dữ liệu cập nhật – phù hợp để đánh giá khả năng tìm kiếm thông tin của AI.</li>
          <li>Cần đa dạng loại nội dung: văn bản, hình ảnh minh họa, biểu đồ, thiết kế slide.</li>
          <li>Có thể so sánh rõ ràng chất lượng đầu ra giữa các công cụ AI khác nhau.</li>
          <li>Đòi hỏi sự kết hợp giữa đầu ra của AI và sáng tạo cá nhân để tạo sản phẩm hoàn chỉnh.</li>
        </ul>

        <h3>1.3. Các công cụ AI được sử dụng</h3>
        <DataTable headers={["STT", "Loại công cụ", "Tên công cụ", "Mục đích sử dụng"]} rows={toolsRows} />
      </ReportSection>

      <ReportSection id="claude" title="II. Chi tiết quá trình sử dụng AI — Claude">
        <h3>Prompt 1: Lên dàn ý bài thuyết trình</h3>
        <p>Trong bước đầu tiên, Claude được sử dụng để xây dựng dàn ý tổng thể cho bài thuyết trình. Prompt được sử dụng có nội dung như sau:</p>
        <Prompt>Hãy lên dàn ý chi tiết cho bài thuyết trình 12 slide về chủ đề Biến đổi khí hậu và hành động của giới trẻ Việt Nam. Đối tượng khán giả là sinh viên đại học. Mỗi slide cần có tiêu đề, 3-4 điểm nội dung chính và gợi ý hình ảnh minh họa phù hợp.</Prompt>
        <p><strong>Kết quả nhận được:</strong> Claude trả về dàn ý chi tiết với 12 slide được tổ chức logic, có phân chia rõ ràng giữa phần giới thiệu vấn đề, phân tích thực trạng và phần giải pháp – kêu gọi hành động. Điểm mạnh nổi bật là cấu trúc narrative (câu chuyện) được xây dựng mạch lạc, có sự chuyển tiếp tự nhiên giữa các phần.</p>
        <p><strong>Chỉnh sửa đã thực hiện:</strong> Điều chỉnh slide 7 từ chủ đề 'Công nghệ xanh toàn cầu' sang 'Các mô hình thanh niên Việt Nam tiêu biểu' để phù hợp hơn với đối tượng khán giả trong nước.</p>

        <h3>Prompt 2: Viết nội dung cho từng slide</h3>
        <Prompt>Viết nội dung chi tiết cho Slide 3: Thực trạng biến đổi khí hậu tại Việt Nam. Cung cấp 3 số liệu thống kê đáng chú ý gần đây (sau 2020), 2 tác động cụ thể đến đời sống người dân và 1 dẫn chứng từ báo cáo quốc tế. Ngôn ngữ súc tích, phù hợp trình chiếu, không quá 80 từ mỗi bullet point.</Prompt>
        <p><strong>Kết quả nhận được:</strong> Claude cung cấp nội dung chuyên sâu với các số liệu cụ thể về nhiệt độ trung bình tăng 0,89°C trong 50 năm qua, mực nước biển dâng ảnh hưởng đến đồng bằng sông Cửu Long, và trích dẫn từ Báo cáo IPCC 2022. Nội dung được trình bày dưới dạng bullet point ngắn gọn, súc tích, rất phù hợp cho slide thuyết trình.</p>
        <p><strong>Hạn chế phát hiện:</strong> Một số số liệu cần được kiểm chứng lại qua các nguồn chính thức như Bộ Tài nguyên và Môi trường Việt Nam. Sau khi xác minh, khoảng 2/8 số liệu cần điều chỉnh nhỏ về con số chính xác.</p>
      </ReportSection>

      <ReportSection id="chatgpt" title="2.2. Công cụ AI tạo văn bản — ChatGPT (GPT-4)">
        <h3>So sánh với Claude trên cùng prompt</h3>
        <p>Để đánh giá khách quan, cùng prompt về dàn ý bài thuyết trình được gửi đến ChatGPT. Kết quả cho thấy sự khác biệt đáng chú ý về phong cách và cấu trúc đầu ra.</p>
        <DataTable headers={["Tiêu chí so sánh", "Claude", "ChatGPT"]} rows={textComparisonRows} />
        <p><strong>Quyết định tích hợp:</strong> Sử dụng dàn ý từ Claude làm khung chính, bổ sung một số ví dụ quốc tế từ đầu ra của ChatGPT vào các slide về giải pháp. Việc kết hợp hai nguồn giúp nội dung vừa có tính địa phương hóa cao vừa có tầm nhìn toàn cầu.</p>
      </ReportSection>

      <ReportSection id="hinh-anh" title="2.3–2.4. Công cụ AI tạo hình ảnh">
        <h3>DALL-E 3</h3>
        <p>Tạo hình ảnh minh họa cho slide.</p>
        <Prompt>Digital illustration of Vietnamese youth planting trees along a coastal area in the Mekong Delta, with rising sea levels visible in the background. Hopeful, vibrant colors, photorealistic style, 16:9 ratio, suitable for presentation slide.</Prompt>
        <p><strong>Kết quả:</strong> DALL-E 3 tạo ra hình ảnh chi tiết và chân thực, bối cảnh đồng bằng sông Cửu Long được thể hiện khá chính xác. Màu sắc vivid phù hợp với slide thuyết trình. Tuy nhiên, khuôn mặt nhân vật đôi khi thiếu tự nhiên và phong cách Việt Nam chưa được thể hiện đặc trưng.</p>
        <p><strong>Chỉnh sửa thực hiện:</strong> Sử dụng Photoshop để điều chỉnh độ bão hòa màu, thêm text overlay và logo nhóm. Một số hình ảnh được crop lại để phù hợp với layout slide.</p>

        <h3>Midjourney</h3>
        <Prompt>/imagine Vietnamese college students participating in environmental cleanup, modern city background with green initiatives, optimistic atmosphere, illustration style, flat design, --ar 16:9 --v 6 --style raw</Prompt>
        <p><strong>Kết quả:</strong> Midjourney cho ra hình ảnh có tính thẩm mỹ cao hơn, với phong cách đồ họa nhất quán và màu sắc hài hòa hơn DALL-E 3. Tuy nhiên, độ chính xác về chi tiết địa phương (trang phục, bối cảnh đặc trưng Việt Nam) thấp hơn.</p>
        <DataTable headers={["Tiêu chí", "DALL-E 3", "Midjourney"]} rows={imageComparisonRows} />
      </ReportSection>

      <ReportSection id="thiet-ke" title="2.5–2.6. Công cụ AI hỗ trợ thiết kế">
        <h3>Canva AI (Magic Design)</h3>
        <p>Canva AI được sử dụng để tạo toàn bộ layout cho 12 slide dựa trên nội dung đã được soạn thảo. Tính năng Magic Design của Canva cho phép nhập nội dung văn bản và tự động đề xuất các template phù hợp với chủ đề.</p>
        <ol>
          <li><strong>Bước 1:</strong> Nhập từ khóa chủ đề 'Biến đổi khí hậu – Thanh niên Việt Nam' vào Canva Magic Design.</li>
          <li><strong>Bước 2:</strong> Chọn bộ template phù hợp từ 8 gợi ý được AI đề xuất.</li>
          <li><strong>Bước 3:</strong> Sử dụng tính năng 'Magic Write' để tự động điền nội dung vào các placeholder.</li>
          <li><strong>Bước 4:</strong> Tích hợp hình ảnh từ DALL-E 3 và Midjourney vào các slide tương ứng.</li>
          <li><strong>Bước 5:</strong> Sử dụng 'Background Remover' AI để xử lý hình ảnh trước khi tích hợp.</li>
        </ol>
        <p><strong>Kết quả:</strong> Canva AI giúp tiết kiệm khoảng 3 giờ so với thiết kế thủ công. Tuy nhiên, một số template có màu sắc chưa phù hợp với tone nghiêm túc của chủ đề môi trường, cần điều chỉnh thủ công màu sắc và typography.</p>

        <h3>Adobe Firefly</h3>
        <p>Adobe Firefly được sử dụng bổ sung để tạo các yếu tố đồ họa đặc biệt như: background texture, icon minh họa và hiệu ứng cho slide bìa.</p>
        <Prompt>Abstract green nature background with subtle Vietnamese landscape elements, suitable for environmental presentation cover slide, soft gradient, professional look, high resolution.</Prompt>
        <p>Ưu điểm của Adobe Firefly so với các công cụ khác: tích hợp trực tiếp vào Adobe Creative Suite, đầu ra có độ phân giải cao phù hợp in ấn, và tuân thủ tốt hơn về quyền sở hữu trí tuệ do được huấn luyện trên dữ liệu có bản quyền của Adobe Stock.</p>
      </ReportSection>

      <ReportSection id="tong-ket" title="III. Tổng kết và phân tích vai trò của AI">
        <h3>3.1. Quy trình làm việc tích hợp AI</h3>
        <DataTable headers={["Giai đoạn", "Công cụ AI sử dụng", "Đóng góp của bản thân", "Thời gian tiết kiệm"]} rows={workflowRows} />

        <h3>3.2. Những phần AI làm tốt</h3>
        <ul>
          <li><strong>Tốc độ tạo nội dung nhanh:</strong> Trong vòng 30 phút, AI đã cung cấp đủ nội dung thô cho 12 slide, điều mà một người thực hiện thủ công cần ít nhất 4-5 giờ nghiên cứu và viết.</li>
          <li><strong>Đa dạng lựa chọn:</strong> Mỗi prompt đều cho ra nhiều phương án để lựa chọn, tăng tính sáng tạo và giảm thiểu tình trạng 'trang giấy trắng'.</li>
          <li><strong>Tính nhất quán về phong cách:</strong> Khi được định hướng rõ ràng, AI duy trì giọng văn và phong cách thiết kế nhất quán xuyên suốt bài thuyết trình.</li>
          <li><strong>Xử lý hình ảnh phức tạp:</strong> Adobe Firefly và Canva AI xử lý nhanh các tác vụ thiết kế như background removal, color grading mà trước đây đòi hỏi kỹ năng chuyên sâu.</li>
          <li><strong>Hỗ trợ song ngữ hiệu quả:</strong> Claude và ChatGPT đều có thể tạo nội dung song ngữ Việt-Anh để phù hợp với yêu cầu thuyết trình quốc tế.</li>
        </ul>

        <h3>3.3. Những hạn chế và thách thức</h3>
        <ul>
          <li><strong>Độ chính xác số liệu:</strong> Khoảng 25-30% số liệu thống kê cần được xác minh lại qua nguồn chính thức. AI có thể bịa đặt ('hallucinate') số liệu nghe có vẻ hợp lý nhưng không chính xác.</li>
          <li><strong>Thiếu tính địa phương hóa sâu:</strong> Hình ảnh tạo ra bởi DALL-E 3 và Midjourney chưa thể hiện đúng đặc trưng văn hóa, trang phục và cảnh quan Việt Nam một cách chính xác.</li>
          <li><strong>Phụ thuộc vào chất lượng prompt:</strong> Kết quả đầu ra hoàn toàn phụ thuộc vào khả năng viết prompt của người dùng. Prompt mơ hồ dẫn đến kết quả không sử dụng được.</li>
          <li><strong>Thiếu tính sáng tạo đột phá:</strong> AI có xu hướng tạo ra nội dung 'an toàn', thiếu những góc nhìn độc đáo hoặc cách tiếp cận sáng tạo thực sự mới mẻ.</li>
          <li><strong>Vấn đề bản quyền hình ảnh:</strong> Không thể xác định rõ ràng nguồn gốc dữ liệu huấn luyện của các mô hình hình ảnh, tạo ra rủi ro pháp lý tiềm ẩn.</li>
        </ul>

        <h3>3.4. AI thay đổi quy trình sáng tạo như thế nào?</h3>
        <p>Trước đây, quy trình sáng tạo nội dung thuyết trình thường tuân theo mô hình tuyến tính: nghiên cứu → lên dàn ý → viết nội dung → tìm hình ảnh → thiết kế. Với sự tham gia của AI, quy trình này đã thay đổi đáng kể:</p>
        <p>Thứ nhất, AI đã chuyển đổi vai trò của người sáng tạo từ 'người tạo nội dung' sang 'người biên tập và điều phối'. Thay vì bắt đầu từ trang trắng, người sáng tạo nay làm việc với tư cách là người lọc, đánh giá và cải thiện đầu ra của AI.</p>
        <p>Thứ hai, ranh giới giữa các giai đoạn sáng tạo trở nên mờ nhạt hơn. Việc có thể thử nghiệm nhiều hướng tiếp cận khác nhau trong thời gian ngắn cho phép quá trình lặp lại (iteration) diễn ra nhanh hơn nhiều.</p>
        <p>Thứ ba, kỹ năng 'prompt engineering' – khả năng giao tiếp hiệu quả với AI – trở thành một năng lực sáng tạo mới, quan trọng không kém khả năng viết lách hay thiết kế truyền thống.</p>
      </ReportSection>

      <ReportSection id="dao-duc" title="3.5. Các vấn đề đạo đức cần cân nhắc">
        <h3>a. Minh bạch về việc sử dụng AI</h3>
        <p>Khi sử dụng AI để hỗ trợ sáng tạo nội dung trong môi trường học thuật, cần thiết phải công khai và minh bạch về mức độ và cách thức AI được sử dụng. Trong bài thực hành này, tất cả các phần do AI tạo ra đều được ghi chép và phân tích rõ ràng. Tuy nhiên, trong các bối cảnh khác như nộp bài tập cá nhân mà không khai báo việc sử dụng AI có thể bị coi là gian lận học thuật.</p>
        <h3>b. Quyền sở hữu trí tuệ</h3>
        <p>Câu hỏi về quyền tác giả của nội dung do AI tạo ra vẫn còn là vấn đề pháp lý chưa được giải quyết hoàn toàn tại Việt Nam và nhiều quốc gia khác. Người sử dụng AI cần thận trọng khi xuất bản hoặc thương mại hóa nội dung có nguồn gốc từ AI, đặc biệt là hình ảnh.</p>
        <h3>c. Phụ thuộc và mất kỹ năng</h3>
        <p>Việc sử dụng AI quá mức trong giai đoạn học tập có thể làm chậm quá trình phát triển các kỹ năng cơ bản như viết lách, tư duy phân tích và thiết kế. Điều quan trọng là sử dụng AI như một công cụ hỗ trợ học tập, không phải thay thế quá trình học.</p>
        <h3>d. Thông tin sai lệch</h3>
        <p>AI có thể tạo ra thông tin sai lệch ('hallucination') với vẻ ngoài rất đáng tin cậy. Người sử dụng có trách nhiệm kiểm chứng độc lập mọi thông tin quan trọng trước khi phổ biến, đặc biệt trong các chủ đề nhạy cảm như y tế, pháp luật hoặc số liệu thống kê.</p>
      </ReportSection>

      <ReportSection id="ket-luan" title="IV. Kết luận">
        <p>Qua bài thực hành này, có thể kết luận rằng các công cụ AI tạo sinh đã và đang thay đổi căn bản quy trình sáng tạo nội dung số. Khi được sử dụng đúng cách, AI không thay thế sự sáng tạo của con người mà làm khuếch đại nó – giúp người sáng tạo thực hiện những ý tưởng phức tạp hơn, nhanh hơn và với chất lượng cao hơn.</p>
        <p>Tuy nhiên, giá trị thực sự của AI chỉ được khai thác khi người sử dụng có đủ kiến thức chuyên môn để đánh giá, chỉnh sửa và cá nhân hóa đầu ra. Sản phẩm cuối cùng – bài thuyết trình về biến đổi khí hậu – là kết quả của sự cộng tác giữa khả năng xử lý dữ liệu và tạo nội dung tốc độ cao của AI với tư duy phê phán, hiểu biết văn hóa và sáng tạo cá nhân của người học.</p>
        <p>Kỹ năng sử dụng AI tạo sinh hiệu quả – bao gồm thiết kế prompt, đánh giá đầu ra và tích hợp sáng tạo – đang nhanh chóng trở thành một năng lực thiết yếu trong thế kỷ 21, cần được đưa vào chương trình đào tạo của mọi ngành học.</p>
      </ReportSection>

      <ReportSection id="phu-luc" title="Phụ lục — Tổng hợp các prompt đã sử dụng">
        <DataTable headers={["STT", "Công cụ", "Mục đích", "Prompt (tóm tắt)", "Kết quả đánh giá"]} rows={appendixRows} />
      </ReportSection>
    </AssignmentShell>
  );
}
