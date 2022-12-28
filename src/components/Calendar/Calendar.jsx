import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";
import { Modal } from "../UI/Modal";
import { CalenderForm } from "./CalenderForm";
import { FaRegComment } from "react-icons/fa";
import { __getPosts } from "../../redux/modules/calendarSlice";
import "./calendar.css";

export const Calendar = () => {
  // 투두리스트 데이터
  const { posts, error } = useSelector((state) => state.calendar);

  const [selectedId, setselectedId] = useState("");
  const [seletedDate, setSeletedDate] = useState("");

  const dispatch = useDispatch();

  // calendarSlice에서 불러옴
  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  // 투두리스트 본문 조회
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

  // 날짜칸 클릭시
  const dateClickHandler = (e) => {
    setSeletedDate(e.dateStr);
    setShowModal(true);
  };
  // 투두리스트 클릭시
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
    const title = eventInfo.event.title;
    const commentTitle = eventInfo.event.title;
    const commentCount = eventInfo.event._def.extendedProps.comments.length;

    return (
      <div
        onClick={() => {
          handleDetail(eventInfo.event.id, tempPosts);
        }}
      >
        <>
          {commentCount > 0 ? (
            <CommentTitle>{commentTitle}</CommentTitle>
          ) : (
            <Title>{title}</Title>
          )}
        </>
        <Comment>
          {commentCount > 0 ? <FaRegComment size="11" /> : null}
          &nbsp;
          {commentCount > 0 ? commentCount : null}
        </Comment>
      </div>
    );
  };

  if (error) {
    alert(error.message);
  }

  return (
    <>
      {showModal && (
        <Modal onClick={hideModalHandler}>
          {
            <CalenderForm
              selectedId={selectedId}
              hideModalHandler={hideModalHandler}
              seletedDate={seletedDate}
            />
          }
        </Modal>
      )}
      <CalendarContainer>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={posts}
          eventContent={renderEventContent}
          eventClick={(e) => showModalHandler(e)}
          dateClick={dateClickHandler}
          eventTextColor="initial"
          eventBackgroundColor="#f6f6f6"
          eventBorderColor="#f6f6f6"
        />
      </CalendarContainer>
    </>
  );
};

export default Calendar;

// 스타일
const CalendarContainer = styled.div`
  margin: 2rem auto;
  margin-bottom: 10rem;
  width: 55%;
  align-items: center;
`;

const Title = styled.span`
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CommentTitle = styled.span`
  display: block;
  width: 78%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Comment = styled.span`
  font-weight: normal;
  float: right;
  margin-top: -1rem;
`;
