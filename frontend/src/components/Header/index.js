import React from "react";

import { Logo, HeaderContainer } from "./styles";

import Icone from "../../assets/link.png";

const Header = (props) => {
  return (
    <HeaderContainer>
      <Logo src={Icone} alt="Pitu - encurtador de url" />
      <h1>Pitu</h1>
      <p>{props.children}</p>
    </HeaderContainer>
  );
};

export default Header;
