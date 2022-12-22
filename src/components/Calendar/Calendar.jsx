import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "styled-components";

const CalendarContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  align-items: center;
  padding: 2rem;
`;

export const Calendar = () => {
  return (
    <>
      <CalendarContainer>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </CalendarContainer>
    </>
  );
};
