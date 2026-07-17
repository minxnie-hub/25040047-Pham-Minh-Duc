import Link from "next/link";
import { ArrowLeft, ArrowRight, DownloadSimple, House, ListBullets } from "@phosphor-icons/react/dist/ssr";
import { assignments, asset } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export type TocItem = { id: string; label: string };

type AssignmentShellProps = {
  number: number;
  title: string;
  kicker: string;
  summary: string;
  toc: TocItem[];
  children: React.ReactNode;
};

export function AssignmentShell({ number, title, kicker, summary, toc, children }: AssignmentShellProps) {
  const currentIndex = number - 1;
  const previous = assignments[currentIndex - 1];
  const next = assignments[currentIndex + 1];

  return (
    <main id="main-content">
      <section className="border-b border-[rgba(20,40,60,.2)] bg-[var(--white)]">
        <div className="container-page py-10 sm:py-14 lg:py-18">
          <div className="mb-7 flex flex-wrap items-center gap-2 text-sm text-[var(--ink-soft)]">
            <Link href="/" className="inline-flex min-h-11 items-center gap-2 px-1 underline-offset-4 hover:underline"><House size={17} /> Trang chủ</Link>
            <span aria-hidden="true">/</span>
            <span>Bài {number}</span>
          </div>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_250px] lg:items-end">
            <Reveal>
              <p className="mono-font mb-5 text-xs uppercase tracking-[0.14em] text-[var(--teacher-red)]">{kicker}</p>
              <h1 className="display-font max-w-5xl text-[clamp(2.7rem,7vw,6.8rem)] leading-[.92]">{title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--ink-soft)]">{summary}</p>
            </Reveal>
            <a href={asset(`/downloads/bai-${number}.pdf`)} download className="no-print inline-flex min-h-12 items-center justify-center gap-2 border-2 border-[var(--ink)] bg-[var(--highlighter)] px-4 py-3 font-bold shadow-[5px_5px_0_var(--ink)] transition-transform hover:-translate-y-1">
              <DownloadSimple size={20} /> Tải PDF gốc
            </a>
          </div>
        </div>
      </section>

      <div className="container-page grid gap-10 py-10 lg:grid-cols-[230px_minmax(0,1fr)] lg:py-16">
        <aside className="no-print hidden lg:block">
          <div className="sticky top-24 border-l-2 border-[var(--teacher-red)] pl-5">
            <p className="mono-font mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.11em]"><ListBullets size={16} /> Mục lục</p>
            <ol className="space-y-2 text-sm">
              {toc.map((item, index) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="flex min-h-10 gap-3 py-2 text-[var(--ink-soft)] hover:text-[var(--ink)]">
                    <span className="mono-font text-[var(--teacher-red)]">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <article className="min-w-0 content-prose">{children}</article>
      </div>

      <nav className="no-print container-page grid gap-3 border-t border-[rgba(20,40,60,.25)] py-10 sm:grid-cols-2" aria-label="Chuyển bài tập">
        {previous ? (
          <Link href={`/${previous.slug}`} className="group min-h-24 border border-[var(--ink)] bg-[var(--white)] p-4 transition-transform hover:-translate-y-1">
            <span className="mb-2 flex items-center gap-2 text-sm text-[var(--ink-soft)]"><ArrowLeft size={18} /> Bài trước</span>
            <strong className="block leading-snug">{previous.title}</strong>
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/${next.slug}`} className="group min-h-24 border border-[var(--ink)] bg-[var(--white)] p-4 text-right transition-transform hover:-translate-y-1">
            <span className="mb-2 flex items-center justify-end gap-2 text-sm text-[var(--ink-soft)]">Bài tiếp theo <ArrowRight size={18} /></span>
            <strong className="block leading-snug">{next.title}</strong>
          </Link>
        ) : <span />}
      </nav>
    </main>
  );
}
