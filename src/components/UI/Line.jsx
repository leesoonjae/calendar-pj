import React from "react";
import styled from "styled-components";

const LineStyled = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(55, 53, 47, 0.09);
  margin-top: ${(props) => props.px || "8px"};
`;

export const Line = (props) => {
  return <LineStyled px={props.px}></LineStyled>;
};
