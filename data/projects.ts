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
    title: "배포 대기 시간 0초: CodePush 기반 긴급 대응 시스템",
    summary: "앱 심사 없이 즉시 배포 가능한 OTA 시스템 구축",
    period: "2022.06 - 2025.09",
    role: "Frontend Lead",
    contribution: "100%",
    tech: ["React Native", "CodePush", "DevOps", "AppCenter"],
    context:
      "앱 스토어 심사 기간(1~3일)으로 인해 치명적 버그 발생 시 즉각 대응이 불가능하여, 사용자 불만 및 비즈니스 손실이 발생하는 리스크가 있었습니다. 기존 네이티브 배포 방식으로는 긴급 장애 발생 시 롤백이나 핫픽스에 최소 24시간이 소요되었습니다.",
    process: [
      {
        title: "CodePush 파이프라인 구축",
        desc: "네이티브 빌드 없이 JS 번들만 교체하는 OTA(Over-The-Air) 시스템을 도입하여 배포 프로세스를 이원화했습니다.",
      },
      {
        title: "배포 전략 고도화",
        desc: "Staging(사내 검증)과 Production(실운영) 트랙을 분리하고, 사용자 UX를 해치지 않는 'Silent Update' (백그라운드 업데이트) 방식을 적용했습니다.",
      },
      {
        title: "협업 가이드라인 정립",
        desc: "운영팀/기획팀과 협의하여 '심사 없이 배포 가능한 범위(UI 수정, 로직 변경)'와 '심사가 필요한 범위(네이티브 모듈)'의 기준을 문서화했습니다.",
      },
    ],
    result: [
      "긴급 장애 대응 시간을 기존 48시간에서 10분으로 99% 단축",
      "앱 최신 버전 유지율 95% 달성",
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
