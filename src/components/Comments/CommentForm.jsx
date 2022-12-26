import { v4 } from "uuid";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/modules/calendarSlice";

const CommentForm = ({ }) => {
  
  const dispatch = useDispatch();

  const [enteredName, setEnteredName] = useState("");
  const [enteredComment, setEnteredComment] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  //   const [createComment, setCreateComment] = useState("");

  // handler
  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const commentChangeHandler = (e) => {
    setEnteredComment(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  // 댓글 저장
  const saveCommentHandler = (e) => {
    // 폼을 중복으로 사용하면 동작하지않음
    e.preventDefault();

    const commentData = {
      Id: "1203004",
      commentId: v4(),
      name: enteredName,
      password: enteredPassword,
      comment: enteredComment,
      date: new Date().toISOString.toString(),
    };
    dispatch(addComment(commentData));

    setEnteredComment("");
    setEnteredName("");
  };
  return (
    <>
      <CommentsForm onSubmit={saveCommentHandler}>
        <InputNameStyled
          placeholder="닉네임"
          onChange={nameChangeHandler}
          value={enteredName}
        />
        <InputCommentStyled
          placeholder="내용을 입력해주세요."
          onChange={commentChangeHandler}
          value={enteredComment}
        />
        <InputPasswordStyled
          type="password"
          autoComplete="off"
          maxLength="4"
          placeholder="비밀번호"
          onChange={passwordChangeHandler}
          value={enteredPassword}
        />

        <Button type="submit">
          <span className="material-symbols-outlined">arrow_upward</span>
        </Button>
      </CommentsForm>
    </>
  );
};

export default CommentForm;

//스타일

const CommentsForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const InputNameStyled = styled.input`
  width: 10%;
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

const InputPasswordStyled = styled.input`
  width: 10%;
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
  margin-bottom: 3rem;
`;
