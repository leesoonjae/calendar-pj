import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
  text-align: center;
  border-bottom: 1px solid #333;
  height: 15%;
`;
const Header = (props) => {
  return (
    <HeaderStyled>
      <h1>위랜더</h1>
    </HeaderStyled>
  );
};

export default Header;
