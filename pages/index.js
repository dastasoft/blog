import Link from "next/link";

import { getAllPosts } from "../lib/api";

export default function Index({ allPosts }) {
  return (
    <div>
      {allPosts.map(post => (
        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
          <a>
            <div>{post.title}</div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt"
  ]);

  return {
    props: { allPosts }
  };
}
