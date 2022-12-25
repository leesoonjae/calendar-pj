import React from "react";
import { useSelector } from "react-redux";

import { CommentsItem } from "./CommentsItem";

const CommentsList = () => {
  // 1. 선택한 페이지 id 값에 맞는 데이터 필터링하기
  const calendarData = useSelector((state) => state.calendar);
  // console.log(calendarData);

  const data = useSelector((state) => state.calendar.post);
  const filterDate = data.filter((item) => item.Id === "1203004");
  console.log(filterDate[0].comments);

  // 2. 해당 데이터에 있는 comments 를 새배열로 생성하기
  const commentsArr = calendarData.post[0].comments;
  // console.log(commentsArr);
  return (
    <div>
      {commentsArr.map((comment) => (
        <CommentsItem commentData={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentsList;
