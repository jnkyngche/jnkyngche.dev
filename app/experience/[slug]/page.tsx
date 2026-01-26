import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";

interface ExperiencePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | 경력기술서`,
    description: project.summary,
    robots: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Grid Row Component
function DocumentRow({
  label,
  children,
  isLast = false,
}: {
  label: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-[180px_1fr] ${
        !isLast ? "border-b border-slate-200 dark:border-slate-800" : ""
      }`}
    >
      {/* Label Column */}
      <div className="px-6 py-5 bg-slate-50 dark:bg-slate-800/40 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
          {label}
        </span>
      </div>
      {/* Content Column */}
      <div className="px-6 py-5 bg-white dark:bg-transparent">{children}</div>
    </div>
  );
}

export default function ExperienceDetailPage({ params }: ExperiencePageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Back Button - Fixed Position */}
      <div className="fixed top-4 left-4 z-50 print:hidden">
        <Link
          href="/resume"
          className="inline-flex items-center justify-center w-10 h-10 text-slate-500 dark:text-slate-400 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-lg hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-sm"
          title="목록으로"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
      </div>

      {/* Document Container */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Document Header - Outside Grid */}
        <header className="mb-10">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-500 mb-3 tracking-wide uppercase">
            경력기술서
          </p>
          <h1 className="text-2xl sm:text-[1.75rem] font-bold text-slate-800 dark:text-slate-100 leading-snug mb-4">
            {project.title}
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.summary}
          </p>
        </header>

        {/* Document Body - Grid Table */}
        <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden bg-white dark:bg-slate-900/20">
          {/* Row 1: Period & Role */}
          <DocumentRow label="기간 및 역할">
            <p className="text-base text-slate-700 dark:text-slate-300">
              <span className="font-mono text-[15px]">{project.period}</span>
              <span className="mx-3 text-slate-300 dark:text-slate-600">|</span>
              <span>{project.role}</span>
              <span className="mx-3 text-slate-300 dark:text-slate-600">|</span>
              <span className="text-slate-500 dark:text-slate-400">
                기여도 {project.contribution}
              </span>
            </p>
          </DocumentRow>

          {/* Row 2: Tech Stack */}
          <DocumentRow label="사용 기술">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </DocumentRow>

          {/* Row 3: Context (Background + Problem) */}
          <DocumentRow label="배경 및 문제">
            <p className="text-base text-slate-700 dark:text-slate-300 leading-7">
              {project.context}
            </p>
          </DocumentRow>

          {/* Row 4: Process (The Deep Dive) */}
          <DocumentRow label="해결 과정">
            <ul className="space-y-5">
              {project.process.map((step, index) => (
                <li key={index}>
                  <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                    {index + 1}. {step.title}
                  </p>
                  <p className="text-base text-slate-600 dark:text-slate-400 leading-7">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ul>
          </DocumentRow>

          {/* Row 5: Result */}
          <DocumentRow label="성과" isLast>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-7">
              {project.result}
            </p>
          </DocumentRow>
        </div>
      </div>
    </>
  );
}
