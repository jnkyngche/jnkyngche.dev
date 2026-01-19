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

