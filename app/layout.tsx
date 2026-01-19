import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { PageShell } from "@/components/page-shell";

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
          <PageShell>{children}</PageShell>

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
