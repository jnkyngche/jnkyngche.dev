"use client";

import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  // 포스트 페이지(/posts/...)와 about 페이지에서는 RSS 링크 숨기기
  const shouldShowRss =
    !pathname?.startsWith("/posts/") && pathname !== "/about";

  return (
    <footer className="mt-auto pt-8 pb-4">
      {shouldShowRss ? (
        <div className="flex items-center justify-center">
          <a
            href="/feed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
            aria-label="RSS 피드"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5"
            >
              <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
            </svg>
            <span>RSS</span>
          </a>
        </div>
      ) : (
        <div className="h-4" />
      )}
    </footer>
  );
}
