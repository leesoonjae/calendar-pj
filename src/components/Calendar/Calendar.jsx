import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { AddPostForm, ReadPostForm } from "./CalendarForm";
import { FaRegComment } from "react-icons/fa";
import { __getPosts, __readPost } from "../../redux/modules/calendarSlice";
import "./calendar.css";

export const Calendar = () => {
  // 이벤트 데이터
  const { posts, error } = useSelector((state) => state.calendar);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  //  이벤트 정보 커스텀
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
    navigate(`/${e.event._def.publicId}`);
    dispatch(__readPost(e.event._def.publicId));
  };
  const hideEventHandler = () => {
    setReadPost(false);
    dispatch(__getPosts());
  };

  if (error) {
    return <>{error.message}</>;
  }

  return (
    <>
      <CalendarContainer>
        <Button onClick={addPostHandler}>이벤트 추가</Button>
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
        {addPost && <Modal onClick={hideModalHandler}>{<AddPostForm />}</Modal>}
        {readPost && (
          <Modal onClick={hideEventHandler}>{<ReadPostForm />}</Modal>
        )}
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
