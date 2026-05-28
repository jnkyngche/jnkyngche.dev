"use client";

import { useState, useCallback, useEffect } from "react";

const A4_PX = 1123; // 297mm at 96dpi
const MARGIN_PX = 57; // 15mm at 96dpi
const PAGE_BREAK_GUIDES = [1, 2, 3, 4];

export function ResumePrintWrapper({ children }: { children: React.ReactNode }) {
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const wasDark = html.classList.contains("dark");
    html.classList.remove("dark");
    return () => {
      if (wasDark) html.classList.add("dark");
    };
  }, []);

  const handlePrint = useCallback(() => {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");
    if (isDark) html.classList.remove("dark");

    // 다크모드 제거 후 브라우저가 리렌더링할 시간을 확보한 뒤 인쇄
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // 인쇄 시 Chrome 기본 헤더에 제목이 나오지 않도록 임시 제거
        const originalTitle = document.title;
        document.title = "";

        window.print();

        window.addEventListener(
          "afterprint",
          () => {
            document.title = originalTitle;
            if (isDark) html.classList.add("dark");
          },
          { once: true }
        );
      });
    });
  }, []);

  return (
    <div>
      {/* 컨트롤 버튼 — 인쇄 시 숨김 */}
      <div className="print:hidden mb-6 flex items-center justify-end gap-2">
        <button
          onClick={() => setPreview(!preview)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          {preview ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )}
          {preview ? "미리보기 닫기" : "A4 미리보기"}
        </button>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 dark:bg-white px-3 py-1.5 text-sm text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          PDF 저장
        </button>
      </div>

      {preview ? (
        /*
         * A4 미리보기
         * - 화면: 회색 배경 + A4 박스 + 페이지 구분선
         * - 인쇄: resume-preview-* CSS 클래스로 스타일 초기화 → 일반 문서처럼 출력
         */
        <div className="resume-preview-bg -mx-4 sm:-mx-8 bg-slate-300 dark:bg-slate-600 py-10 px-4 overflow-x-auto">
          <div
            className="resume-preview-page relative mx-auto shadow-2xl text-slate-900"
            style={{
              width: "794px",
              minHeight: `${A4_PX}px`,
              backgroundImage: `repeating-linear-gradient(
                to bottom,
                #cbd5e1 0px,
                #cbd5e1 ${MARGIN_PX}px,
                #ffffff ${MARGIN_PX}px,
                #ffffff ${A4_PX - MARGIN_PX}px,
                #cbd5e1 ${A4_PX - MARGIN_PX}px,
                #cbd5e1 ${A4_PX}px
              )`,
            }}
          >
            {/* 페이지 구분선 — 인쇄 시 숨김 */}
            {PAGE_BREAK_GUIDES.map((i) => (
              <div
                key={i}
                className="print:hidden absolute left-0 right-0 pointer-events-none z-10"
                style={{ top: `${i * A4_PX}px` }}
              >
                <div className="border-t-2 border-dashed border-red-400/70" />
                <div className="absolute left-0 right-0 flex items-center justify-center -top-3">
                  <span className="bg-red-400/90 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                    {i}p / {i + 1}p
                  </span>
                </div>
              </div>
            ))}

            {/* 콘텐츠 */}
            <div className="resume-preview-content" style={{ padding: `${MARGIN_PX}px` }}>
              {children}
            </div>
          </div>

          {/* 범례 + 안내 — 인쇄 시 숨김 */}
          <div className="print:hidden mt-5 space-y-2 text-center">
            <div className="flex items-center justify-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-4 h-3 bg-[#cbd5e1] rounded-sm border border-slate-400/30" />
                인쇄 여백 (15mm)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-4 h-3 bg-white border border-slate-300 rounded-sm" />
                콘텐츠 영역
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-6 border-t-2 border-dashed border-red-400" />
                페이지 구분 (근사값)
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              미리보기는 근사치입니다. 실제 페이지 나눔은 PDF 저장 후 확인하세요.
            </p>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
