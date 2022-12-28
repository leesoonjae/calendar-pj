import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyled>
      <h1>Welendar</h1>
      <p>
        "오늘 할 일을 내일로 미루지 말자. 그렇지만 미룬다면 오늘 하루가 즐거울
        것이다."
      </p>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  width: 100%;
  margin-top: 2%;
  background-color: white;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    position: relative;
    font-size: 3.7rem;
    margin: 0;
  }

  p {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;
