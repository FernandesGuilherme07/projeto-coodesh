import { AreaFooter } from "./footer.styled";

export const Footer = ({ searchValue, handleChange }) => {
  const currentDate = new Date().getFullYear();
  return (
    <AreaFooter>
      <h3>{currentDate} © - Guilherme Fernandes</h3>
    </AreaFooter>
  );
};
