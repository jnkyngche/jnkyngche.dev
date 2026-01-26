export interface ProcessStep {
  title: string;
  desc: string;
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
  result: string;
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
    result:
      "긴급 장애 대응 시간을 기존 48시간에서 10분으로 99% 단축하였으며, 앱 최신 버전 유지율 95%를 달성했습니다.",
  },
  {
    slug: "nahouse",
    title: "API 비용 66% 절감: 타일맵 기반 마커 렌더링 최적화",
    summary: "대용량 지도 데이터 렌더링 성능 최적화",
    period: "2021.01 - 2021.03",
    role: "Frontend Developer",
    contribution: "100%",
    tech: ["Next.js", "TypeScript", "Google Maps API", "Optimization"],
    context:
      "사용자가 지도를 이동할 때마다 뷰포트 기준의 모든 마커 데이터를 재호출하여, 불필요한 서버 부하와 AWS API 비용이 과다하게 발생했습니다.",
    process: [
      {
        title: "타일맵(Grid) 캐싱 전략",
        desc: "지도를 격자(Tile) 단위로 나누어, 이미 로딩된 구역의 데이터는 API를 재호출하지 않고 메모리 캐시를 사용하도록 설계했습니다.",
      },
      {
        title: "클라이언트 클러스터링",
        desc: "뷰포트 내 마커 개수가 많을 경우, 브라우저 렌더링 성능 저하를 막기 위해 줌 레벨에 따른 클러스터링(그룹화) 알고리즘을 적용했습니다.",
      },
    ],
    result:
      "API 호출 횟수를 1/3 수준으로 감소시켜 비용을 66% 절감했으며, 지도 드래그 시 발생하던 렌더링 지연(Lag)을 완전히 제거했습니다.",
  },
  {
    slug: "oroji",
    title: "LCP 1.2초 단축: UX 중심의 비동기 데이터 처리 전략",
    summary: "초기 로딩 최적화 및 사용자 이탈률 감소",
    period: "2021.03 - 2022.01",
    role: "Frontend Developer",
    contribution: "50%",
    tech: ["React 18", "Next.js", "Suspense", "ErrorBoundary"],
    context:
      "창고 공유 플랫폼 특성상 초기 진입 시 로딩해야 할 데이터(이미지, 재고, 위치)가 매우 많았습니다. 모든 데이터를 기다린 후 화면을 띄우는 방식 때문에 초기 로딩(White Screen)이 길고 사용자 이탈이 발생했습니다.",
    process: [
      {
        title: "렌더링 전략 분리",
        desc: "SEO가 필요한 정적 정보는 SSG/ISR로, 실시간 재고는 CSR로 분리하여 TTFB를 단축했습니다.",
      },
      {
        title: "Suspense 도입",
        desc: "React Suspense를 활용해 데이터 로딩 중 스켈레톤 UI를 선제적으로 노출하여 체감 속도를 향상시켰습니다.",
      },
      {
        title: "장애 격리",
        desc: "ErrorBoundary를 컴포넌트 단위로 적용하여, 특정 API 에러가 전체 페이지를 깨뜨리지 않도록 방어했습니다.",
      },
    ],
    result:
      "LCP(Largest Contentful Paint)를 1.2초 개선하였으며, 초기 로딩 중 이탈률을 15% 감소시켰습니다.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
