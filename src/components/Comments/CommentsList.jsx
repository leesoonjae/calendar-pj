import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CommentsItem } from "./CommentsItem";
import { __getComment } from "../../redux/modules/commentSlice";

const CommentsList = ({ selectedId }) => {
  const { comments, error } = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getComment(selectedId));
  }, []);

  if (error) {
    return <>{error.message}</>;
  }
  console.log(comments);

  return (
    <div>
      {comments &&
        comments.map((comment) => (
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

//확인용
