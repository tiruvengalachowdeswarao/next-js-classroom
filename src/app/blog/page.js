import Link from "next/link";

const BlogPage = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <Link href="/blog/article">article</Link>
    </div>
  );
};
export default BlogPage;
