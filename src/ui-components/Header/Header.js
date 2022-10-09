import React from "react";
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
        <li>Search Box Component</li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;
