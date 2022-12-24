import React from "react";
import styled from "styled-components";
import { addPost, deletePost } from "../../redux/modules/calendarSlice";
import CommentForm from "../Comments/CommentForm";
import CommentsList from "../Comments/CommentsList";
import { Button } from "../UI/Button";
import { Line } from "../UI/Line";
import { useDispatch } from "react-redux";
import { useState } from "preact/hooks";

const TodoTitleContainer = styled.div`
  margin-top: 5rem;
  margin-left: 7rem;
  margin-right: 7rem;
  color: rgb(55, 53, 47);
  line-height: 1.2;
  text-align: start;
`;

const TodoTitleStyled = styled.input`
  max-width: 100%;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
  border: none;
  font-weight: 700;
  font-size: 40px;
  padding: 3px 2px;
  &::placeholder {
    color: rgba(75, 75, 75, 0.214);
  }
  &:focus {
    outline: none;
  }
  [contenteditable]:empty:after,
  .forcePlaceholder:after {
    content: attr(placeholder);
  }
`;

const TodoDescritionStyled = styled.textarea`
  margin-top: 3rem;
  width: 100%;
  height: 20rem;
  font-size: 28px;
  font-weight: 500;
  border: none;
  resize: none;
  &::placeholder {
    color: rgba(75, 75, 75, 0.214);
  }
  &:focus {
    outline: none;
  }
`;

const SaveButton = styled.div`
  display: flex;
  justify-content: end;
`;

export const CalenderForm = (props) => {
  const CONFIRM_MESSAGE = `[확인 메세지]\n\n"${props.title}" 정말로 삭제하시겠습니까?\n삭제를 원하지 않는다면 [취소] 버튼을 눌러주세요.`;
  //  submit 함수
  const dispatch = useDispatch();

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
        <SaveButton>
          <Button type="submit" onClick={handleDeleteButton}>
            삭제
          </Button>
        </SaveButton>
        <TodoTitleStyled
          placeholder="제목 없음"
          contentEditable={true}
          spellcheck="true"
        />
        {props.title}
        <Line px="10px" />
        <input type="date" />
        <TodoDescritionStyled
          contentEditable={true}
          spellcheck="true"
          placeholder="내용을 입력해주세요"
        />
        {props.comment}
        <SaveButton>
          <Button type="submit" onClick={handleSaveButton}>
            저장
          </Button>
        </SaveButton>
        <Line px="32px" />
        <CommentsList />
        <CommentForm />
        <Line px="0px" />
      </TodoTitleContainer>

      <div></div>
    </>
  );
};

// 다시 받아오기
