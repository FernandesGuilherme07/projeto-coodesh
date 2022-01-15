import styled from "styled-components";

export const ButtonContainer = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 40%;
  border-radius: 15px;

  @media (max-width: 735px) {
    margin: 10px 15%;
  }

  button {
    width: 100%;
    background: darkblue;
    color: white;
    border: none;
    padding: 15px 30px;
    cursor: pointer;
    border-radius: 15px;
  }
  *:disabled {
    background: #888;
    cursor: not-allowed;
  }
`;
