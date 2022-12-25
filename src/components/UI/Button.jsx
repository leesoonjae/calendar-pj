import React from "react";
import styled from "styled-components";
import theme from "../../style/theme";

const ButtonStyled = styled.button`
  font: inherit;
  margin: 1rem;
  border: 1px solid ${(props) => props.color || props.theme.color.blue};
  background: ${(props) => props.color || props.theme.color.blue};
  color: white;
  padding: 0.35rem 1rem;
  cursor: pointer;
  font-size: 0.5rem;
  border-radius: 30px;
  &:hover,
  &:active {
    background: #1d4fba;
    border-color: #1d4fba;
  }
`;

export const Button = (props) => {
  return (
    <ButtonStyled color={props.color} type={props.type} onClick={props.onClick}>
      {props.children}
    </ButtonStyled>
  );
};
