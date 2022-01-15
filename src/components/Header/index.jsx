import { AreaNav } from "./Header.styled";
import { Input } from "../Input";
import Logo from "./img/cover.png";

export const Header = ({ searchValue, handleChange }) => {
  return (
    <AreaNav>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <Input searchValue={searchValue} handleChange={handleChange} />
      </div>
    </AreaNav>
  );
};
