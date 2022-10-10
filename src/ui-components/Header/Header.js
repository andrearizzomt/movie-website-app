import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { HeaderLink, HeaderStyled } from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLink to="/">
        <h1>MooVees</h1>
      </HeaderLink>
      <ul className="menuLinks">
        <HeaderLink to="/about">
          <li>About Us</li>
        </HeaderLink>
        <li>
          <SearchBar />
        </li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;
