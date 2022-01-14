import { AreaFooter } from "./footer.styled";

export const Footer = () => {
  const currentDate = new Date().getFullYear();
  return <AreaFooter>© {currentDate} - Guilherme Fernandes</AreaFooter>;
};
