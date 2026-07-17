import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpenText,
  ChalkboardTeacher,
  CheckCircle,
  FileText,
  GraduationCap,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { assignments, asset, student } from "@/data/site";
import { Reveal } from "@/components/Reveal";

const accentClass = {
  navy: "bg-[var(--ink)] text-[var(--white)]",
  green: "bg-[var(--chalk)] text-[var(--white)]",
  red: "bg-[var(--teacher-red)] text-[var(--white)]",
  gold: "bg-[var(--highlighter)] text-[var(--ink)]",
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden border-b-4 border-[var(--ink)] bg-[var(--white)]">
        <div className="container-page grid min-h-[calc(100vh-64px)] gap-12 py-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="note-label text-[var(--teacher-red)]">Portfolio học tập</span>
              <span className="h-px flex-1 bg-[rgba(20,40,60,.25)]" />
            </div>
            <h1 className="display-font max-w-5xl text-[clamp(3.4rem,9vw,8.2rem)] leading-[.84]">
              Ngôn ngữ, <span className="teacher-underline">công nghệ</span> và cách học có hệ thống.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--ink-soft)] sm:text-xl">
              Mình là <strong>{student.name}</strong>, sinh viên ngành <strong>{student.major}</strong>. Portfolio này hệ thống hóa các bài thực hành của học phần {student.course}.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#bai-tap" className="inline-flex min-h-12 items-center gap-2 border-2 border-[var(--ink)] bg-[var(--ink)] px-5 py-3 font-bold text-[var(--white)] shadow-[5px_5px_0_var(--highlighter)] transition-transform hover:-translate-y-1">
                Xem các bài tập <ArrowDown size={20} />
              </a>
              <a href={`mailto:${student.email}`} className="inline-flex min-h-12 items-center gap-2 border-2 border-[var(--ink)] bg-[var(--white)] px-5 py-3 font-bold transition-transform hover:-translate-y-1">
                Liên hệ <ArrowUpRight size={20} />
              </a>
            </div>
          </Reveal>

          <Reveal className="relative min-h-[510px] sm:min-h-[620px]">
            <div className="absolute left-[4%] top-[4%] w-[82%] rotate-[-3deg] border border-[var(--ink)] bg-[var(--white)] p-2 shadow-[14px_14px_0_rgba(20,40,60,.16)]">
              <Image src={asset("/assets/bai-1/03-tao-thu-muc.png")} width={1299} height={812} alt="Ảnh minh chứng tạo thư mục trong Bài 1" priority className="w-full" />
              <p className="mono-font px-2 py-2 text-xs uppercase tracking-[0.08em]">Minh chứng thao tác số</p>
            </div>
            <div className="absolute bottom-[9%] right-[1%] w-[76%] rotate-[4deg] border border-[var(--ink)] bg-[var(--white)] p-2 shadow-[-10px_12px_0_rgba(162,61,53,.18)]">
              <Image src={asset("/assets/bai-3/thu-nghiem-01.png")} width={1299} height={671} alt="Ảnh thử nghiệm prompt trong Bài 3" className="w-full" />
              <p className="mono-font px-2 py-2 text-xs uppercase tracking-[0.08em]">Thử nghiệm và so sánh prompt</p>
            </div>
            <div className="absolute right-[2%] top-[2%] rotate-[6deg] border-2 border-[var(--teacher-red)] bg-[var(--paper)] px-4 py-2 font-semibold text-[var(--teacher-red)]">Reviewed</div>
            <div className="absolute bottom-[2%] left-[7%] -rotate-2 bg-[var(--highlighter)] px-4 py-2 font-semibold shadow-[4px_4px_0_var(--ink)]">Bài tập học phần · hồ sơ số</div>
          </Reveal>
        </div>
      </section>

      <section id="gioi-thieu" className="container-page py-24 lg:py-32">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="mono-font mb-5 text-xs uppercase tracking-[0.14em] text-[var(--teacher-red)]">Một chút về mình</p>
              <h2 className="display-font text-5xl leading-[.98] sm:text-6xl">Học để hiểu, trình bày để ghi nhớ.</h2>
            </div>
            <div className="paper-panel p-8 pl-14 sm:p-12 sm:pl-20">
              <div className="relative z-10 grid gap-7 sm:grid-cols-2">
                <div>
                  <GraduationCap size={30} className="mb-3 text-[var(--chalk)]" />
                  <h3 className="mb-2 font-bold">Thông tin học tập</h3>
                  <p>{student.name} · MSSV {student.studentId}</p>
                  <p>{student.major}</p>
                  <p>{student.faculty}</p>
                  <p>{student.school}</p>
                </div>
                <div>
                  <ChalkboardTeacher size={30} className="mb-3 text-[var(--teacher-red)]" />
                  <h3 className="mb-2 font-bold">Định hướng portfolio</h3>
                  <p>Hệ thống hóa sản phẩm học tập, giữ lại minh chứng và trình bày quá trình thực hiện theo từng kỹ năng.</p>
                </div>
                <div>
                  <BookOpenText size={30} className="mb-3 text-[var(--chalk)]" />
                  <h3 className="mb-2 font-bold">Mục tiêu học tập</h3>
                  <p>Rèn kỹ năng số, tìm kiếm học thuật, viết prompt, cộng tác trực tuyến và sử dụng AI có trách nhiệm.</p>
                </div>
                <div>
                  <FileText size={30} className="mb-3 text-[var(--teacher-red)]" />
                  <h3 className="mb-2 font-bold">Nguyên tắc trình bày</h3>
                  <p>Nội dung được chuyển thành trang web; bảng được dựng lại, hình minh chứng đặt ngay sau phần nội dung liên quan.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="bai-tap" className="border-y-4 border-[var(--ink)] bg-[var(--white)] py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <div className="mb-14 max-w-4xl">
              <h2 className="display-font text-5xl leading-[.95] sm:text-7xl">Bài tập học phần, những lát cắt của năng lực số.</h2>
              <p className="mt-6 max-w-2xl text-lg text-[var(--ink-soft)]">Mỗi bài là một trang riêng, giữ đúng trình tự nội dung, bảng biểu và minh chứng trong tài liệu gốc.</p>
            </div>
          </Reveal>

          <div className="border-t-2 border-[var(--ink)]">
            {assignments.map((assignment, index) => (
              <Reveal key={assignment.slug}>
                <Link href={`/${assignment.slug}`} className="group grid min-h-[190px] gap-5 border-b-2 border-[var(--ink)] py-7 transition-colors hover:bg-[var(--paper)] md:grid-cols-[100px_minmax(0,1fr)_230px_56px] md:items-center">
                  <span className="display-font text-5xl text-[var(--teacher-red)]">{assignment.number}</span>
                  <div>
                    <span className={`note-label mb-4 ${accentClass[assignment.accent]}`}>{assignment.focus}</span>
                    <h3 className="display-font max-w-3xl text-3xl leading-[1.05] sm:text-4xl">{assignment.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-[var(--ink-soft)]">{assignment.summary}</p>
                  <span className="grid h-12 w-12 place-items-center border-2 border-[var(--ink)] bg-[var(--white)] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true">
                    <ArrowUpRight size={24} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="tong-ket" className="container-page py-24 lg:py-32">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="mono-font mb-5 text-xs uppercase tracking-[0.14em] text-[var(--teacher-red)]">Tổng kết</p>
              <h2 className="display-font max-w-xl text-5xl leading-[.97] sm:text-6xl">Điểm chung của các bài là tư duy có quy trình.</h2>
            </div>
            <div className="space-y-4">
              {[
                ["01", "Từ thao tác đến hệ thống", "Bài 1 bắt đầu bằng kỹ năng tệp tin; Bài 4 mở rộng sang tổ chức công việc nhóm và tài nguyên số."],
                ["02", "Từ tìm kiếm đến đánh giá", "Bài 2 nhấn mạnh nguồn đáng tin cậy; Bài 5 và Bài 6 tiếp tục yêu cầu kiểm chứng đầu ra của AI."],
                ["03", "Từ câu lệnh đến trách nhiệm", "Bài 3 cho thấy cấu trúc prompt ảnh hưởng đến chất lượng đầu ra; Bài 6 đặt thêm giới hạn đạo đức và minh bạch."],
              ].map(([number, title, body]) => (
                <div key={number} className="grid gap-4 border border-[var(--ink)] bg-[var(--white)] p-6 sm:grid-cols-[64px_1fr]">
                  <span className="display-font text-4xl text-[var(--teacher-red)]">{number}</span>
                  <div><h3 className="mb-2 text-lg font-bold">{title}</h3><p className="text-[var(--ink-soft)]">{body}</p></div>
                </div>
              ))}
              <div className="flex items-start gap-4 bg-[var(--chalk)] p-6 text-[var(--white)]">
                <CheckCircle size={30} weight="fill" className="mt-1 shrink-0 text-[var(--highlighter)]" />
                <p className="text-lg">Portfolio hoàn thiện không chỉ lưu sản phẩm cuối cùng mà còn giữ lại cách thực hiện, tiêu chí đánh giá và bằng chứng của từng bước.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-[rgba(20,40,60,.25)] bg-[var(--blue-wash)]">
        <div className="container-page flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Sparkle size={26} className="text-[var(--teacher-red)]" />
            <p className="font-semibold">Bắt đầu từ Bài 1 hoặc chọn trực tiếp một chủ đề trong danh mục.</p>
          </div>
          <Link href="/bai-1" className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-[var(--ink)] bg-[var(--white)] px-5 py-3 font-bold shadow-[4px_4px_0_var(--ink)]">
            Mở Bài 1 <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
