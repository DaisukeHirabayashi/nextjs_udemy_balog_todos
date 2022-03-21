import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getAllArticleIds,  getArticleById } from "../../lib/articles"

export default function Article({ article }) {
  const router = useRouter();

  if (router.isFallback || !article) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={article.title}>
      <p className="m-4">
        {"ID : "}
        {article.id}
      </p>
      <p className="mb-4 text-xl font-bold">{article.title}</p>
      <p className="mb-12">{article.created_at}</p>
      <p className="px-10">{article.content}</p>
      <Link href="/article-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllArticleIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = await getArticleById(params.id);
  return {
    props: {
      article,
    },
  };
}