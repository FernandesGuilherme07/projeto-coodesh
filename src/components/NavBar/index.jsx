import { AreaNav } from "./NavBar.styled";
import { Input } from "../Input";

export const NavBar = () => {
  return (
    <AreaNav>
      <div>
        <h1>ARTICLES</h1>
      </div>
      <div>
        <Input />
      </div>
    </AreaNav>
  );
};
