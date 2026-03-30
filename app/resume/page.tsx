import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "이력서 | 최준경",
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
	               프론트엔드 개발자
	              </p>
            </div>
          </div>

          {/* 프로필 사진 */}
          <div className="justify-self-end">
            <div className="w-20 h-20 sm:w-32 sm:h-40 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 relative">
              <Image
                src="/profile-new.jpeg"
                alt="최준경 프로필 사진"
                width={128}
                height={160}
                className="w-full h-full object-cover pointer-events-none select-none"
                priority
              />
            </div>
          </div>
        </div>
      </section>

	      {/* 저는. 섹션 */}
	      <section className="space-y-6">
		        <ul className="space-y-2.5 text-slate-600 dark:text-slate-300 text-base leading-7">
		          <li className="flex items-start gap-2.5">
		            <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
		            <span>
			              5년차 프론트엔드 개발자 최준경입니다.
		            </span>
		          </li>
		          <li className="flex items-start gap-2.5">
		            <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
		            <span>
			              불필요한 비용은 줄이고, 사용자의 만족은 높이는 최적의 지점을 찾아낼 때 가장 즐겁습니다.
		            </span>
		          </li>
		          <li className="flex items-start gap-2.5">
		            <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
		            <span>
			              프론트엔드 영역에 국한되지 않고 서버리스(Serverless)와 인프라까지 넓게 보며 관심이 많습니다.
		            </span>
		          </li>
		        </ul>

            <ul className="space-y-2.5 text-slate-600 dark:text-slate-300 text-base leading-7">
		            <li className="flex items-start gap-2.5">
		              <span>
			                Email |{" "}
		                <a
		                  href="mailto:jnkyngche@gmail.com"
		                  className="underline underline-offset-4 decoration-slate-300/80 dark:decoration-slate-700 hover:text-slate-900 dark:hover:text-slate-100 hover:decoration-slate-500 dark:hover:decoration-slate-500 transition-colors"
		                >
		                  jnkyngche@gmail.com
		                </a>
		              </span>
		            </li>
		            <li className="flex items-start gap-2.5">
		              <span>
			                Blog |{" "}
		                <a
		                  href="https://jnkyngche.dev/"
		                  target="_blank"
		                  rel="noopener noreferrer"
		                  className="underline underline-offset-4 decoration-slate-300/80 dark:decoration-slate-700 hover:text-slate-900 dark:hover:text-slate-100 hover:decoration-slate-500 dark:hover:decoration-slate-500 transition-colors"
		                >
		                  jnkyngche.dev
		                </a>
		              </span>
		            </li>
		          </ul>

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
                  className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1.5"
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
	                2022.06 – 2025.10
	              </span>
	              <p className="text-[15px] text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
	                쿠팡·네이버 구매 가구의 입고(창고)→배송→시공/설치→반품까지 전 과정을 지원하는 서비스의 운영 웹(관리자/고객/물류) 및 기사용 모바일 앱 개발을 담당했습니다.
	              </p>
	            </div>

	            <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300 text-base leading-7">
	              <li className="flex items-start gap-2.5">
	                <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
	                <span>창고/재고/물품 관리, 고객 관리 등 운영 페이지 개발 및 고도화</span>
	              </li>
	              <li className="flex items-start gap-2.5">
	                <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
	                <span>jQuery 기반 프로젝트 유지보수 및 기능 개선</span>
	              </li>
	              <li className="flex items-start gap-2.5">
	                <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
	                <span className="flex items-center gap-1.5">
	                  Next.js 기반 어드민 상태 아키텍처 개편 및 App Router 마이그레이션
	                  <Link href="/experience/hauser-admin" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors" title="경력기술서 보기">
	                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
	                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
	                    </svg>
	                  </Link>
	                </span>
	              </li>
	              <li className="flex items-start gap-2.5">
	                <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
	                <span>기사 앱을 Android 단독에서 React Native 기반 크로스플랫폼(iOS/Android)으로 리뉴얼</span>
	              </li>
	              <li className="flex items-start gap-2.5">
	                <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
	                <span className="flex items-center gap-1.5">
	                  React Native CodePush 적용으로 긴급 장애 대응 및 배포 리드타임 단축
	                  <Link href="/experience/hauser" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors" title="경력기술서 보기">
	                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
	                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
	                    </svg>
	                  </Link>
	                </span>
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

            <div className="mt-4 space-y-7">
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] sm:items-baseline gap-x-4 gap-y-1 mb-2">
                  <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                    오로지 (한라건설)
                  </h4>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium font-mono">
                    2021.03 – 2022.01
                  </span>
                </div>
                <p className="text-[15px] text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
                  창고 공유 중개 플랫폼으로 프론트엔드 개발를 진행 하였습니다. 한라건설과의 외주 프로젝트로 두명의 개발자가 초기 밑바닥부터 만들어갔습니다.
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-base leading-7">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                    <span>Next.js, TypeScript, recoil로 초기 프론트엔드 설계</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                    <span>결제(KG모빌리언스) 및 채팅(Sendbird) 모듈 연동</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                    <span>
                      react 18의 Suspense/ErrorBoundary 도입을 통한 비동기 처리 UX 개선 및 <br />next.js의 getStaticProps, getServerSideProps를 적절하게 사용하여 빠른 로딩 속도 제공
                      <Link href="/experience/oroji" className="inline-flex items-center ml-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors align-middle" title="경력기술서 보기">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] sm:items-baseline gap-x-4 gap-y-1 mb-2">
                  <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                    나집사랩
                  </h4>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium font-mono">
                    2021.01 – 2021.03
                  </span>
                </div>
                <p className="text-[15px] text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
                  부동산 지도 서비스로 프론트엔드 개발 및 유지보수하였습니다.
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-base leading-7">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                    <span>Next.js 기반 유지보수 및 개선</span>
                  </li>
                </ul>
              </div>
            </div>
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
                  className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1.5"
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
                2025.12 – 현재
              </span>
            </div>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-7">
              과거 자산 데이터(비트코인, 주식 등)를 기반으로 수익률을 시뮬레이션하고, 이를 영수증 형태로 시각화한 웹 서비스
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300">
                Next.js
              </span>
              <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300">
                TypeScript
              </span>
              <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300">
                Tailwind CSS
              </span>
              <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300">
                Hono
              </span>
              <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300">
                Cloudflare Workers
              </span>
              <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300">
                D1 (SQLite)
              </span>
            </div>

            <ul className="mt-5 space-y-2 text-slate-600 dark:text-slate-300 text-base leading-7">
              <li className="flex items-start gap-2.5">
                <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                <span>vercel, cloudflare workers, d1(sqlite)를 사용하여 빠르고 관리비용이 저렴한 프로젝트를 구축</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                <span>Cloudflare Workers 상에 Serverless API 서버를 구축, Cloudflare WAF(Custom Rules)를 사용하여 API 접근 시 특정 헤더(x-auth-key)가 부재한 접근을 네트워크 엣지 단계에서 즉시 차단</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                <span>RSC를 사용하여 모든 API 통신을 노드서버 측에서 수행하도록하여 헤더(x-auth-key)의 노출을 차단하고, 자산 데이터가 매일 갱신되는 특성에 맞춰 ISR을 적용하고 빌드 타임을 줄이면서도 항상 최신 데이터를 서빙하도록 구성</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                <span>Cloudflare Workers의 Cron Triggers를 활용해 매일 한번(UTC 00:00) Yahoo Finance 및 환율 API를 통해 자산 가격 및 환율 데이터를 수집하는 시스템 구축</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                <span>
                  Slack Webhook을 연동하여 데이터 갱신 성공/실패 여부를 모니터링하는 체계 마련
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                <span>수집된 대량의 데이터를 Cloudflare D1(SQLite)에 효율적으로 저장하기하고 읽기 위해 Batch Insert 및 Upsert 쿼리를 최적화하여 쓰기 비용 절감</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                <span>next-intl과 Middleware를 활용해 요청 헤더(Accept-Language)에 따른 자동 언어 감지 및 리다이렉션</span>
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
            <p className="mt-2 text-slate-600 dark:text-slate-300 leading-7">
              컴퓨터학과 | 학사 (중퇴)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
