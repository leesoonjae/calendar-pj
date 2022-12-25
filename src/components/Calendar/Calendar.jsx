import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { CalenderForm } from "./CalenderForm";
import { FaRegComment } from "react-icons/fa";
import { __getPosts } from "../../redux/modules/calendarSlice";
import "./calendar.css";

export const Calendar = () => {
  // 이벤트 데이터
  const { posts, isLoading, error } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <Title>{eventInfo.event.title} </Title>
        <Comment>
          <FaRegComment size="11" />
          &nbsp;
          {eventInfo.event._def.extendedProps.comment}
        </Comment>
      </>
    );
  };

  // 모달
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal onClick={hideModalHandler}>{<CalenderForm />}</Modal>
      )}
      <CalendarContainer>
        <MainButtonStyled>
          <Button onClick={showModalHandler}>New</Button>
        </MainButtonStyled>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={posts}
          eventContent={renderEventContent}
          eventClick={showModalHandler}
          dateClick={showModalHandler}
          editable={true}
          eventTextColor="initial"
        />
      </CalendarContainer>
    </>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  align-items: center;
  padding: 2rem;
  margin-top: 8rem;
`;

const Title = styled.span`
  display: block;
  width: 78%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: bold;
`;

const Comment = styled.span`
  font-weight: normal;
  float: right;
  margin-top: -1rem;
`;

const MainButtonStyled = styled.div`
  position: absolute;
  top: 16.3%;
  right: 19%;
`;
