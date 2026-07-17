import Link from "next/link";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { student } from "@/data/site";

const nav = [
  { href: "/#gioi-thieu", label: "Giới thiệu", index: "01" },
  { href: "/#bai-tap", label: "Bài tập", index: "02" },
  { href: "/#tong-ket", label: "Tổng kết", index: "03" },
  { href: "/#lien-he", label: "Liên hệ", index: "04" },
];

export function SiteHeader() {
  return (
    <header className="no-print sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(243,240,232,.94)] backdrop-blur-lg">
      <div className="container-page flex min-h-[72px] items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-4 py-3" aria-label="Về trang chủ">
          <span className="display-font grid h-10 w-10 place-items-center rounded-full border border-[var(--ink)] text-[1.05rem] transition-colors group-hover:bg-[var(--ink)] group-hover:text-[var(--white)]">
            MD
          </span>
          <span className="leading-tight">
            <strong className="block text-[0.92rem] tracking-[0.01em]">{student.name}</strong>
            <span className="mono-font mt-1 block text-[0.62rem] uppercase tracking-[0.13em] text-[var(--ink-soft)]">English Education · {student.studentId}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Điều hướng chính">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="group flex min-h-11 items-center gap-2 py-2 text-sm font-semibold">
              <span className="mono-font text-[0.62rem] text-[var(--burgundy)]">{item.index}</span>
              <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-[var(--ink)]">{item.label}</span>
            </Link>
          ))}
        </nav>

        <details className="group relative md:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[var(--ink)] bg-[var(--paper-soft)] [&::-webkit-details-marker]:hidden" aria-label="Mở menu">
            <List size={21} className="group-open:hidden" />
            <X size={21} className="hidden group-open:block" />
          </summary>
          <nav className="absolute right-0 top-14 min-w-56 border border-[var(--line)] bg-[var(--white)] p-3 shadow-[var(--shadow-soft)]" aria-label="Điều hướng di động">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="flex min-h-11 items-center gap-3 border-b border-[var(--line)] px-2 py-2.5 text-sm font-semibold last:border-b-0">
                <span className="mono-font text-[0.62rem] text-[var(--burgundy)]">{item.index}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
