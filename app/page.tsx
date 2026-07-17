import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpenText,
  Check,
  FileText,
  GraduationCap,
  Quotes,
} from "@phosphor-icons/react/dist/ssr";
import { assignments, student } from "@/data/site";
import { Reveal } from "@/components/Reveal";

const focusTone = {
  navy: "text-[var(--ink)]",
  green: "text-[var(--forest)]",
  red: "text-[var(--burgundy)]",
  gold: "text-[#8a651d]",
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden border-b border-[var(--line-strong)] bg-[var(--paper-soft)]">
        <div className="pointer-events-none absolute -right-10 top-12 hidden select-none font-serif text-[24rem] leading-none text-[rgba(49,88,74,.045)] lg:block" aria-hidden="true">
          Aa
        </div>

        <div className="container-page grid min-h-[calc(100vh-72px)] gap-12 py-16 lg:grid-cols-[minmax(0,1.32fr)_minmax(320px,.68fr)] lg:items-center lg:py-20">
          <Reveal>
            <p className="eyebrow mb-8">Portfolio học tập · 2026</p>
            <h1 className="display-font max-w-[900px] text-[clamp(3.3rem,6.8vw,6.9rem)] leading-[.96]">
              Học ngôn ngữ.<br />Dạy bằng <span className="teacher-underline">phương pháp.</span>
            </h1>
            <p className="mt-8 max-w-[680px] text-lg leading-8 text-[var(--ink-soft)] sm:text-xl">
              Mình là <strong className="text-[var(--ink)]">{student.name}</strong>, sinh viên ngành <strong className="text-[var(--ink)]">{student.major}</strong>. Đây là hồ sơ ghi lại sáu bài thực hành của học phần {student.course}, từ kỹ năng số nền tảng đến sử dụng AI có trách nhiệm.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#bai-tap" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 font-semibold text-[var(--white)] transition-transform hover:-translate-y-0.5">
                Xem bài tập <ArrowDown size={19} />
              </a>
              <a href={`mailto:${student.email}`} className="inline-flex min-h-12 items-center gap-2 border-b border-[var(--ink)] px-1 py-2 font-semibold">
                Liên hệ <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="mt-14 grid max-w-[780px] grid-cols-2 gap-x-8 gap-y-5 border-t border-[var(--line)] pt-6 sm:grid-cols-4">
              {[
                ["Major", student.major],
                ["Faculty", "Ngôn ngữ & VH Anh"],
                ["Coursework", "6 bài thực hành"],
                ["Student ID", student.studentId],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="mono-font text-[0.62rem] uppercase tracking-[0.12em] text-[var(--burgundy)]">{label}</p>
                  <p className="mt-1 text-sm font-semibold leading-5">{value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="border border-[var(--line-strong)] bg-[var(--white)] p-7 shadow-[var(--shadow-soft)] sm:p-9">
              <div className="flex items-start justify-between gap-6 border-b border-[var(--line)] pb-6">
                <div>
                  <p className="mono-font text-[0.64rem] uppercase tracking-[0.13em] text-[var(--burgundy)]">Course record</p>
                  <h2 className="display-font mt-2 text-3xl leading-tight">Learn · Teach · Reflect</h2>
                </div>
                <span className="display-font text-4xl text-[var(--forest)]">/6</span>
              </div>

              <ol className="mt-2">
                {assignments.map((assignment) => (
                  <li key={assignment.slug} className="border-b border-[var(--line)] last:border-b-0">
                    <Link href={`/${assignment.slug}`} className="group grid grid-cols-[38px_1fr_auto] items-center gap-3 py-4">
                      <span className="mono-font text-[0.67rem] text-[var(--burgundy)]">{assignment.number}</span>
                      <span className="text-sm font-semibold leading-5 transition-transform group-hover:translate-x-1">{assignment.title}</span>
                      <ArrowUpRight size={16} className="text-[var(--ink-soft)]" />
                    </Link>
                  </li>
                ))}
              </ol>

              <div className="mt-5 flex items-center justify-between gap-4 bg-[var(--sky)] px-4 py-3 text-sm">
                <span className="mono-font text-[0.66rem] uppercase tracking-[0.1em]">/lɜːn/ → /tiːtʃ/ → /rɪˈflɛkt/</span>
                <BookOpenText size={20} className="shrink-0 text-[var(--forest)]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="gioi-thieu" className="container-page py-24 lg:py-32">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
            <div>
              <p className="eyebrow mb-7">Giới thiệu</p>
              <h2 className="display-font max-w-lg text-5xl leading-[1.03] sm:text-6xl">Một hồ sơ học tập có bằng chứng, không chỉ có kết quả.</h2>
              <div className="mt-9 flex gap-4 border-l-2 border-[var(--burgundy)] pl-5 text-[var(--ink-soft)]">
                <Quotes size={25} className="mt-1 shrink-0 text-[var(--burgundy)]" />
                <p className="max-w-md text-lg leading-8">Mỗi bài được trình bày theo đúng trình tự: mục tiêu, quá trình thực hiện, bảng tổng hợp và minh chứng liên quan.</p>
              </div>
            </div>

            <div className="grid gap-0 border-y border-[var(--line-strong)] sm:grid-cols-2">
              {[
                [GraduationCap, "Thông tin học tập", `${student.name} · MSSV ${student.studentId}`, `${student.major} · ${student.faculty}`],
                [BookOpenText, "Mục tiêu", "Rèn kỹ năng số, tìm kiếm học thuật và viết prompt có cấu trúc.", "Kết nối công nghệ với việc học và dạy ngôn ngữ."],
                [FileText, "Cách trình bày", "Nội dung tài liệu được chuyển thành trang web theo từng bài.", "Bảng được dựng lại; ảnh đặt cạnh nội dung tương ứng."],
                [Check, "Nguyên tắc", "Không thêm dữ kiện ngoài tài liệu gốc.", "Ưu tiên rõ ràng, dễ đọc và dễ kiểm chứng."],
              ].map(([Icon, title, line1, line2], index) => (
                <div key={String(title)} className={`min-h-[210px] p-7 ${index % 2 === 0 ? "sm:border-r" : ""} ${index < 2 ? "border-b" : ""} border-[var(--line)]`}>
                  <Icon size={25} className="mb-6 text-[var(--forest)]" />
                  <h3 className="display-font mb-4 text-2xl">{String(title)}</h3>
                  <p className="text-sm leading-6 text-[var(--ink-soft)]">{String(line1)}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{String(line2)}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="bai-tap" className="border-y border-[var(--line-strong)] bg-[var(--white)] py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <div className="grid gap-8 border-b border-[var(--line-strong)] pb-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <p className="eyebrow">Bài tập</p>
              <div>
                <h2 className="display-font max-w-4xl text-5xl leading-[1.02] sm:text-6xl">Sáu bài, sáu năng lực số được ghi lại thành một hành trình.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">Mỗi mục mở thành một trang riêng, giữ nguyên nội dung, bảng biểu và hình minh chứng trong tài liệu.</p>
              </div>
            </div>
          </Reveal>

          <div>
            {assignments.map((assignment) => (
              <Reveal key={assignment.slug}>
                <Link href={`/${assignment.slug}`} className="group grid gap-5 border-b border-[var(--line)] py-7 transition-colors hover:bg-[var(--paper-soft)] md:grid-cols-[64px_minmax(0,1fr)_230px_36px] md:items-center md:px-3">
                  <span className="display-font text-3xl text-[var(--burgundy)]">{assignment.number}</span>
                  <div>
                    <p className={`mono-font mb-2 text-[0.66rem] uppercase tracking-[0.11em] ${focusTone[assignment.accent]}`}>{assignment.focus}</p>
                    <h3 className="display-font max-w-3xl text-2xl leading-[1.12] sm:text-3xl">{assignment.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-[var(--ink-soft)]">{assignment.summary}</p>
                  <ArrowUpRight size={21} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="tong-ket" className="container-page py-24 lg:py-32">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-20">
            <div>
              <p className="eyebrow mb-7">Tổng kết</p>
              <h2 className="display-font max-w-xl text-5xl leading-[1.03] sm:text-6xl">Điểm chung là tư duy có quy trình.</h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--ink-soft)]">Từ quản lý tệp tin đến đánh giá đầu ra AI, mỗi bài đều yêu cầu ghi lại cách làm, kiểm chứng kết quả và tự phản ánh.</p>
            </div>

            <ol className="border-t border-[var(--line-strong)]">
              {[
                ["01", "Từ thao tác đến hệ thống", "Bài 1 đặt nền tảng quản lý tệp; Bài 4 mở rộng sang nhiệm vụ, tài liệu và giao tiếp nhóm."],
                ["02", "Từ tìm kiếm đến đánh giá", "Bài 2 tập trung vào độ tin cậy của nguồn; Bài 5 và 6 tiếp tục yêu cầu kiểm chứng đầu ra AI."],
                ["03", "Từ câu lệnh đến trách nhiệm", "Bài 3 cho thấy cấu trúc prompt quyết định chất lượng; Bài 6 bổ sung ranh giới đạo đức và minh bạch."],
              ].map(([number, title, body]) => (
                <li key={number} className="grid gap-4 border-b border-[var(--line)] py-7 sm:grid-cols-[52px_1fr]">
                  <span className="mono-font pt-1 text-xs text-[var(--burgundy)]">{number}</span>
                  <div>
                    <h3 className="display-font text-2xl">{title}</h3>
                    <p className="mt-2 max-w-2xl leading-7 text-[var(--ink-soft)]">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-[var(--line-strong)] bg-[var(--sky)]">
        <div className="container-page flex flex-col gap-6 py-11 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mono-font text-[0.65rem] uppercase tracking-[0.11em] text-[var(--forest)]">Start here</p>
            <p className="mt-1 font-semibold">Mở Bài 1 hoặc chọn trực tiếp một chủ đề trong danh mục.</p>
          </div>
          <Link href="/bai-1" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 font-semibold text-[var(--white)]">
            Mở Bài 1 <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
