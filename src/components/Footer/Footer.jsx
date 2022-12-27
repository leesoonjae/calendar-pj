import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  __getPosts,
  __filteredEvents,
} from "../../redux/modules/calendarSlice";

const Footer = () => {
  const user = ["변시윤", "김재현", "정하나", "이순재"];
  const dispatch = useDispatch();

  // 마우스오버시 팀원별 투두리스트 필터링 반환
  const showFilter = (e) => {
    dispatch(__filteredEvents(e.target.innerText));
  };
  // 마우스리브시 모든 투두리스트 반환
  const hideFilter = () => {
    dispatch(__getPosts());
  };

  return (
    <FooterContainer>
      <FooterInner>
        {user.map((item, i) => {
          return (
            <Name
              key={i}
              onMouseOver={(e) => showFilter(e)}
              onMouseLeave={() => hideFilter()}
            >
              {item}
            </Name>
          );
        })}
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  flex-direction: column;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #333;
  height: 7%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterInner = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  width: 70%;
  cursor: pointer;
`;

const Name = styled.h3``;
