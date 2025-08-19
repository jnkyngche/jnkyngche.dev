"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TocItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) {
      return;
    }

    // IntersectionObserver로 현재 보이는 제목 추적
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-10% 0px -60% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    // 각 제목 요소에 observer 연결
    headings.forEach(({ id, level, text }) => {
      const element = document.getElementById(id);
      if (element) {
        intersectionObserver.observe(element);
      } else {
        // DOM에서 해당 텍스트를 가진 제목 찾기 시도 (h2, h3만)
        const textMatch = Array.from(
          document.querySelectorAll(`h${level}`)
        ).find((h) => h.textContent?.includes(text));

        if (textMatch) {
          textMatch.id = id; // ID 설정
          intersectionObserver.observe(textMatch);
        }
      }
    });

    // 스크롤 이벤트로도 감지 (IntersectionObserver와 함께 사용)
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;

      // 현재 스크롤 위치에서 가장 가까운 제목 찾기
      let closestHeading = null;
      let minDistance = Infinity;

      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          if (distance < minDistance) {
            minDistance = distance;
            closestHeading = id;
          }
        }
      });

      if (closestHeading && closestHeading !== activeId) {
        console.log("Scroll-based heading detection:", closestHeading);
        setActiveId(closestHeading);
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      intersectionObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings, activeId]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 요소의 위치 계산
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;

      // 뷰포트 상단에서 약간 아래에 위치하도록 스크롤
      const offset = 100; // 상단에서 100px 아래
      const targetScrollTop = absoluteElementTop - offset;

      // 부드러운 스크롤
      window.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto overflow-x-hidden border-l border-slate-200 dark:border-slate-700 pl-4">
      <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-4">
        목차 ({headings.length})
      </div>
      {headings.length === 0 ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          목차가 없습니다.
        </p>
      ) : (
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={`text-left w-full px-2 py-1 rounded text-sm transition-colors break-words whitespace-normal ${
                  heading.level === 2
                    ? "font-medium text-slate-700 dark:text-slate-300"
                    : "font-normal text-slate-600 dark:text-slate-400 ml-4"
                } ${
                  activeId === heading.id
                    ? "bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
