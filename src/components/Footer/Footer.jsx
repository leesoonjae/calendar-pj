import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #333;
  height: 10%;
  margin: auto;
  display: flex;
  align-items: center;
  z-index: 10;
`;

const FooterInner = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  width: 70%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <div>김재현</div>
        <div>정하나</div>
        <div>변시윤</div>
        <div>이순재</div>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
