import styled from "styled-components";

export const AreaNav = styled.header`
  display: flex;
  background-color: #e0e0ee;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  padding: 10px 10%;
  align-items: center;
  margin-bottom: 5px;
  @media (max-width: 460px) {
    justify-content: center;
  }
  img {
    height: 70px;
    width: 150px;
    border-radius: 5px;
  }
`;
