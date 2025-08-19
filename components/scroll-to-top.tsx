"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치를 감지하여 버튼 표시 여부 결정
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 2000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 상단으로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 rounded-full shadow-lg hover:bg-slate-700 dark:hover:bg-slate-300 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
          aria-label="상단으로 이동"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
