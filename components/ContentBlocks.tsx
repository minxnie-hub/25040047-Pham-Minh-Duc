import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/data/site";

export function ReportSection({ id, title, children, className = "" }: { id: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <Reveal className={`scroll-mt-28 border-b border-[var(--line)] py-12 first:pt-0 last:border-b-0 ${className}`}>
      <section id={id}>
        <h2>{title}</h2>
        {children}
      </section>
    </Reveal>
  );
}

export function Evidence({ src, alt, caption, priority = false }: { src: string; alt: string; caption?: string; priority?: boolean }) {
  return (
    <figure className="my-8">
      <div className="evidence-frame">
        <Image src={asset(src)} alt={alt} width={1300} height={820} priority={priority} className="h-auto w-full" />
      </div>
      {caption && <figcaption className="mt-3 border-l border-[var(--burgundy)] pl-3 text-sm text-[var(--ink-soft)]">{caption}</figcaption>}
    </figure>
  );
}

export function Prompt({ children }: { children: React.ReactNode }) {
  return <blockquote className="prompt-box">{children}</blockquote>;
}

export function DataTable({ headers, rows, caption }: { headers: string[]; rows: React.ReactNode[][]; caption?: string }) {
  return (
    <figure className="my-8">
      <div className="table-wrap" tabIndex={0} aria-label={caption ? `Bảng: ${caption}` : "Bảng dữ liệu có thể cuộn ngang"}>
        <table className="data-table">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead><tr>{headers.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && <figcaption className="mt-3 border-l border-[var(--burgundy)] pl-3 text-sm text-[var(--ink-soft)]">{caption}</figcaption>}
    </figure>
  );
}
