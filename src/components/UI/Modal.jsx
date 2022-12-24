import React from "react";
import styled from "styled-components";

const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.35);
`;

const ModalStyled = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  height: calc(100% - 144px);
  padding: 1rem;
  border-radius: 14px;
  background-color: white;
  box-shadow: rgb(15 15 15 / 2%) 0px 0px 0px 1px, rgb(15 15 15 / 3%) 0px 3px 6px,
    rgb(15 15 15 / 6%) 0px 9px 24px;
  top: 72px;
  left: 72px;
  right: 72px;
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
`;

export const Backdrop = (props) => {
  return (
    <>
      <BackdropStyled onClick={props.onClick}></BackdropStyled>
    </>
  );
};

const ModalOverlay = (props) => {
  return (
    <ModalStyled>
      <div>{props.children}</div>
    </ModalStyled>
  );
};

export const Modal = (props) => {
  return (
    <>
      <Backdrop onClick={props.onClick}></Backdrop>
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
};
