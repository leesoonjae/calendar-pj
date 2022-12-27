import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  return (
    <ButtonStyled
      type={props.type}
      onClick={props.onClick}
      background={props.background}
      borderColor={props.borderColor}
      hoverBackground={props.hoverBackground}
    >
      {props.children}
    </ButtonStyled>
  );
};
const ButtonStyled = styled.button`
  font: inherit;
  margin: 1rem;
  border: 1px solid ${(props) => props.borderColor || "#1d4fba"};
  /* 1px solid #221770; */
  background: ${(props) => props.background || "#221770"};
  //#221770;
  color: white;
  padding: 0.35rem 1rem;
  cursor: pointer;
  font-size: 0.5rem;
  border-radius: 30px;
  &:hover,
  &:active {
    background: ${(props) => props.hoverBackground || "#1d4fba"};
    /* border: 1px solid ${(props) => props.borderColor || "#1d4fba"}; */
  }
`;
