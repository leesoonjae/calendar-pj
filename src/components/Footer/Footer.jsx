import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { filterEvent } from "../../redux/modules/calendarSlice";

const Footer = () => {
  const user = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const filterHandler = (e) => {
    // const result = user.filter((item) => {
    //   if (item.userId === e.target.innerText) {
    //     return item;
    //   }
    // });
    // console.log(result);
    dispatch(filterEvent(e.target.innerText));
  };

  return (
    <FooterContainer>
      <FooterInner>
        {user.map((item, i) => {
          return (
            <Name key={i} onClick={(e) => filterHandler(e)}>
              {item.userId}
            </Name>
          );
        })}
      </FooterInner>
      <Quote>
        "오늘 할 일을 내일로 미루지 말자. 그렇지만 미룬다면 오늘 하루가 즐거울
        것이다."
      </Quote>
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
  cursor: pointer;
`;

const Name = styled.h3``;

const Quote = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
`;
