import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { CalenderForm } from "./CalenderForm";
import { useDispatch } from "react-redux";
import { __addPosts } from "../../redux/modules/calendarSlice";
import { v4 as uuidv4 } from "uuid";

export const Calendar = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  // const newTodo = {
  //   id: uuidv4(),
  //   title: todoTitleValue,
  //   date: todoDateValue,
  //   desc: todoContentValue,
  // };

  const hideModalHandler = () => {
    setShowModal(false);
    dispatch(__addPosts());
  };

  return (
    <>
      {showModal && (
        <Modal onClick={hideModalHandler}>{<CalenderForm />}</Modal>
      )}
      <CalendarContainer>
        <Button onClick={showModalHandler}>상세페이지 임시</Button>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </CalendarContainer>
    </>
  );
};

const CalendarContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  align-items: center;
  padding: 2rem;
  margin-top: 8rem;
`;
