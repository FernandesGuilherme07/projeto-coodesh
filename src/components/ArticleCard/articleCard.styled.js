import styled from "styled-components";

export const AreaArticleCard = styled.article`
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 100ms ease-in-out;

  *:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 100%;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

export const ArticleContent = styled.div`
  padding: 30px;
`;
