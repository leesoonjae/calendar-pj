import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { CalendarForm } from "./CalendarForm";
import { FaRegComment } from "react-icons/fa";
import { __getPosts } from "../../redux/modules/calendarSlice";
import "./calendar.css";
import { v4 as uuidv4 } from "uuid";

export const Calendar = () => {
  // 이벤트 데이터
  const { posts, isLoading, error } = useSelector((state) => state.calendar);
  const [selectedId, setselectedId] = useState("");
  const [seletedDate, setSeletedDate] = useState("");

  //새로운 빈 데이터 생성

  const dispatch = useDispatch();

  // 데이터 서버에서 불러옴
  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  const handleDetail = (id, posts) => {
    const postDetail = posts.find((opj) => opj.id === id);
    setselectedId(id);
    if (postDetail) {
      return;
    } else {
      alert("해당내용이 없습니다.");
    }
  };

  // 모달
  const [showModal, setShowModal] = useState(false);

  const dateClickHandler = (e) => {
    setSeletedDate(e.dateStr);
    setShowModal(true);
  };
  const showModalHandler = (e) => {
    setShowModal(true);
    window.history.pushState(null, null, `${e.event._def.publicId}`);
  };
  const hideModalHandler = () => {
    setselectedId("");
    setShowModal(false);
    window.history.pushState(null, null, "/");
  };

  const renderEventContent = (eventInfo) => {
    const tempPosts = eventInfo.event._context.options.events;

    return (
      <div
        onClick={() => {
          handleDetail(eventInfo.event.id, tempPosts);
        }}
      >
        <Title>
          {eventInfo.event.title}
          {""}
        </Title>
        <Comment>
          <FaRegComment size="11" />
          &nbsp;
          {eventInfo.event._def.extendedProps.comment}
        </Comment>
      </div>
    );
  };

  if (isLoading) {
    return <>Loading...</>;
  }
  if (error) {
    return <>{error.message}</>;
  }

  return (
    <>
      {showModal && (
        <Modal onClick={hideModalHandler}>
          {
            <CalendarForm
              selectedId={selectedId}
              hideModalHandler={hideModalHandler}
              seletedDate={seletedDate}
            />
          }
        </Modal>
      )}
      <CalendarContainer>
        <Button onClick={showModalHandler}>이벤트 추가</Button>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={posts}
          eventContent={renderEventContent}
          eventClick={(e) => showModalHandler(e)}
          dateClick={dateClickHandler}
          eventTextColor="initial"
        />
      </CalendarContainer>
    </>
  );
};

export default Calendar;

// 스타일
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
