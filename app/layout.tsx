import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { Search } from "@/components/search";
import { GithubLink } from "@/components/github-link";
import { MailLink } from "@/components/mail-link";
import { PlaygroundLink } from "@/components/playground-link";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "jnkyngche (zeroth) | 블로그",
  description: "주로 웹 개발에 대하여 이야기합니다.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-pretendard">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 min-h-screen flex flex-col">
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
            <main className="flex-1">{children}</main>

            <Footer />
          </div>

          {/* 다크모드 버튼을 우측 상단에 고정 */}
          <div className="fixed bottom-8 right-8 z-40">
            <ModeToggle />
          </div>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
