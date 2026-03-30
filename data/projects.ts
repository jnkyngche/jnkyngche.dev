export interface ProcessStep {
  title: string;
  desc: string;
  items?: { title: string; desc: string }[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  period: string;
  role: string;
  contribution: string;
  tech: string[];
  context: string;
  process: ProcessStep[];
  result: string[];
}

export const projects: Project[] = [
  {
    slug: "hauser",
    title: "크로스 플랫폼 앱 신규 런칭 및 무중단 배포 파이프라인 구축",
    summary: "iOS 앱 신규 런칭 및 OTA 시스템 도입으로 배포 대기 시간 10분으로 단축",
    period: "2022.06 - 2025.09",
    role: "Frontend Lead",
    contribution: "100%",
    tech: ["React Native", "CodePush", "AppCenter"],
    context:
      "기존 서비스는 안드로이드(AOS) 앱만 운영되고 있어 iOS 사용자 유입에 한계가 컸습니다. 또한 네이티브 앱 특성상 치명적인 버그 발생 시, 양대 마켓(App Store, Play Store) 심사 기간(최소 1~3일)으로 인해 긴급 핫픽스가 불가능하여 비즈니스 손실 리스크가 존재했습니다.",
    process: [
      {
        title: "React Native 도입으로 크로스 플랫폼 앱 구축",
        desc: "단일 코드베이스(JS/TS)로 기존 안드로이드 앱을 리뉴얼하고 iOS 앱을 신규 런칭하여 개발 리소스를 최적화하고 타겟 플랫폼을 확장했습니다.",
      },
      {
        title: "CodePush 기반 긴급 대응 파이프라인(OTA) 구축",
        desc: "네이티브 코드 변경이 없는 UI 및 비즈니스 로직 수정의 경우, 스토어 심사를 우회하여 JS 번들만 직접 교체하는 Over-The-Air(OTA) 업데이트 시스템을 도입했습니다.",
      },
      {
        title: "배포 전략 고도화 및 운영 프로세스 정립",
        desc: "Staging(사내 검증)과 Production(실운영) 배포 트랙을 분리하여 안정성을 확보하고, 사용자 UX를 해치지 않는 'Silent Update(백그라운드 업데이트)' 방식을 적용했습니다.",
        items: [
          {
            title: "배포 트랙 분리",
            desc: "Staging → Production 단계별 검증으로 운영 안정성 확보.",
          },
          {
            title: "협업 가이드라인 문서화",
            desc: "기획/운영팀과 협의하여 '심사 없이 즉시 배포 가능한 범위(UI·로직)'와 '심사가 필요한 네이티브 범위'의 기준을 문서화하여 협업 효율을 높임.",
          },
        ],
      },
    ],
    result: [
      "안드로이드/iOS 양대 마켓 통합 운영 환경 구축",
      "긴급 장애 대응 배포 소요 시간을 기존 최소 24시간에서 10분 이내로 99% 단축",
      "강제 업데이트 없이 앱 최신 버전 유지율 95% 달성",
    ],
  },
  {
    slug: "hauser-admin",
    title: "레거시 어드민 상태 분리 및 App Router 무중단 마이그레이션",
    summary: "RSC · TanStack Query · Redux 역할 분리로 레거시 보일러플레이트 제거 및 로딩 성능 개선",
    period: "2022.06 - 2025.10",
    role: "Frontend Lead",
    contribution: "100%",
    tech: ["Next.js (App Router)", "TanStack Query", "Redux", "React Suspense"],
    context:
      "기존 어드민은 거대한 Redux 스토어 하나에 UI 상태와 API 비동기 통신(Thunk/Saga) 데이터가 모두 강하게 결합되어 있었습니다. 이로 인해 1) 상태 동기화의 어려움, 2) 무거운 보일러플레이트로 인한 유지보수성 저하, 3) 초기 로딩 지연 문제가 심각했으나, 비즈니스 일정상 Redux를 한 번에 걷어내는 것은 리스크가 매우 컸습니다.",
    process: [
      {
        title: "상태의 역할에 따른 아키텍처 3원화 (RSC · Query · Redux)",
        desc: "거대한 레거시를 안전하게 분해하기 위해 데이터의 성격을 3가지로 분류하고 최적의 도구를 위임했습니다.",
        items: [
          {
            title: "초기 정적 데이터 → App Router/RSC",
            desc: "초기 렌더링에 필요한 기준 데이터는 서버 컴포넌트에서 직접 페칭하여 클라이언트 번들 사이즈를 줄이고 LCP를 최적화.",
          },
          {
            title: "동적 서버 상태 → TanStack Query",
            desc: "Redux에 묶여있던 복잡한 비동기 API 통신을 TanStack Query로 분리하여, 캐싱·무효화(Invalidation)·로딩/에러 처리를 자동화하고 보일러플레이트를 대폭 걷어냄.",
          },
          {
            title: "순수 클라이언트 UI 상태 → Redux",
            desc: "Redux는 다단계 입력 폼, 복잡한 전역 필터링 등 브라우저 내에서만 발생하는 무거운 비즈니스 로직과 UI 상태만을 전담하도록 역할을 축소·격리.",
          },
        ],
      },
      {
        title: "App Router 전환 및 Suspense 스트리밍 적용",
        desc: "상태 관리의 의존성이 낮아진 컴포넌트들을 구버전 Next.js에서 App Router로 점진적으로 마이그레이션했습니다. 데이터 패칭이 TanStack Query로 이관된 컴포넌트들에 Suspense를 결합하여, 무거운 데이터 그리드가 로드되는 동안 스켈레톤 UI를 보여주는 스트리밍(Streaming) 렌더링을 구현했습니다.",
      },
    ],
    result: [
      "비동기 로직(서버 상태)을 TanStack Query로 이관하여 Redux 보일러플레이트 감소 및 유지보수성 확보",
      "비즈니스 로직 훼손 없이 상태를 점진적으로 분리하여 무장애 App Router 마이그레이션 달성",
      "App Router와 Suspense 도입으로 복잡한 물류 데이터 페이지의 초기 체감 로딩 속도 획기적 개선",
    ],
  },
  {
    slug: "oroji",
    title: "LCP 1.2초 단축: 데이터 특성을 고려한 렌더링 전략 개편",
    summary: "창고 정보 페이지 초기 로딩 최적화 및 비동기 UX 개선",
    period: "2021.03 - 2022.01",
    role: "Frontend Developer",
    contribution: "50%",
    tech: ["React", "Next.js"],
    context:
      "창고 공유 플랫폼의 두 핵심 페이지에서 각각 다른 성격의 성능 문제가 발생했습니다. 창고 상세 페이지는 정적 데이터를 매번 새로 불러와 초기 빈 화면(White Screen) 노출이 길었고, 창고 찾기·예약 페이지는 여러 API 동시 호출 시 일부 실패가 전체 페이지 중단으로 이어졌습니다.",
    process: [
      {
        title: "창고 정보 페이지 — 렌더링 전략 개편",
        desc: "이미지·위치·스펙 등 정적 데이터와 당일 재고 같은 실시간 데이터가 혼재하여 매번 함께 로딩되는 구조를, 데이터 특성에 따라 렌더링 방식을 분리했습니다.",
        items: [
          {
            title: "SSG 도입",
            desc: "자주 변경되지 않는 정적 데이터에 Next.js SSG를 적용해 페이지를 사전 렌더링.",
          },
          {
            title: "ISR 캐시 전략",
            desc: "갱신 주기를 고려해 revalidate를 반나절(12시간)로 설정하여 서버 부하를 최소화하면서도 최신 상태를 유지.",
          },
          {
            title: "CSR 분리",
            desc: "당일 재고 등 실시간 확인이 필수적인 데이터만 클라이언트에서 후속 페칭하도록 분리.",
          },
        ],
      },
      {
        title: "창고 찾기/예약 페이지 — 비동기 UX 개선 및 장애 격리",
        desc: "여러 API를 동시에 호출하는 구조에서 대기 시간 누적과 단일 API 실패가 전체 페이지 중단으로 이어지는 문제를 해결했습니다.",
        items: [
          {
            title: "Suspense 도입",
            desc: "데이터 페칭 구간을 분리하고 로딩 중 스켈레톤 UI를 선제적으로 노출해 체감 반응 속도 향상.",
          },
          {
            title: "ErrorBoundary 적용",
            desc: "컴포넌트 단위로 에러 방어 로직을 구축하여, 특정 API(실시간 재고 조회, 예약 가능 여부 확인) 실패 시 해당 영역만 에러 상태를 렌더링하도록 안정성 확보.",
          },
        ],
      },
    ],
    result: [
      "LCP 3.4초 → 2.2초로 1.2초 단축, Google Core Web Vitals '개선 필요(Needs Improvement)' → '우수(Good)' 구간 진입",
      "ErrorBoundary 도입으로 특정 API 실패를 컴포넌트 단위로 격리, 전체 페이지 중단 장애 제거",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
