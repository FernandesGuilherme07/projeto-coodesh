import { useCallback, useEffect, useState } from "react";
import "./Home.styled.js";
import { Articles } from "../../components/articles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./Home.styled.js";
import { GlobalStyle } from "../../theme/globals";
import { Button } from "../../components/Button/index.jsx";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [articlesPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState("");

  const loadArticles = async () => {
    const articlesResponse = fetch(
      "https://api.spaceflightnewsapi.net/v3/articles"
    );

    const [articles] = await Promise.all([articlesResponse]);

    const articlesJson = await articles.json();

    return articlesJson;
  };

  const handleLoadArticles = useCallback(async (page, articlesPerPage) => {
    const articles = await loadArticles();

    setArticles(articles.slice(page, articlesPerPage));
    setAllArticles(articles);
  }, []);

  useEffect(() => {
    //console.log(new Date().toLocaleString('pt-BR'));
    handleLoadArticles(0, articlesPerPage);
  }, [handleLoadArticles, articlesPerPage]);

  const loadMoreArticles = () => {
    const nextPage = page + articlesPerPage;
    const nextArticles = allArticles.slice(
      nextPage,
      nextPage + articlesPerPage
    );
    articles.push(...nextArticles);

    setArticles(articles);
    setPage(nextPage);
  };

  const noMoreArticles = page + articlesPerPage >= allArticles.length;

  const filteredArticles = !!searchValue
    ? allArticles.filter((article) => {
        return article.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : articles;

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <>
      <GlobalStyle />
      <Header searchValue={searchValue} handleChange={handleChange} />
      <Container>
        {filteredArticles.length > 0 && (
          <Articles articles={filteredArticles} />
        )}
        {filteredArticles.length === 0 && <p>Não existem artigos =(</p>}
      </Container>

      <div>
        {!searchValue && (
          <Button
            text="Load more Articles"
            onClick={loadMoreArticles}
            disabled={noMoreArticles}
          />
        )}
      </div>

      <Footer searchValue={searchValue} handleChange={handleChange} />
    </>
  );
};

export default Home;
