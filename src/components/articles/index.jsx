import { ArticleCard } from "../ArticleCard";
import { AreaArticles } from "./articles.styled";

export const Articles = ({ articles }) => {
  return (
    <AreaArticles>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </AreaArticles>
  );
};
