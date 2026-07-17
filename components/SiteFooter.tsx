import Link from "next/link";
import { EnvelopeSimple, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { student } from "@/data/site";

export function SiteFooter() {
  return (
    <footer id="lien-he" className="mt-24 border-t-4 border-[var(--ink)] bg-[var(--ink)] text-[var(--white)]">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_.6fr] md:items-end">
        <div>
          <p className="mono-font mb-4 text-xs uppercase tracking-[0.16em] text-[var(--highlighter)]">Liên hệ học tập</p>
          <h2 className="display-font max-w-3xl text-4xl leading-[1.02] sm:text-5xl">Một hồ sơ học tập được tổ chức để dễ đọc, dễ kiểm chứng và dễ tiếp tục phát triển.</h2>
        </div>
        <div className="md:text-right">
          <a href={`mailto:${student.email}`} className="inline-flex min-h-12 items-center gap-2 border border-[var(--white)] px-4 py-3 font-semibold transition-colors hover:bg-[var(--white)] hover:text-[var(--ink)]">
            <EnvelopeSimple size={20} />
            {student.email}
          </a>
          <div className="mt-5 text-sm text-white/70">
            <p>{student.school}</p>
            <p>{student.faculty}</p>
          </div>
          <Link href="/" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
            Về đầu trang <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
