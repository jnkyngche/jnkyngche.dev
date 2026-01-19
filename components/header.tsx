"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MailLink } from "@/components/mail-link";
import { GithubLink } from "@/components/github-link";
import { PlaygroundLink } from "@/components/playground-link";
import { Search } from "@/components/search";

export function Header() {
  const pathname = usePathname();
  const isResumePage = pathname === "/resume";

  if (isResumePage) {
    return null;
  }

  return (
    <header>
      <div className="flex items-center justify-between">
        <div className="flex items-center w-full">
          <nav className="text-sm font-medium space-x-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
          <div className="ml-auto flex items-center gap-1">
            <MailLink />
            <GithubLink />
            <PlaygroundLink />
            <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1"></div>
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
}
