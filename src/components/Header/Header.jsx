import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <Title
        onClick={() => {
          navigate("/");
        }}
      >
        Welendar
      </Title>
      <Quote>
        "오늘 할 일을 내일로 미루지 말자. 그렇지만 미룬다면 오늘 하루가 즐거울
        것이다."
      </Quote>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  width: 100%;
  background-color: white;
  height: 10rem;
  text-align: center;
  border-bottom: 1px solid #333;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  cursor: pointer;
  margin: 0 auto;
`;

const Quote = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
`;
