import { v4 as uuidv4 } from "uuid";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { useDispatch } from "react-redux";
import { __addComment, __getComment } from "../../redux/modules/commentSlice";

const CommentForm = ({ selectedId }) => {
  console.log(selectedId);
  const dispatch = useDispatch();
  // 입력값 state
  const [enteredName, setEnteredName] = useState("");
  const [enteredComment, setEnteredComment] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  // 유효성 검사 state
  const [isName, setIsName] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  // 유효성 검사 & handler
  const nameChangeHandler = useCallback(
    (e) => {
      setEnteredName(e.target.value);

      if (enteredName.length < 2 || enteredName.length === 0) {
        setIsName(false);
      } else {
        setIsName(true);
      }
    },
    [enteredName]
  );
  const commentChangeHandler = useCallback(
    (e) => {
      setEnteredComment(e.target.value);
      if (enteredComment.length === 0) {
        setIsComment(false);
      } else {
        setIsComment(true);
      }
    },
    [enteredComment]
  );
  const passwordChangeHandler = useCallback(
    (e) => {
      setEnteredPassword(e.target.value);

      if (enteredPassword.length < 3) {
        setIsPassword(false);
      } else {
        setIsPassword(true);
      }
    },
    [enteredPassword]
  );

  // 댓글 저장
  const saveCommentHandler = (e) => {
    e.preventDefault();

    const commentData = {
      id: selectedId,
      commentId: uuidv4(),
      name: enteredName,
      password: enteredPassword,
      comment: enteredComment,
      date: new Date().toISOString.toString(),
    };

    dispatch(__addComment(commentData));

    setEnteredComment("");
    setEnteredName("");
    setEnteredPassword("");

    setIsName(false);
    setIsComment(false);
    setIsPassword(false);
  };
  return (
    <>
      <CommentsForm onSubmit={saveCommentHandler}>
        <FormBox>
          <InputStyled
            width="40%"
            className={isName ? "success" : "error"}
            placeholder="닉네임"
            onChange={nameChangeHandler}
            value={enteredName}
          />
          <Lable className={isName ? "success" : "error"}>
            {isName ? "잘 입력했습니다." : "2글자 이상입력해주세요"}
          </Lable>
        </FormBox>

        <FormBox>
          <InputStyled
            width="80%"
            className={isComment ? "success" : "error"}
            placeholder="내용을 입력해주세요."
            onChange={commentChangeHandler}
            value={enteredComment}
          />
          <Lable className={isComment ? "success" : "error"}>
            {isComment ? "잘 입력했습니다." : "내용을 입력해주세요."}
          </Lable>
        </FormBox>

        <FormBox>
          <InputStyled
            className={isPassword ? "success" : "error"}
            width="40%"
            type="password"
            autoComplete="off"
            maxLength="4"
            placeholder="비밀번호"
            onChange={passwordChangeHandler}
            value={enteredPassword}
          />
          <Lable className={isPassword ? "success" : "error"}>
            {isPassword ? "잘 입력했습니다." : "비밀번호는 4글자입니다."}
          </Lable>
        </FormBox>

        <Button
          type="submit"
          disabled={!(isName && isPassword)}
          className={isName && isPassword ? " " : "disabled"}
        >
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

const InputStyled = styled.input`
  width: ${(props) => props.width};
  background: inherit;
  border-radius: 5px;
  padding: 0.7rem;
  margin: 0.7rem;
  margin-bottom: 0;
  font-size: small;
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
  &.success {
    color: #333;
  }
  &.error {
    color: #b82727;
  }
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;

  text-align: start;
`;

const Lable = styled.div`
  margin-left: 1rem;
  font-size: 0.5rem;
  top: 0;
  &.success {
    color: #c1bfbf;
  }
  &.error {
    color: #b82727;
  }
`;
