import styled from "styled-components";

export const AreaArticles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;

  background: #e0e0ee;
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
