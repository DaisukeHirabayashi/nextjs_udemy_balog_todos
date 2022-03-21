import fetch from "node-fetch"

export async function getAllArticles() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/articles/`)
  );
  const articles = await res.json();
  const filteredArticles = articles.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  return filteredArticles;
}
