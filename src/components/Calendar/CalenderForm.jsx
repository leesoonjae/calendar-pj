import React from "react";
import styled from "styled-components";
import { addPost, deletePost } from "../../redux/modules/calendarSlice";
import CommentForm from "../Comments/CommentForm";
import CommentsList from "../Comments/CommentsList";
import { Button } from "../UI/Button";
import { Line } from "../UI/Line";
import TodoItem from "../todo/TodoItem";

const TodoTitleContainer = styled.div`
  margin-top: 5rem;
  margin-left: 7rem;
  margin-right: 7rem;
  color: rgb(55, 53, 47);
  line-height: 1.2;
  text-align: start;
`;


const SaveButton = styled.div`
  display: flex;
  justify-content: end;
`;

export const CalenderForm = (props) => {
  const CONFIRM_MESSAGE = `[확인 메세지]\n\n"${props.title}" 정말로 삭제하시겠습니까?\n삭제를 원하지 않는다면 [취소] 버튼을 눌러주세요.`;
  //  submit 함수
  const dispatch = useDispatch();
  // 확인 메세지

  const handleSaveButton = () => dispatch(addPost(props.id));
  const handleDeleteButton = () => {
    if (window.confirm(CONFIRM_MESSAGE)) dispatch(deletePost(props.id));
  };

  // const submitHandler = (e) => {
  //   // 유효성 검사
  // };
  return (
    <>
      <TodoTitleContainer>
        <TodoItem />
        <Line px="32px" />
        <CommentsList />
        <CommentForm />
        <Line px="0px" />
      </TodoTitleContainer>

      <div></div>
    </>
  );
};
