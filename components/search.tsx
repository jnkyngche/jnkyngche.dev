"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { allPosts } from "contentlayer/generated";

interface SearchResult {
  title: string;
  description?: string;
  slug: string;
  type: "post";
  content: string;
  anchorId?: string;
  sectionTitle?: string;
}

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // 한글 초성 매핑
  const hangulChosung = {
    ㄱ: ["가", "깋"],
    ㄲ: ["까", "낗"],
    ㄴ: ["나", "닣"],
    ㄷ: ["다", "딯"],
    ㄸ: ["따", "띻"],
    ㄹ: ["라", "맇"],
    ㅁ: ["마", "밓"],
    ㅂ: ["바", "빟"],
    ㅃ: ["빠", "삫"],
    ㅅ: ["사", "싷"],
    ㅆ: ["싸", "앃"],
    ㅇ: ["아", "잏"],
    ㅈ: ["자", "짛"],
    ㅉ: ["짜", "찧"],
    ㅊ: ["차", "칳"],
    ㅋ: ["카", "킿"],
    ㅌ: ["타", "팋"],
    ㅍ: ["파", "핗"],
    ㅎ: ["하", "힣"],
  };

  // 한글 초성을 완성형으로 변환
  const expandChosung = (text: string): string => {
    let expanded = text;
    Object.entries(hangulChosung).forEach(([chosung, range]) => {
      const regex = new RegExp(chosung, "g");
      expanded = expanded.replace(regex, `[${range[0]}-${range[1]}]`);
    });
    return expanded;
  };

  // 안전한 정규식 생성
  const createSafeRegex = (searchText: string): RegExp => {
    try {
      // 특수문자 이스케이프
      const escaped = searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      // 한글 초성 확장
      const expanded = expandChosung(escaped);
      return new RegExp(`(${expanded})`, "gi");
    } catch (error) {
      console.error("정규식 생성 오류:", error);
      // 기본 검색으로 폴백
      return new RegExp(
        `(${searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
        "gi"
      );
    }
  };

  // 안전한 JSON 파싱 함수
  const safeJsonParse = (jsonString: string, fallback: any = null) => {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error("JSON 파싱 오류:", error);
      console.error("문제가 된 문자열:", jsonString);
      return fallback;
    }
  };

  // 안전한 포스트 데이터 검증
  const validatePost = (post: any): boolean => {
    try {
      return (
        post &&
        typeof post === "object" &&
        typeof post.title === "string" &&
        typeof post.slug === "string" &&
        post.body &&
        typeof post.body.raw === "string"
      );
    } catch (error) {
      console.error("포스트 데이터 검증 오류:", error);
      return false;
    }
  };

  // 검색 결과 필터링
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);

    const searchQuery = query.trim();
    const searchResults: SearchResult[] = [];

    try {
      // allPosts가 유효한지 확인
      if (!Array.isArray(allPosts)) {
        console.error("allPosts가 배열이 아닙니다:", allPosts);
        setResults([]);
        setIsSearching(false);
        return;
      }

      // 포스트 검색
      allPosts.forEach((post) => {
        try {
          // 포스트 데이터 검증
          if (!validatePost(post)) {
            console.warn("유효하지 않은 포스트 데이터:", post);
            return;
          }

          let score = 0;
          let matchedContent = "";
          let anchorId: string | undefined;
          let sectionTitle: string | undefined;

          // 제목 검색 (가장 높은 우선순위)
          if (post.title && post.title.includes(searchQuery)) {
            score += 100;
            matchedContent = post.title;
          }

          // 요약 검색
          if (post.description && post.description.includes(searchQuery)) {
            score += 50;
            if (!matchedContent) matchedContent = post.description;
          }

          // 내용 검색
          if (
            post.body &&
            post.body.raw &&
            post.body.raw.includes(searchQuery)
          ) {
            score += 10;
            const content = post.body.raw;
            const index = content.indexOf(searchQuery);

            if (!matchedContent) {
              const start = Math.max(0, index - 50);
              const end = Math.min(
                content.length,
                index + searchQuery.length + 50
              );
              matchedContent = content.slice(start, end).trim();
            }

            // 매칭 위치 이전에서 가장 가까운 헤딩 찾기
            const linesBeforeMatch = content.slice(0, index).split("\n").reverse();
            for (const line of linesBeforeMatch) {
              const trimmed = line.trim();
              if (trimmed.startsWith("###")) {
                sectionTitle = trimmed.replace(/^###\s*/, "");
                break;
              } else if (trimmed.startsWith("##") && !trimmed.startsWith("###")) {
                sectionTitle = trimmed.replace(/^##\s*/, "");
                break;
              }
            }

            if (sectionTitle) {
              anchorId = sectionTitle
                .toLowerCase()
                .replace(/[^a-z0-9가-힣]+/g, "-");
            }
          }

          if (score > 0) {
            searchResults.push({
              title: post.title || "",
              description: post.description || "",
              slug: post.slug || "",
              type: "post",
              content: matchedContent || "",
              anchorId,
              sectionTitle,
            });
          }
        } catch (postError) {
          console.error("개별 포스트 처리 오류:", postError, post);
        }
      });

      // 점수순으로 정렬
      searchResults.sort((a, b) => {
        try {
          const aScore = getScore(a, searchQuery);
          const bScore = getScore(b, searchQuery);
          return bScore - aScore;
        } catch (sortError) {
          console.error("정렬 오류:", sortError);
          return 0;
        }
      });

      setResults(searchResults.slice(0, 10)); // 상위 10개 결과만 표시
    } catch (error) {
      console.error("검색 처리 오류:", error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [query]);

  // 점수 계산 함수
  const getScore = (result: SearchResult, searchQuery: string) => {
    let score = 0;
    const query = searchQuery;

    try {
      if (result.title && result.title.includes(query)) score += 100;
      if (result.description && result.description.includes(query)) score += 50;
      if (result.content && result.content.includes(query)) score += 10;
    } catch (error) {
      console.error("점수 계산 오류:", error);
    }

    return score;
  };

  // 하이라이트 처리 (한글 안전)
  const highlightText = (text: string, query: string) => {
    if (!query.trim() || !text) return text;

    try {
      const regex = createSafeRegex(query);
      const parts = text.split(regex);

      return parts.map((part, index) => {
        if (part && regex.test(part)) {
          return (
            <mark
              key={index}
              className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded"
            >
              {part}
            </mark>
          );
        }
        return part;
      });
    } catch (error) {
      console.error("하이라이트 처리 오류:", error);
      return text;
    }
  };

  // 검색 결과 클릭 처리
  const handleResultClick = (result: SearchResult) => {
    try {
      if (result.slug) {
        const url = result.anchorId
          ? `${result.slug}#${result.anchorId}`
          : result.slug;
        router.push(url);
        setIsOpen(false);
        setQuery("");
      }
    } catch (error) {
      console.error("검색 결과 클릭 처리 오류:", error);
    }
  };

  // 검색창 열기
  const openSearch = () => {
    try {
      setIsOpen(true);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    } catch (error) {
      console.error("검색창 열기 오류:", error);
    }
  };

  // 검색창 닫기
  const closeSearch = () => {
    try {
      setIsOpen(false);
      setQuery("");
    } catch (error) {
      console.error("검색창 닫기 오류:", error);
    }
  };

  // ESC 키로 검색창 닫기
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSearch();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={searchRef}>
      {/* 검색 아이콘 */}
      <button
        onClick={openSearch}
        className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200"
        aria-label="검색"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>

      {/* 검색 모달 */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* 배경 오버레이 - 클릭 시 모달 닫기 */}
          <div
            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
            onClick={closeSearch}
          />

          {/* 검색 컨테이너 */}
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700 animate-in slide-in-from-top-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 검색 입력 필드 */}
            <div className="relative p-4 border-b border-slate-200 dark:border-slate-700">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="검색어를 입력하세요..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-transparent border-none outline-none text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* 검색 결과 */}
            <div className="max-h-96 overflow-y-auto">
              {isSearching ? (
                <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                  <div className="animate-spin w-6 h-6 border-2 border-slate-300 dark:border-slate-600 border-t-slate-600 dark:border-t-slate-300 rounded-full mx-auto mb-2"></div>
                  검색 중...
                </div>
              ) : query && results.length === 0 ? (
                <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                  검색 결과가 없습니다.
                </div>
              ) : query && results.length > 0 ? (
                <div className="p-2">
                  {results.map((result, index) => (
                    <button
                      key={`${result.type}-${result.slug}-${index}`}
                      onClick={() => handleResultClick(result)}
                      className="w-full text-left p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200 group"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <svg
                            className="w-4 h-4 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {highlightText(result.title, query)}
                          </div>
                          {result.description && (
                            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                              {highlightText(result.description, query)}
                            </div>
                          )}
                          <div className="text-xs text-slate-500 dark:text-slate-500 mt-2 line-clamp-1">
                            {highlightText(result.content, query)}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-slate-400 dark:text-slate-500">
                              포스트
                            </span>
                            {result.sectionTitle && (
                              <>
                                <span className="text-xs text-slate-300 dark:text-slate-600">·</span>
                                <span className="text-xs text-blue-500 dark:text-blue-400 flex items-center gap-1">
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                  {result.sectionTitle}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                  검색어를 입력하여 포스트를 찾아보세요.
                </div>
              )}
            </div>

            {/* 단축키 안내 */}
            <div className="p-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 text-center">
              <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">
                ESC
              </kbd>
              로 닫기
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
