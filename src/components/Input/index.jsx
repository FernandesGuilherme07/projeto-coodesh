import { InputText } from "./input.styled";
import { BiSearchAlt2 } from "react-icons/bi";

export const Input = ({ searchValue, handleChange }) => {
  return (
    <InputText>
      <BiSearchAlt2 />
      <input value={searchValue} onChange={handleChange} type="search" />
    </InputText>
  );
};
