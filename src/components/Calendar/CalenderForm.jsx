import React from "react";
import styled from "styled-components";
import CommentForm from '../Comments/CommentForm';
import CommentsList from "../Comments/CommentsList";
import { Line } from "../UI/Line";

const TodoTitleContainer = styled.div`
  margin-top: 5rem;
  margin-left: 7rem;
  margin-right: 7rem;
  color: rgb(55, 53, 47);
  line-height: 1.2;
  text-align: start;
`;

const TodoTitleStyled = styled.div`
  max-width: 100%;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
  font-weight: 700;
  font-size: 40px;
  padding: 3px 2px;
  &:focus {
    outline: none;
  }
  [contenteditable]:empty:after,
  .forcePlaceholder:after {
    content: attr(placeholder);
  }
`;

const TodoDescritionStyled = styled.div`
  margin-top: 3rem;
  font-size: 28px;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

export const CalenderForm = (props) => {
  //  submit 함수

  const submitHandler = (e) => {
    // 유효성 검사
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <TodoTitleContainer>
          <TodoTitleStyled
            placeholder="제목 없음"
            contentEditable={true}
            spellcheck="true"
          >
            제목 없음{" "}
          </TodoTitleStyled>
          <Line px="10px" />
          <TodoDescritionStyled contentEditable={true} spellcheck="true">
            내용 수정 해봐
          </TodoDescritionStyled>
          <Line px="32px" />
          <CommentsList />
          <CommentForm/>
          <Line px="0px" />
        </TodoTitleContainer>

        <div></div>
      </form>
    </>
  );
};
