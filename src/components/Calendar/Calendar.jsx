import React, { useState } from "react";
import { useSelector } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { CalenderForm } from "./CalenderForm";

const CalendarContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  align-items: center;
  padding: 2rem;
  margin-top: 8rem;
`;

export const Calendar = () => {
  // 이벤트 데이터
  const events = useSelector((state) => state.calendar);

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
        <Button onClick={showModalHandler}>상세페이지 임시</Button>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={showModalHandler}
          editable={true}
          droppable={true}
        />
      </CalendarContainer>
    </>
  );
};

// 필터링 리듀서 생성
