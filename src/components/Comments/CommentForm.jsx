import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";

const CommentsForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const InputNameStyled = styled.input`
  width: 15%;
  background: inherit;
  border-radius: 5px;
  padding: 0.7rem;
  margin: 0.7rem;
  cursor: pointer;
  transition: background-color 300ms ease 0s;
  border: none;
  &:hover {
    /* background-color: #cccecf26; */
    background: rgba(55, 53, 47, 0.06);
  }
  &:focus {
    outline: none;
  }
`;

const InputCommentStyled = styled.input`
  width: 50%;
  background: inherit;
  border-radius: 5px;
  padding: 0.7rem;
  margin: 0.7rem;
  border: none;
  cursor: pointer;
  transition: background-color 300ms ease 0s;
  &:hover {
    /* background-color: #cccecf26; */
    background: rgba(55, 53, 47, 0.06);
  }
  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  opacity: 1;
`;

const CommentForm = () => {
  // 댓글 저장
  const saveCommentHandler = (event) => {
    event.preventDefault();
    console.log("저장");
  };
  return (
    <>
      <CommentsForm onSubmit={saveCommentHandler}>
        <InputNameStyled placeholder="닉네임"></InputNameStyled>
        <InputCommentStyled placeholder="내용을 입력해주세요."></InputCommentStyled>
        <ButtonContainer>
          <Button type="submit">저장</Button>
        </ButtonContainer>
      </CommentsForm>
    </>
  );
};

export default CommentForm;
