import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { student } from "@/data/site";

export const metadata: Metadata = {
  title: `${student.name} — Portfolio Nhập môn CNS & AI`,
  description: `Portfolio học tập của ${student.name}, MSSV ${student.studentId}, ngành ${student.major}.`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <a className="skip-link" href="#main-content">Đi đến nội dung chính</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
