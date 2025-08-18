import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="prose dark:prose-invert">
      {sortedPosts.map((post) => (
        <Link key={post._id} href={post.slug} className="no-underline">
          <article className="cursor-pointer p-4 mb-4 transition-transform duration-200 hover:scale-[1.02]">
            <h2>{post.title}</h2>
            {post.description && <p>{post.description}</p>}
          </article>
        </Link>
      ))}
    </div>
  );
}
