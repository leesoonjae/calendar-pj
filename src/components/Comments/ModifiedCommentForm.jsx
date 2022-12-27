import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateComment } from "../../redux/modules/calendarSlice";
import { Button } from "../UI/Button";

const ModifiedCommentForm = ({
  commentData,
  setIsEdited,
  setShowPasswordCheckBox,
}) => {
  const [enteredName, setEnteredName] = useState(commentData.name);
  const [enteredComment, setEnteredComment] = useState(commentData.comment);

  console.log(commentData);

  const dispatch = useDispatch();

  // handler
  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const commentChangeHandler = (e) => {
    setEnteredComment(e.target.value);
  };

  // 댓글 저장
  const saveCommentHandler = (e) => {
    e.preventDefault();

    // #TODO 유효성 검사
    const newCommentData = {
      Id: "1203004",
      commentId: commentData.commentId,
      name: enteredName,
      password: commentData.password,
      comment: enteredComment,
      date: new Date().toISOString.toString(),
    };
    dispatch(updateComment(newCommentData));
    setIsEdited(false);
    setShowPasswordCheckBox(false);
  };
  return (
    <>
      <CommentsForm onSubmit={saveCommentHandler}>
        <InputStyled
          width="20%"
          placeholder="닉네임"
          onChange={nameChangeHandler}
          value={enteredName}
        />
        <InputStyled
          width="80%"
          placeholder="내용을 입력해주세요."
          onChange={commentChangeHandler}
          value={enteredComment}
        />

        <Button type="submit">
          <span className="material-icons-outlined">done</span>
        </Button>
      </CommentsForm>
    </>
  );
};

export default ModifiedCommentForm;

const CommentsForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const InputStyled = styled.input`
  width: ${(props) => props.width};
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
// 하하