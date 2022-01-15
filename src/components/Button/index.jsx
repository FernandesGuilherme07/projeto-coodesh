import { ButtonContainer } from "./button.styled";

export const Button = ({ text, onClick, disabled }) => (
  <ButtonContainer>
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  </ButtonContainer>
);
