import Link from "next/link";

export default function Article({ article }) {
  return (
    <div>
      <span>{article.id}</span>
      {" : "}
      <Link href={`/articles/${article.id}`}>
        <span className="cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600">
          {article.title}
        </span>
      </Link>
    </div>
  );
}