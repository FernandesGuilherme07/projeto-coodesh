import styled from "styled-components";

export const AreaNav = styled.nav`
  display: flex;
  background-color: #e0e0ee;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  padding: 10px 10%;
  align-items: center;
  margin-bottom: 5px;
  @media (max-width: 630px) {
    padding: 10px;
  }

  input {
    width: 350px;
    height: 35px;
    border-radius: 15px;
    border: 0;
    text-align: center;

    @media (max-width: 630px) {
      width: 300px;
    }
    @media (max-width: 440px) {
      width: 200px;
    }
    @media (max-width: 330px) {
      width: 180px;
    }
  }
  input:focus {
    outline: none;
  }
`;
