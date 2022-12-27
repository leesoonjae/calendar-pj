import React from "react";
import { useSelector } from "react-redux";

import { CommentsItem } from "./CommentsItem";

const CommentsList = () => {
  // 1. 선택한 페이지 id 값에 맞는 데이터 필터링하기
  const calendarData = useSelector((state) => state.calendar.post);
  const selectedPost = calendarData.filter((item) => item.Id === "1203004");
  const commentsArr = selectedPost[0].comments;

  return (
    <div>
      {commentsArr.map((comment) => (
        <CommentsItem commentData={comment} key={comment.commentId} />
      ))}
    </div>
  );
};

export default CommentsList;
