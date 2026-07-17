import Link from "next/link";
import { ArrowUpRight, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { student } from "@/data/site";

export function SiteFooter() {
  return (
    <footer id="lien-he" className="mt-24 border-t border-[var(--line-strong)] bg-[var(--ink)] text-[var(--white)]">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.15fr_.85fr] md:items-end">
        <div>
          <p className="mono-font mb-5 text-[0.68rem] uppercase tracking-[0.14em] text-[#d8bd7a]">Learning record · 2026</p>
          <h2 className="display-font max-w-3xl text-4xl leading-[1.08] sm:text-5xl">Một portfolio rõ ràng để nhìn lại cách mình học, làm và tự đánh giá.</h2>
        </div>
        <div className="md:text-right">
          <a href={`mailto:${student.email}`} className="inline-flex min-h-12 items-center gap-2 border-b border-white/65 py-2 font-semibold transition-colors hover:border-white">
            <EnvelopeSimple size={20} />
            {student.email}
          </a>
          <div className="mt-6 text-sm leading-6 text-white/65">
            <p>{student.school}</p>
            <p>{student.faculty}</p>
          </div>
          <Link href="/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white">
            Về đầu trang <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
