import React, { useState } from "react";
import { useSelector } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { CalenderForm } from "./CalenderForm";
import { FaRegComment } from "react-icons/fa";
import "./calendar.css";

export const Calendar = () => {
  // 이벤트 데이터
  const events = useSelector((state) => state.calendar);

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <Title>{eventInfo.event.title} </Title>
        <Comment>
          <FaRegComment size="11" />
          &nbsp;
          {eventInfo.event._def.extendedProps.comments.length}
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
        <Button onClick={showModalHandler}>이벤트 추가</Button>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
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
