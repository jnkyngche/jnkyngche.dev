import Image from "next/image";
import { ResumePrintWrapper } from "./resume-print-wrapper";

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
    <ResumePrintWrapper>
      <div
        className="max-w-none space-y-10 print:space-y-7 text-base print:text-[14.5px]"
        id="resume-content"
      >
        {/* 헤더 섹션 */}
        <section className="pt-6 pb-10 print:pt-3 print:pb-6 border-b border-slate-200/70 dark:border-slate-800/70">
          <div className="grid grid-cols-[1fr_auto] items-start gap-x-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-[2.75rem] leading-tight font-bold tracking-tight text-slate-900 dark:text-slate-50">
                최준경
              </h1>
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="tel:01024601861"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  010-2460-1861
                </a>
                <span className="text-slate-300 dark:text-slate-600 select-none">
                  |
                </span>
                <a
                  href="mailto:jnkyngche@gmail.com"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  jnkyngche@gmail.com
                </a>
                <span className="text-slate-300 dark:text-slate-600 select-none">
                  |
                </span>
                <a
                  href="https://jnkyngche.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
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
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  jnkyngche.dev
                </a>
              </div>
              <p className="mt-4 print:mt-2 text-slate-600 dark:text-slate-300 text-base leading-7 print:leading-6">
                누적된 기술 부채와 시스템 구조가 팀의 속도를 저해하는 순간을
                포착해 기민하게 움직일 수 있는 환경으로 개선해 왔습니다. 이러한
                구조적 안정화를 바탕으로 기술 그 자체보다 회사가 해결하고자 하는
                고객의 문제에 먼저 집중하는 개발을 지향합니다.
              </p>
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

        {/* 경력 섹션 */}
        <section className="space-y-6 print:space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            경력
          </h2>

          <ol className="relative space-y-8 print:space-y-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:-translate-x-1/2 before:bg-slate-200 dark:before:bg-slate-800">
            <li className="relative pl-6">
              <span className="absolute left-2 top-[5px] -translate-x-1/2 flex h-4 w-4 items-center justify-center">
                <span className="h-3 w-3 rounded-full bg-slate-500 dark:bg-slate-400 border-2 border-white dark:border-slate-950" />
              </span>

              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                  하우저 (Serise B)
                </h3>
                <span className="text-[14px] text-slate-500 dark:text-slate-400 font-mono flex-shrink-0">
                  2022.06 – 2025.10
                </span>
              </div>
              <p className="mt-1 mb-4 print:mb-2 text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed">
                쿠팡·네이버에서 구매한 가구의 입고(창고)→배송→시공/설치→반품까지
                전 과정을 지원하는 서비스의 운영 웹(관리자/고객/물류) 및
                설치/배송 기사용 모바일 앱 개발을 담당했음
              </p>

              <ul className="space-y-4 print:space-y-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <li className="space-y-2">
                  <div className="flex items-start gap-1.5">
                    <span className="mt-[0.65rem] h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                    <span className="font-medium text-slate-800 dark:text-slate-100">
                      가구기사 앱 크로스플랫폼 리뉴얼
                    </span>
                  </div>
                  <div className="ml-5 space-y-2 text-[14px]">
                    <p className="text-[15px] text-slate-600 dark:text-slate-300">
                      기존 안드로이드 전용 앱 운영 중, 안드로이드 개발자의 잦은
                      이탈과 수급 어려움으로 유지보수에 공백이 생겼고, iOS
                      기기를 사용하는 기사들은 앱 자체를 사용할 수 없는 문제가
                      있었음.
                    </p>
                    <ul className="space-y-1 ml-3 text-slate-500 dark:text-slate-400">
                      <li className="flex items-start gap-1.5">
                        <span className="mt-[0.65em] h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                        <span>
                          기존 안드로이드 앱(Java)을 분석한 뒤 React Native로
                          포팅, iOS·Android을 단일 코드베이스로 재구축
                        </span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="mt-[0.65em] h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                        <span>
                          CodePush 도입으로 스토어 심사 없이 JS 번들을 즉시
                          배포할 수 있는 핫픽스 체계 마련
                        </span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="mt-[0.65em] h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                        <span>
                          GitLab CI/CD 파이프라인을 구축하여 테스트(Staging)와
                          운영(Production) 배포 환경을 격리
                        </span>
                      </li>
                    </ul>
                    <p className="flex items-start gap-1.5 text-[14.5px] text-slate-800 dark:text-slate-100">
                      <span className="flex-shrink-0">→</span>
                      <span>
                        iOS 기사들의 앱 사용이 가능해졌고, CodePush를 통해 수정
                        사항을 스토어 심사 없이 즉시 배포할 수 있게 되어 긴급
                        상황에 즉각적인 대응이 가능해짐
                      </span>
                    </p>
                  </div>
                </li>

                <li className="space-y-2">
                  <div className="flex items-start gap-1.5">
                    <span className="mt-[0.65rem] h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                    <span className="font-medium text-slate-800 dark:text-slate-100">
                      기존 JSP에서 Next.js로 점진적 전환
                    </span>
                  </div>
                  <div className="ml-5 space-y-2 text-[14px]">
                    <p className="text-[15px] text-slate-600 dark:text-slate-300">
                      기존 JSP 환경에서 스크립트 간의 비동기 로딩 타이밍
                      불일치로 인해 간헐적으로 이벤트가
                      동작하지 않는 버그가 반복됐고,
                      공통 컴포넌트도 없어 코드 중복이 심했음. 또한 JSP 구조에
                      익숙하지 않은 신규 개발자는 별도 교육 없이 바로 투입하기
                      어려워 온보딩 비용도 높았음.
                    </p>
                    <ul className="space-y-1 ml-3 text-slate-500 dark:text-slate-400">
                      <li className="flex items-start gap-1.5">
                        <span className="mt-[0.65em] h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                        <span>
                          JSP를 일괄 교체하기 어려운 상황에서, CloudFront
                          path-based routing으로 신규 영역을 Next.js 서버로
                          분기해 점진적 전환 기반 마련
                        </span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="mt-[0.65em] h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                        <span>
                          기존 JSP 중 전환 비용이 낮은 페이지를 선제적으로
                          Next.js로 마이그레이션하여 점진적 전환 수행
                        </span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="mt-[0.65em] h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                        <span>
                          반복 사용되는 UI 요소(버튼, 테이블, 팝업 등)를 공통
                          컴포넌트로 분리하여 UI 일관성을 확보하고 중복 코드를
                          제거함
                        </span>
                      </li>
                    </ul>
                    <p className="flex items-start gap-1.5 text-[14.5px] text-slate-800 dark:text-slate-100">
                      <span className="flex-shrink-0">→</span>
                      <span>
                        고질적인 JS 비동기 로딩 타이밍 불일치 문제가 해소되어
                        이벤트 오동작이 사라졌고, 공통 컴포넌트 도입으로 코드
                        중복도 크게 줄었음. 신규 개발자가 별도 교육 없이 React
                        기반 코드베이스에 즉시 합류할 수 있게 되어 온보딩 비용도
                        감소함
                      </span>
                    </p>
                  </div>
                </li>

                <li className="space-y-2">
                  <div className="flex items-start gap-1.5">
                    <span className="mt-[0.65rem] h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                    <span className="font-medium text-slate-800 dark:text-slate-100">
                      쿠팡·네이버 스마트스토어 상품 연동 관리자 페이지 구현
                    </span>
                  </div>
                  <div className="ml-5 space-y-2 text-[14px]">
                    <p className="text-[15px] text-slate-600 dark:text-slate-300">
                      JSP 기반 구조에서는 상품 수정 시 전체 페이지를 다시
                      렌더링해야 했기 때문에 팝업 작업 이후 목록 컨텍스트가
                      유지되지 않았고, 반복되는 새로고침으로 관리자 업무 흐름이
                      자주 끊겼음.
                    </p>
                    <ul className="space-y-1 ml-3 text-slate-500 dark:text-slate-400">
                      <li className="flex items-start gap-1.5">
                        <span className="mt-[0.65em] h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                        <span>
                          React 기반 SPA 구조와 TanStack Query를 도입해 목록
                          영역만 부분 갱신하도록 변경
                        </span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="mt-[0.65em] h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                        <span>
                          서버에서 prefetchQuery로 초기 데이터를 미리 캐싱한 뒤
                          hydration하여 초기 렌더 시 중복 API 요청을 줄이고 첫
                          화면 표시 속도 개선
                        </span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="mt-[0.65em] h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                        <span>
                          Mutation 성공 시 invalidateQueries로 목록을 자동
                          재조회해 수동 새로고침 없이 최신 상태 유지
                        </span>
                      </li>
                    </ul>
                    <p className="flex items-start gap-1.5 text-[14.5px] text-slate-800 dark:text-slate-100">
                      <span className="flex-shrink-0">→</span>
                      <span>
                        상품 수정 후 목록을 다시 불러오거나 페이지를 새로고침할
                        필요 없이 결과가 즉시 반영되어 관리자의 피로감이 줄고
                        업무 흐름이 끊기지 않게 됨
                      </span>
                    </p>
                  </div>
                </li>

                <li className="space-y-2">
                  <div className="flex items-start gap-1.5">
                    <span className="mt-[0.65rem] h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                    <span className="font-medium text-slate-800 dark:text-slate-100">
                      고객사 버그 문의 실시간 대응
                    </span>
                  </div>
                </li>
              </ul>
            </li>

            <li className="relative pl-6">
              <span className="absolute left-2 top-[5px] -translate-x-1/2 flex h-4 w-4 items-center justify-center">
                <span className="h-3 w-3 rounded-full bg-slate-500 dark:bg-slate-400 border-2 border-white dark:border-slate-950" />
              </span>

              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                  셰어킴 (Seed)
                </h3>
                <span className="text-[14px] text-slate-500 dark:text-slate-400 font-mono flex-shrink-0">
                  2021.01 – 2022.01
                </span>
              </div>
              <p className="mt-1 mb-4 print:mb-2 text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed">
                오로지(창고 공유 중개·한라건설 외주), 한국경제 홈페이지(외주),
                나집사랩(인하우스·부동산 지도 서비스)의 프론트엔드 개발 및
                유지보수를 담당했음
              </p>

              <ul className="space-y-4 print:space-y-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <li className="space-y-2">
                  <div className="flex items-start gap-1.5">
                    <span className="mt-[0.65rem] h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                    <span className="font-medium text-slate-800 dark:text-slate-100">
                      외주 프로젝트 프론트엔드 설계, 기존 레거시 유지보수
                    </span>
                  </div>
                  <div className="ml-5 space-y-2 text-[14px]">
                    <ul className="space-y-1 ml-3 text-slate-500 dark:text-slate-400">
                      <li className="flex items-start gap-1.5">
                        <span className="mt-[0.65em] h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                        <span>
                          Next.js, TypeScript 기반 프론트엔드 아키텍처를
                          처음부터 설계하고, Recoil로 전역 상태 구조를 정의해
                          기능 확장에 유연한 상태 관리 체계 마련
                        </span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="mt-[0.65em] h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                        <span>
                          결제(KG모빌리언스)·채팅(Sendbird) 외부 모듈 연동
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
          </ol>
        </section>

        {/* 프로젝트 섹션 */}
        <section className="space-y-6 print:space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            개인 프로젝트
          </h2>

          <div className="space-y-10 print:space-y-6">
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
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
              </div>

              <p className="mt-1 mb-3 text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed">
                과거 자산 데이터를 기반으로 수익률을 시뮬레이션하고 영수증
                형태로 시각화한 웹 서비스
              </p>

              <ul className="space-y-1 ml-3 text-[14px] text-slate-500 dark:text-slate-400">
                <li className="flex items-start gap-1.5">
                  <span className="mt-[0.65em] h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                  <span>
                    Vercel + Cloudflare Workers/D1 기반 서버리스 아키텍처 구성
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="mt-[0.65em] h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                  <span>
                    Cloudflare WAF Custom Rules 및 인증 헤더 검증으로 API 보호
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="mt-[0.65em] h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                  <span>
                    Cron Trigger + Slack Webhook 기반 데이터 수집 및 장애
                    모니터링 자동화
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 교육 섹션 */}
        <section className="space-y-6 print:space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            학력
          </h2>

          <div className="space-y-8 print:space-y-5">
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                  평택대학교
                </h3>
                <span className="text-[14px] text-slate-500 dark:text-slate-400 font-mono flex-shrink-0">
                  2016.03 – 2017.09
                </span>
              </div>
              <p className="mt-1 text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed">
                컴퓨터학과 | 학사 (중퇴)
              </p>
            </div>
          </div>
        </section>
      </div>
    </ResumePrintWrapper>
  );
}
