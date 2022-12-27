import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { AddPostForm, ReadPostForm } from "./CalendarForm";
import { FaRegComment } from "react-icons/fa";
import { __getPosts } from "../../redux/modules/calendarSlice";
import "./calendar.css";

export const Calendar = () => {
  // 이벤트 데이터
  const { posts, error } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  //  이벤트 정보 커스텀(타이틀, 코멘트수)
  const renderEventContent = (eventInfo) => {
    return (
      <>
        <Title>{eventInfo.event.title} </Title>
        <Comment>
          {eventInfo.event._def.extendedProps.comment > 0 ? (
            <FaRegComment size="11" />
          ) : (
            ""
          )}
          &nbsp;
          {eventInfo.event._def.extendedProps.comment}
        </Comment>
      </>
    );
  };

  // 글 작성 모달
  const [addPost, setAddPost] = useState(false);
  const addPostHandler = () => {
    // console.log(e.event._instance.range.start);
    setAddPost(true);
  };
  const hideModalHandler = () => {
    setAddPost(false);
  };

  // 상세페이지 모달
  const [readPost, setReadPost] = useState(false);
  const readPostHandler = (e) => {
    setReadPost(true);
    dispatch(__getPosts(e.event._def.publicId));
    window.history.pushState(null, null, `${e.event._def.publicId}`);
  };
  const hideEventHandler = () => {
    setReadPost(false);
    dispatch(__getPosts());
    window.history.pushState(null, null, "/");
  };

  if (error) {
    return <>{error.message}</>;
  }

  return (
    <>
      <CalendarContainer>
        <Button onClick={addPostHandler}>이벤트 추가</Button>
        {addPost && <Modal onClick={hideModalHandler}>{<AddPostForm />}</Modal>}
        {readPost && (
          <Modal onClick={hideEventHandler}>{<ReadPostForm />}</Modal>
        )}
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={posts}
          eventContent={renderEventContent}
          eventClick={(e) => readPostHandler(e)}
          dateClick={addPostHandler}
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
`;

const Title = styled.div`
  display: block;
  width: 88%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: bold;
  margin-right: 0;
`;

const Comment = styled.div`
  font-weight: normal;
  float: right;
  margin-top: -1rem;
`;
