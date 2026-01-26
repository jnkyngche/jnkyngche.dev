"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  const pathname = usePathname();
  const isResumePage = pathname === "/resume";
  const isExperiencePage = pathname?.startsWith("/experience/");

  // 경력기술서 상세 페이지: 독립 레이아웃 (캡처 친화적)
  if (isExperiencePage) {
    return (
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div
      className={[
        "mx-auto pt-10 pb-16 px-4 min-h-screen flex flex-col",
        isResumePage ? "max-w-3xl lg:max-w-4xl" : "max-w-2xl",
      ].join(" ")}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

