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
      <section className="border-b border-[var(--line-strong)] bg-[var(--paper-soft)]">
        <div className="container-page py-11 sm:py-16 lg:py-20">
          <div className="mb-9 flex flex-wrap items-center gap-2 text-sm text-[var(--ink-soft)]">
            <Link href="/" className="inline-flex min-h-10 items-center gap-2 px-1 hover:text-[var(--ink)]"><House size={16} /> Trang chủ</Link>
            <span aria-hidden="true">/</span>
            <span>Bài {number}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
            <Reveal>
              <p className="eyebrow mb-7">{kicker}</p>
              <h1 className="display-font max-w-5xl text-[clamp(2.8rem,6vw,5.8rem)] leading-[1.01]">{title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--ink-soft)]">{summary}</p>
            </Reveal>

            <a href={asset(`/downloads/bai-${number}.pdf`)} download className="no-print inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--ink)] px-5 py-3 font-semibold transition-colors hover:bg-[var(--ink)] hover:text-[var(--white)]">
              <DownloadSimple size={19} /> Tải PDF gốc
            </a>
          </div>
        </div>
      </section>

      <div className="container-page grid gap-12 py-12 lg:grid-cols-[230px_minmax(0,1fr)] lg:py-18">
        <aside className="no-print hidden lg:block">
          <div className="sticky top-28 border-t border-[var(--line-strong)] pt-5">
            <p className="mono-font mb-4 flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.11em] text-[var(--burgundy)]"><ListBullets size={15} /> Mục lục</p>
            <ol className="space-y-1 text-sm">
              {toc.map((item, index) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="grid min-h-10 grid-cols-[28px_1fr] gap-2 py-2 text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]">
                    <span className="mono-font text-[0.64rem] text-[var(--burgundy)]">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <article className="min-w-0 content-prose">{children}</article>
      </div>

      <nav className="no-print container-page grid gap-4 border-t border-[var(--line-strong)] py-12 sm:grid-cols-2" aria-label="Chuyển bài tập">
        {previous ? (
          <Link href={`/${previous.slug}`} className="group min-h-28 border border-[var(--line)] bg-[var(--white)] p-5 transition-colors hover:border-[var(--ink)]">
            <span className="mb-3 flex items-center gap-2 text-sm text-[var(--ink-soft)]"><ArrowLeft size={17} /> Bài trước</span>
            <strong className="display-font block text-xl leading-snug">{previous.title}</strong>
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/${next.slug}`} className="group min-h-28 border border-[var(--line)] bg-[var(--white)] p-5 text-right transition-colors hover:border-[var(--ink)]">
            <span className="mb-3 flex items-center justify-end gap-2 text-sm text-[var(--ink-soft)]">Bài tiếp theo <ArrowRight size={17} /></span>
            <strong className="display-font block text-xl leading-snug">{next.title}</strong>
          </Link>
        ) : <span />}
      </nav>
    </main>
  );
}
