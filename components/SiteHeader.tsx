import Link from "next/link";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { student } from "@/data/site";

const nav = [
  { href: "/#gioi-thieu", label: "Giới thiệu" },
  { href: "/#bai-tap", label: "Bài tập" },
  { href: "/#tong-ket", label: "Tổng kết" },
  { href: "/#lien-he", label: "Liên hệ" },
];

export function SiteHeader() {
  return (
    <header className="no-print sticky top-0 z-50 border-b border-[rgba(20,40,60,.2)] bg-[rgba(246,242,232,.91)] backdrop-blur-md">
      <div className="container-page flex min-h-16 items-center justify-between gap-5">
        <Link href="/" className="group flex items-center gap-3 py-2" aria-label="Về trang chủ">
          <span className="grid h-9 w-9 place-items-center border-2 border-[var(--ink)] bg-[var(--highlighter)] font-bold shadow-[3px_3px_0_var(--ink)] transition-transform duration-200 group-hover:-translate-y-0.5">
            MD
          </span>
          <span className="leading-tight">
            <strong className="block text-[0.92rem]">{student.name}</strong>
            <span className="mono-font block text-[0.64rem] uppercase tracking-[0.11em] text-[var(--ink-soft)]">{student.studentId}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Điều hướng chính">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="min-h-11 px-4 py-2 text-sm font-semibold underline-offset-8 hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="group relative md:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-[var(--ink)] bg-[var(--white)] [&::-webkit-details-marker]:hidden" aria-label="Mở menu">
            <List size={22} className="group-open:hidden" />
            <X size={22} className="hidden group-open:block" />
          </summary>
          <nav className="absolute right-0 top-13 min-w-48 border border-[var(--ink)] bg-[var(--white)] p-2 shadow-[6px_6px_0_rgba(20,40,60,.2)]" aria-label="Điều hướng di động">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="block min-h-11 border-b border-[rgba(20,40,60,.14)] px-3 py-2.5 text-sm font-semibold last:border-b-0">
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
