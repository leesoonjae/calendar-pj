import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  height: 8rem;
  text-align: center;
  border-bottom: 1px solid #333;
  z-index: 5;
  h1 {
    font-size: 50px;
  }
`;

const Header = (props) => {
  return (
    <HeaderStyled>
      <h1>Welander</h1>
    </HeaderStyled>
  );
};

export default Header;
