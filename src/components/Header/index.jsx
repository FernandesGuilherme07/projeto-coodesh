import { AreaNav } from "./Header.styled";
import { Input } from "../Input";
import ReactSwitch from "react-switch";

export const Header = () => {
  return (
    <AreaNav>
      <div>
        <h1>ARTICLES</h1>
      </div>
      <div>
        <Input />
      </div>
      <div>
        <ReactSwitch
          onChange={() => {}}
          checked={true}
          checkedIcon={false}
          uncheckedIcon={false}
          handleDiameter={20}
          offColor="#322659"
          onColor="#3182ce"
          offHandleColor="#805ad5"
          onHandleColor="#2c5282"
        />
      </div>
    </AreaNav>
  );
};
