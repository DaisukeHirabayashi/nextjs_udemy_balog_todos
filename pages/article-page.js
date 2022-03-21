import Layout from "../components/Layout";
import Link from "next/link";
import { getAllArticles } from "../lib/articles";
import Article from "../components/Article";

export default function ArticlePage( { filteredArticles } ) {
  return (
    <Layout title="Blog page">
      <ul>
        {filteredArticles &&
          filteredArticles.map((article) => <Article key={article.id} article={article} />)}
      </ul>
      <Link href="/main-page" passHref>
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
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  );
}

export async function getStaticProps() {
  const filteredArticles = await getAllArticles();
  console.log('aaa')
  return {
    props: { filteredArticles },
  };
}