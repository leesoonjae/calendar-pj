import { createSlice, current } from "@reduxjs/toolkit";

// 초기 상태 값(initialState)
const initialState = {
  post: [
    {
      userId: "jaehyun",
      Id: "1203004",
      title: "리액트공부",
      desc: "13~19시까지 리액트 effect hook 학습",
      date: "2022-12-22",
      comments: [],
    },
    {
      userId: "fesfa",
      Id: "12031321004",
      title: "리액트공부",
      desc: "13~19시까지 리액트 effect hook 학습",
      date: "2022-12-22",
      comments: [],
    },
  ],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const selectedPost = state.post.filter(
        (item) => item.Id === action.payload.Id
      );
      // const select = { ...selectedPost }
      // console.log(current(state.post));
      selectedPost[0].comments.push(action.payload);
    },
    removeComment: (state, action) => {
      const { Id, commentId } = action.payload;

      const selectedPost = state.post.filter((item) => item.Id === Id);
      // console.log(current(state.post[0].comments));
      // console.log(current(state));
      const commentIdx = selectedPost[0].comments.findIndex(
        (item) => item.commentId === commentId
      );
      // console.log(commentIdx);
      selectedPost[0].comments.splice(commentIdx, 1);
    },
    updateComment: (state, action) => {
      const { Id, commentId } = action.payload;

      // 1. 수정할 댓글 객체를 찾는다.
      const selectedPost = state.post.filter((item) => item.Id === Id);
      const commentIdx = selectedPost[0].comments.findIndex(
        (item) => item.commentId === commentId
      );
      selectedPost[0].comments[commentIdx] = { ...action.payload };
      // 2. 해당 댓글객체를 업데이트 시킨다.
    },
  },
});

export const { addComment, removeComment, updateComment } =
  calendarSlice.actions;
export default calendarSlice.reducer;
