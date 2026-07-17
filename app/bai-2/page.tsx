import { AssignmentShell } from "@/components/AssignmentShell";
import { DataTable, ReportSection } from "@/components/ContentBlocks";

const sourceRows: React.ReactNode[][] = [
  ["1", "Krashen (1982)", "Sách chuyên khảo", "S. Krashen", "Pergamon Press", "Lý thuyết", "~50,000+", "1982", "5/5"],
  ["2", "Corder (1967)", "Bài báo KH", "S.P. Corder", "IRAL Journal", "Phân tích lỗi", "~8,000+", "1967", "5/5"],
  ["3", "Selinker (1972)", "Bài báo KH", "L. Selinker", "IRAL Journal", "Nghiên cứu lý thuyết", "~10,000+", "1972", "5/5"],
  ["4", "Ellis (2008)", "Sách chuyên khảo", "R. Ellis", "Oxford Univ. Press", "Tổng hợp / Review", "~12,000+", "2008", "5/5"],
  ["5", "Dörnyei (2005)", "Sách chuyên khảo", "Z. Dörnyei", "Lawrence Erlbaum", "Khảo sát + Lý thuyết", "~9,000+", "2005", "5/5"],
  ["6", "Loewen & Plonsky (2016)", "Bài báo KH", "S. Loewen, L. Plonsky", "Routledge", "Thực nghiệm", "~2,500+", "2016", "4/5"],
  ["7", "Nassaji (2015)", "Bài báo KH", "H. Nassaji", "Lang. Teaching Research", "Thực nghiệm", "~1,200+", "2015", "4/5"],
  ["8", "Richards & Rodgers (2014)", "Sách chuyên khảo", "J. Richards, T. Rodgers", "Cambridge Univ. Press", "Tổng hợp / Mô tả", "~7,000+", "2014", "5/5"],
  ["9", "British Council (2023)", "Nguồn mở", "British Council", "British Council", "Báo cáo thực tiễn", "Không có", "2023", "3/5"],
  ["10", "TESOL International (2022)", "Tạp chí KH", "Nhiều tác giả", "TESOL International", "Đa dạng", "~500+", "2022", "4/5"],
];

const references = [
  "British Council (2023) The State of English: English for the Future. London: British Council. Available at: https://www.britishcouncil.org (Accessed: 20 March 2026).",
  "Corder, S.P. (1967) 'The significance of learners' errors', International Review of Applied Linguistics, 5(4), pp. 161–170.",
  "Dörnyei, Z. (2005) The Psychology of the Language Learner: Individual Differences in Second Language Acquisition. Mahwah, NJ: Lawrence Erlbaum Associates.",
  "Ellis, R. (2008) The Study of Second Language Acquisition. 2nd edn. Oxford: Oxford University Press.",
  "Krashen, S.D. (1982) Principles and Practice in Second Language Acquisition. Oxford: Pergamon Press.",
  "Loewen, S. and Plonsky, L. (2016) An A–Z of Applied Linguistics Research Methods. London: Palgrave Macmillan.",
  "Nassaji, H. (2015) 'The interactional feedback dimension in instructed second language learning', Language Teaching Research, 20(4), pp. 535–562.",
  "Richards, J.C. and Rodgers, T.S. (2014) Approaches and Methods in Language Teaching. 3rd edn. Cambridge: Cambridge University Press.",
  "Selinker, L. (1972) 'Interlanguage', International Review of Applied Linguistics, 10(3), pp. 209–231.",
  "TESOL International Association (2022) 'Current trends in English language teaching', TESOL Quarterly, 56(1), pp. 1–25.",
];

export default function Bai2Page() {
  return (
    <AssignmentShell
      number={2}
      title="Tìm kiếm và đánh giá thông tin học thuật"
      kicker="Nghiên cứu học thuật"
      summary="Báo cáo khảo sát chủ đề Tiếp thu ngôn ngữ thứ hai (Second Language Acquisition – SLA), đánh giá 10 tài liệu và trình bày danh mục tham khảo theo định dạng Harvard."
      toc={[
        { id: "gioi-thieu", label: "Giới thiệu chủ đề" },
        { id: "tim-kiem", label: "Quá trình tìm kiếm" },
        { id: "danh-gia", label: "Đánh giá độ tin cậy" },
        { id: "ket-luan", label: "Nhận xét và kết luận" },
        { id: "bang-nguon", label: "Bảng tổng hợp nguồn" },
        { id: "tham-khao", label: "Tài liệu tham khảo" },
      ]}
    >
      <ReportSection id="gioi-thieu" title="I. Giới thiệu chủ đề">
        <p>Chủ đề được lựa chọn cho bài thực hành này là Tiếp thu ngôn ngữ thứ hai (Second Language Acquisition – SLA) — một lĩnh vực cốt lõi trong ngành Ngôn ngữ Anh. SLA nghiên cứu quá trình con người học và tiếp nhận một ngôn ngữ không phải tiếng mẹ đẻ, bao gồm các yếu tố ảnh hưởng đến quá trình đó như động lực, môi trường, phương pháp giảng dạy và đặc điểm nhận thức của người học.</p>
        <p>Đây là chủ đề có nền tảng lý thuyết vững chắc với nhiều học giả lớn như Krashen, Selinker, Ellis và Dörnyei, đồng thời có tính ứng dụng cao trong thực tiễn dạy và học tiếng Anh. Việc nắm vững các nguồn tài liệu uy tín về SLA giúp sinh viên ngành Ngôn ngữ Anh xây dựng được nền tảng học thuật vững chắc cho các bài luận, luận văn và nghiên cứu khoa học sau này.</p>
      </ReportSection>

      <ReportSection id="tim-kiem" title="II. Quá trình tìm kiếm thông tin">
        <h3>2.1. Nguồn cơ sở dữ liệu học thuật</h3>
        <p>Google Scholar là công cụ tìm kiếm học thuật đầu tiên được sử dụng với các từ khóa: "second language acquisition", "SLA theories", "input hypothesis", "interlanguage". Kết quả trả về hàng nghìn tài liệu, trong đó ưu tiên lọc các bài có số lượng trích dẫn cao (trên 1.000 lần) và được xuất bản trên các tạp chí uy tín. Ngoài ra, cơ sở dữ liệu ERIC (Education Resources Information Center) cũng được tra cứu để tìm các bài báo chuyên sâu về phương pháp giảng dạy ngôn ngữ và nghiên cứu lớp học.</p>
        <h3>2.2. Tạp chí khoa học chuyên ngành</h3>
        <p>Các tạp chí khoa học được tham khảo bao gồm: International Review of Applied Linguistics (IRAL) — nơi đăng những bài báo kinh điển của Corder (1967) và Selinker (1972); Language Teaching Research — tạp chí chuyên về nghiên cứu thực nghiệm trong môi trường dạy ngôn ngữ; và TESOL Quarterly — tạp chí hàng đầu của Hiệp hội TESOL quốc tế. Đây đều là các tạp chí có phản biện đồng nghiệp (peer-reviewed), đảm bảo chất lượng học thuật cao.</p>
        <h3>2.3. Sách chuyên khảo</h3>
        <p>Các sách chuyên khảo được tìm kiếm qua thư viện trường và Google Books. Ưu tiên chọn các sách của nhà xuất bản đại học danh tiếng như Oxford University Press, Cambridge University Press và Lawrence Erlbaum Associates. Các tác phẩm kinh điển như "Principles and Practice in Second Language Acquisition" của Krashen (1982) và "Understanding Second Language Acquisition" của Ellis (2008) là những tài liệu không thể thiếu trong lĩnh vực này.</p>
        <h3>2.4. Nguồn mở trên internet</h3>
        <p>Bên cạnh các nguồn học thuật, một số tài liệu từ các tổ chức uy tín trên internet cũng được thu thập, bao gồm báo cáo của British Council về xu hướng dạy tiếng Anh toàn cầu và tài liệu hướng dẫn của TESOL International Association. Những nguồn này tuy không có phản biện đồng nghiệp nhưng có giá trị thực tiễn cao và được xuất bản bởi tổ chức có uy tín trong ngành.</p>
      </ReportSection>

      <ReportSection id="danh-gia" title="III. Đánh giá độ tin cậy của các nguồn">
        <p>Mỗi tài liệu được đánh giá dựa trên năm tiêu chí: (1) tác giả — xem xét trình độ học thuật, cơ quan công tác và danh tiếng trong lĩnh vực; (2) cơ quan xuất bản — ưu tiên nhà xuất bản đại học và tạp chí có phản biện đồng nghiệp; (3) phương pháp nghiên cứu — đánh giá mức độ khoa học, có hệ thống và có thể kiểm chứng; (4) số lượng trích dẫn — phản ánh mức độ ảnh hưởng và được thừa nhận bởi cộng đồng học thuật; (5) tính cập nhật — xem xét năm xuất bản có phù hợp với yêu cầu của chủ đề nghiên cứu hay không.</p>
        <p>Kết quả đánh giá cho thấy phần lớn tài liệu thu thập được đều có độ tin cậy cao, đặc biệt là các công trình kinh điển của Krashen, Selinker, Ellis và Richards — những tác giả được trích dẫn hàng chục nghìn lần trong văn liệu học thuật toàn cầu. Nguồn có độ tin cậy thấp hơn là các tài liệu từ tổ chức phi học thuật (British Council) do thiếu quy trình phản biện chặt chẽ, tuy nhiên vẫn có giá trị tham khảo thực tiễn nhất định.</p>
      </ReportSection>

      <ReportSection id="ket-luan" title="IV. Nhận xét và kết luận">
        <p>Qua quá trình tìm kiếm và đánh giá, có thể rút ra một số nhận xét quan trọng. Thứ nhất, lĩnh vực SLA có nền tảng tài liệu học thuật rất phong phú và đa dạng, từ các lý thuyết kinh điển hình thành từ thập niên 1960–1980 cho đến các nghiên cứu thực nghiệm mang tính ứng dụng trong thập niên gần đây. Thứ hai, việc kết hợp nhiều loại nguồn khác nhau — bài báo khoa học, sách chuyên khảo và tài liệu từ tổ chức uy tín — giúp có được cái nhìn toàn diện hơn về chủ đề.</p>
        <p>Thứ ba, kỹ năng đánh giá nguồn thông tin là một trong những năng lực học thuật quan trọng nhất mà sinh viên ngành Ngôn ngữ Anh cần rèn luyện. Không phải mọi thông tin có thể tìm thấy trên internet đều đáng tin cậy; việc đặt câu hỏi về tác giả, nhà xuất bản và phương pháp nghiên cứu là bước không thể bỏ qua trước khi sử dụng bất kỳ tài liệu nào trong bài viết học thuật.</p>
      </ReportSection>

      <ReportSection id="bang-nguon" title="V. Bảng tổng hợp các nguồn thông tin">
        <p>Bảng dưới đây tổng hợp 10 tài liệu tham khảo đã thu thập, kèm đánh giá theo 5 tiêu chí và xếp hạng độ tin cậy theo thang điểm 5.</p>
        <DataTable
          headers={["STT", "Tác giả & Năm", "Loại nguồn", "Tác giả", "Cơ quan XB", "Phương pháp NC", "Trích dẫn", "Năm XB", "Xếp hạng"]}
          rows={sourceRows}
          caption="Xếp hạng theo thang 5 điểm (5/5 = rất đáng tin cậy; 3/5 = đáng tin cậy có điều kiện)."
        />
      </ReportSection>

      <ReportSection id="tham-khao" title="Danh mục tài liệu tham khảo (Harvard)">
        <ol className="space-y-3">
          {references.map((reference) => <li key={reference}>{reference}</li>)}
        </ol>
      </ReportSection>
    </AssignmentShell>
  );
}
