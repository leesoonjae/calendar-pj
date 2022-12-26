import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { useDispatch } from "react-redux";
import { removeComment } from "../../redux/modules/calendarSlice";

export const CommentsItem = ({ commentData }) => {
  const [isEdited, setIsEdited] = useState(false);

  const dispatch = useDispatch();

  const commentUpdateHandler = () => {
    if (isEdited) {
      console.log("저장로직");
    }
    setIsEdited(!isEdited);
  };
  const commentDeletedHandler = () => {
    alert("삭제할까요?");
    // console.log(commentData.Id, commentData.commentId);
    dispatch(
      removeComment({ Id: commentData.Id, commentId: commentData.commentId })
    );
  };
  // console.log(commentData);
  return (
    <>
      <CommentsItemContainer>
        <BalloonContainer>
          <ContentStyled width="100%">{commentData.name}</ContentStyled>
          <ContentStyled width="100%">{commentData.comment}</ContentStyled>
        </BalloonContainer>
        <div></div>

        <ButtonGrup>
          {isEdited ? (
            <Button onClick={commentUpdateHandler}>
              <span className="material-icons-outlined">menu</span>
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

// 물풍선
const BalloonContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  /* margin: 50px; */

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
