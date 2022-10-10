import React from "react";
import Button from "../Button/Button";
import { SearchBarStyled } from "./SearchBarStyles";

const SearchBar = (props) => {
  const {} = props;

  return (
    <SearchBarStyled>
      <div className="searchBarContainer">
        <input></input>
        <Button primary="" btnText="Search" />
      </div>
    </SearchBarStyled>
  );
};

export default SearchBar;
