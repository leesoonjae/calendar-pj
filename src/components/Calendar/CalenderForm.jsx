import React from "react";
import styled from "styled-components";
import CommentForm from "../Comments/CommentForm";
import CommentsList from "../Comments/CommentsList";
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

export const CalenderForm = ({ seletedId, hideModalHandler, seletedDate }) => {
  return (
    <>
      <TodoTitleContainer>
        <TodoItem
          seletedId={seletedId}
          hideModalHandler={hideModalHandler}
          seletedDate={seletedDate}
        />
        <Line px="32px" />
        <CommentsList seletedId={seletedId} />
        <CommentForm seletedId={seletedId} />
        <Line px="0px" />
      </TodoTitleContainer>
    </>
  );
};

// 다시 받아오기
