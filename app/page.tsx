import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default function Home() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const postsByYear = sortedPosts.reduce<Record<number, typeof sortedPosts>>(
    (acc, post) => {
      const year = new Date(post.date).getFullYear();
      if (!acc[year]) acc[year] = [];
      acc[year].push(post);
      return acc;
    },
    {}
  );

  const years = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="mt-8 space-y-10">
      {years.map((year) => (
        <section key={year}>
          <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 mb-3 tracking-widest">
            {year}
          </p>
          <ul className="divide-y divide-slate-100 dark:divide-slate-800">
            {postsByYear[year].map((post) => {
              const date = new Date(post.date);
              const month = date.toLocaleDateString("ko-KR", { month: "long" });
              const day = date.getDate();

              return (
                <li key={post._id}>
                  <Link
                    href={post.slug}
                    className="flex items-center justify-between gap-4 py-3 group no-underline"
                  >
                    <span className="text-slate-800 dark:text-slate-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150 truncate">
                      {post.title}
                    </span>
                    <span className="shrink-0 text-sm text-slate-400 dark:text-slate-500 tabular-nums">
                      {month} {day}일
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
