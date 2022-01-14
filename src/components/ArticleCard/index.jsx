import { AreaArticleCard, ArticleContent } from "./articleCard.styled";

export const ArticleCard = ({ article }) => {
  return (
    <AreaArticleCard>
      <img src={article.imageUrl} alt={article.title} />
      <ArticleContent>
        <a href={article.url} target="_blank" rel="noreferrer">
          <h2>{article.title}</h2> <br />
          <p>{article.summary}</p>
        </a>
      </ArticleContent>
    </AreaArticleCard>
  );
};
