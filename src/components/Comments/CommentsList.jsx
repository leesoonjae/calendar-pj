import React from "react";
import { useSelector } from "react-redux";

import { CommentsItem } from "./CommentsItem";

const CommentsList = () => {
  // 1. 선택한 페이지 id 값에 맞는 데이터 필터링하기
  const calendarData = useSelector((state) => state.calendar.post);
  // console.log(calendarData);

  const selectedPost = calendarData.filter((item) => item.Id === "1203004");
  const commentsArr = selectedPost[0].comments;
  console.log(commentsArr);
  // const objarr = ...arr;
  // console.log(objarr);
  // console.log({ a: 123, b: 123, c: 142 });
  // 2. 해당 데이터에 있는 comments 를 새배열로 생성하기
  // const commentsArr = calendarData.comments;
  return (
    <div>
      {commentsArr.map((comment) => (
        <CommentsItem commentData={comment} key={comment.commentId} />
      ))}
    </div>
  );
};

export default CommentsList;
