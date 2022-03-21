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

export async function getAllArticleIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/articles/`)
  );
  const articles = await res.json();
  return articles.map((article) => {
    return {
      params: {
        id: String(article.id),
      },
    };
  });
}

export async function getArticleById(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/articles/${id}/`)
  );
  const article = await res.json();
  return article;
}
