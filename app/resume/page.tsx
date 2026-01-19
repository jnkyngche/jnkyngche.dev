export const metadata = {
  title: "이력서 | jnkyngche (zeroth)",
  description: "개발자 이력서",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
};

export default function ResumePage() {
  return (
    <div className="max-w-none space-y-12 text-base">
      {/* 헤더 섹션 */}
      <section className="pt-6 pb-10 border-b border-slate-200/70 dark:border-slate-800/70">
        <div className="grid grid-cols-[1fr_auto] items-start gap-x-6 gap-y-4 sm:gap-y-6">
          <div className="min-w-0">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl sm:text-[2.75rem] leading-tight font-bold tracking-tight text-slate-900 dark:text-slate-50">
                최준경
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-medium">
                개발자 · 프론트엔드
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
              <a
                href="mailto:jnkyngche@gmail.com"
                className="underline underline-offset-4 decoration-slate-300/80 dark:decoration-slate-700 hover:text-slate-900 dark:hover:text-slate-100 hover:decoration-slate-500 dark:hover:decoration-slate-500 transition-colors"
              >
                jnkyngche@gmail.com
              </a>
            </div>
          </div>

          {/* 프로필 사진 공간 */}
          <div className="justify-self-end">
            <div className="w-16 h-16 sm:w-36 sm:h-36 rounded-xl bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center overflow-hidden">
              <span className="text-xs text-slate-400 dark:text-slate-500">프로필 사진</span>
            </div>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          소개
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-7">
          여기에 자신에 대한 간단한 소개를 작성하세요. 주요 경력, 전문 분야, 관심사 등을 포함할 수 있습니다.
        </p>
      </section>

      {/* 경력 섹션 */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          경력
        </h2>

        <ol className="relative space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:-translate-x-1/2 before:bg-slate-200 dark:before:bg-slate-800">
          <li className="relative pl-6">
            <span className="absolute left-2 top-[5px] -translate-x-1/2 flex h-4 w-4 items-center justify-center">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-500 dark:bg-slate-400 border-2 border-white dark:border-slate-950" />
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] sm:items-baseline gap-x-4 gap-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-[17px] leading-7 font-semibold text-slate-900 dark:text-slate-50">
                  하우저
                </h3>
                <a
                  href="https://service.howser.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
              <span className="text-sm text-slate-700 dark:text-slate-300 font-medium font-mono">
                2022.06 – 2025.09
              </span>
            </div>

            <ul className="mt-2 space-y-1.5 text-slate-700 dark:text-slate-300 leading-7">
              <li className="relative pl-3">
                <span className="absolute left-0 top-[0.55rem] h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                <span>주요 업무 내용 1</span>
              </li>
            </ul>
          </li>

          <li className="relative pl-6">
            <span className="absolute left-2 top-[5px] -translate-x-1/2 flex h-4 w-4 items-center justify-center">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-500 dark:bg-slate-400 border-2 border-white dark:border-slate-950" />
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] sm:items-baseline gap-x-4 gap-y-1">
              <h3 className="text-[17px] leading-7 font-semibold text-slate-900 dark:text-slate-50">
                셰어킴
              </h3>
              <span className="text-sm text-slate-700 dark:text-slate-300 font-medium font-mono">
                2021.01 – 2022.01
              </span>
            </div>

            <ul className="mt-2 space-y-1.5 text-slate-700 dark:text-slate-300 leading-7">
              <li className="relative pl-3">
                <span className="absolute left-0 top-[0.55rem] h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                <span>주요 업무 내용 1</span>
              </li>
            </ul>
          </li>

          <li className="relative pl-6">
            <span className="absolute left-2 top-[5px] -translate-x-1/2 flex h-4 w-4 items-center justify-center">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-500 dark:bg-slate-400 border-2 border-white dark:border-slate-950" />
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] sm:items-baseline gap-x-4 gap-y-1">
              <h3 className="text-[17px] leading-7 font-semibold text-slate-900 dark:text-slate-50">
                프리랜서
              </h3>
              <span className="text-sm text-slate-700 dark:text-slate-300 font-medium font-mono">
                2020.01 – 2021.01
              </span>
            </div>

            <ul className="mt-2 space-y-1.5 text-slate-700 dark:text-slate-300 leading-7">
              <li className="relative pl-3">
                <span className="absolute left-0 top-[0.55rem] h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                <span>주요 업무 내용 1</span>
              </li>
            </ul>
          </li>
        </ol>
      </section>

      {/* 프로젝트 섹션 */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          개인 프로젝트
        </h2>

        <div className="space-y-10">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] sm:items-baseline gap-x-6 gap-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-[17px] font-semibold text-slate-900 dark:text-slate-50">
                  ghostgains.app
                </h3>
                <a
                  href="https://ghostgains.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
              <span className="text-sm text-slate-700 dark:text-slate-300 font-medium font-mono">
                2025.12 – 
              </span>
            </div>

            <p className="mt-3 text-slate-700 dark:text-slate-300 leading-7">
              프로젝트에 대한 간단한 설명을 작성하세요.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-md border border-slate-200/70 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-800/70 dark:bg-slate-900 dark:text-slate-200">
                React
              </span>
              <span className="inline-flex items-center rounded-md border border-slate-200/70 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-800/70 dark:bg-slate-900 dark:text-slate-200">
                TypeScript
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300 leading-7">
              <li className="relative pl-4">
                <span className="absolute left-0 top-[0.55rem] h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                <span>주요 기능 또는 성과 1</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 교육 섹션 */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          학력
        </h2>

        <div className="space-y-8">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] sm:items-baseline gap-x-6 gap-y-1">
              <h3 className="text-[17px] font-semibold text-slate-900 dark:text-slate-50">
                평택대학교 
              </h3>
              <span className="text-sm text-slate-700 dark:text-slate-300 font-medium font-mono">
                2016.03 – 2017.09
              </span>
            </div>
            <p className="mt-2 text-slate-700 dark:text-slate-300 leading-7">
              컴퓨터학과 | 학사 (중퇴)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
