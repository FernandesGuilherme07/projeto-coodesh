import styled from "styled-components";

export const InputText = styled.input`
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

  *:focus {
    outline: none;
  }
`;
