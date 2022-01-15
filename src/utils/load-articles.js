import axios from "axios";

export const loadArticles = async () => {
  const articlesResponse = fetch(
    "https://api.spaceflightnewsapi.net/v3/articles"
  );

  const [articles] = await Promise.all([articlesResponse]);

  const articlesJson = await articles.json();

  return articlesJson();
};
