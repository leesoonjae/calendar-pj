import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { useDispatch } from "react-redux";
import { removeComment } from "../../redux/modules/calendarSlice";
import ModifiedCommentForm from "./ModifiedCommentForm";

export const CommentsItem = ({ commentData }) => {
  const [showPasswordCheckBox, setShowPasswordCheckBox] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [enterdPassword, setEnterdPassword] = useState();

  const dispatch = useDispatch();

  // 수정을 위한 state 관리
  // const nameChangeHandler = (e) => {
  //   setUpdateName(e.target.value);
  // };
  // const commentChangeHandler = (e) => {
  //   setUpdateComment(e.target.value);
  // };

  // 수정
  const commentUpdateHandler = () => {
    setShowPasswordCheckBox(true);

    if (showPasswordCheckBox) {
      if (enterdPassword === commentData.password) {
        console.log("비번맞음");
        setIsEdited(true);
      } else {
        console.log("비번 다름");
        setEnterdPassword("");
      }
    }
  };

  const passwordChangeHandler = (e) => {
    setEnterdPassword(e.target.value);
  };

  // 삭제
  const commentDeletedHandler = () => {
    alert("삭제할까요?");
    dispatch(
      removeComment({ Id: commentData.Id, commentId: commentData.commentId })
    );
  };

  return (
    <>
      <CommentsItemContainer>
        {isEdited ? (
          <>
            {/* 수정 모달  */}
            <ModifiedCommentForm
              commentData={commentData}
              setIsEdited={setIsEdited}
            />
          </>
        ) : (
          <>
            <ContentGruop>
              <ContentStyled width="100%">{commentData.name}</ContentStyled>
              <BalloonContainer>
                <ContentStyled width="100%">
                  {commentData.comment}
                </ContentStyled>
              </BalloonContainer>
            </ContentGruop>
            {showPasswordCheckBox ? (
              <input
                type="password"
                autoComplete="off"
                maxLength="4"
                placeholder="비밀번호를 입력하세요."
                value={enterdPassword}
                onChange={passwordChangeHandler}
              />
            ) : (
              <div></div>
            )}

            <ButtonGrup>
              {showPasswordCheckBox ? (
                <Button onClick={commentUpdateHandler}>
                  <span className="material-icons-outlined">done</span>
                </Button>
              ) : (
                <Button onClick={commentUpdateHandler}>
                  <span className="material-icons-outlined">update</span>
                </Button>
              )}

              <Button onClick={commentDeletedHandler}>
                <span className="material-icons-outlined">clear</span>
              </Button>
            </ButtonGrup>
          </>
        )}
      </CommentsItemContainer>
    </>
  );
};

const CommentsItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
  margin-top: 0.5rem;
  width: 100%;
`;

//텍스트 컨테이너

const ContentGruop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

// 물풍선
const BalloonContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 2rem;

  height: 3.5rem;
  background: #d9d7d757;
  border-radius: 13px;

  &::after {
    border-top: 15px solid #d9d7d757;
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    top: 10px;
    left: -15px;
  }
  &:hover {
    /* background-color: #cccecf26; */
    background: rgba(55, 53, 47, 0.06);
  }
  &:focus {
    outline: none;
  }
`;

const ContentStyled = styled.div`
  display: inline-block;
  width: ${(props) => props.width};
  padding: 0.7rem;
  margin: 0.7rem;
  transition: background-color 300ms ease 0s;
  border: none;
  text-align: start;
  white-space: nowrap;
  /* vertical-align: middle; */
`;

const ButtonGrup = styled.div`
  display: flex;
`;
