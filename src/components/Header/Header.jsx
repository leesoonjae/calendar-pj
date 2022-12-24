import React, { useState } from "react";
import styled from "styled-components";
import { CalenderForm } from "../Calendar/CalenderForm";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";

const HeaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  height: 8rem;
  text-align: center;
  border-bottom: 1px solid #333;
`;

const Header = (props) => {
  
  return (
    <HeaderStyled>
      <h1>위랜더</h1>
      
      
    </HeaderStyled>
  );
};

export default Header;