import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { CommentsItem } from "./CommentsItem";

const CommentsList = ({ selectedId }) => {
  // 1. 선택한 페이지 id 값에 맞는 데이터 필터링하기

  const commentsData = useSelector((state) => state.comment.comments);


  // console.log(commentsData);
  // const selectedPost = calendarData.filter((item) => item.id === selectedId);
  // console.log(selectedPost, selectedId);
  // const commentsArr = selectedPost[0].comments;
  

  return (
    <div>
      {commentsData.map((comment) => (
        <CommentsItem
          commentData={comment}
          key={comment.commentId}
          selectedId={selectedId}
        />
      ))}
    </div>
  );
};

export default CommentsList;
