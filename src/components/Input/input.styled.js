import styled from "styled-components";

export const InputText = styled.div`
  width: 355px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;

  input {
    width: 300px;
    height: 35px;
    border-radius: 15px;
    border: 0;
    text-align: center;
  }
  input:focus {
    outline: none;
  }
  svg {
    margin-left: 10px;
  }
  @media (max-width: 735px) {
    width: 300px;
  }
  @media (max-width: 600px) {
    width: 200px;
  }
  @media (max-width: 460px) {
    display: none;
  }
`;
