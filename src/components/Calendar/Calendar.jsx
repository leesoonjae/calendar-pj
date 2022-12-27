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
import { __addPost, __getPosts } from "../../redux/modules/calendarSlice";
import "./calendar.css";
import { v4 as uuidv4 } from "uuid";

export const Calendar = () => {
  // 이벤트 데이터
  const { posts, isLoading, error } = useSelector((state) => state.calendar);
  const [seletedId, setSeletedId] = useState("");

  //새로운 빈 데이터 생성
  const createTodo = {
    id: uuidv4(),
    title: "",
    userId: "",
    date: "",
    desc: "",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  const handleDetail = (id, posts) => {
    const postDetail = posts.find((opj) => opj.id === id);
    setSeletedId(id);
    console.log(postDetail);
    if (postDetail) {
      return;
    } else {
      alert("해당내용이 없습니다.");
    }
  };

  const renderEventContent = (eventInfo) => {
    const tempPosts = eventInfo.event._context.options.events;

    return (
      <>
        <Title
          onClick={() => {
            handleDetail(eventInfo.event.id, tempPosts);
          }}
        >
          {eventInfo.event.title}
          {""}
        </Title>
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

  const dateClickHandler = () => {
    console.log("눌렀다!");
    setShowModal(true);
  };
  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setSeletedId("");
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <Modal onClick={hideModalHandler}>
          {<CalenderForm seletedId={seletedId} />}
        </Modal>
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
          dateClick={dateClickHandler}
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
