import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 값(initialState)
const initialState = {
  post: [
    {
      userId: "jaehyun",
      Id: "1203004",
      title: "리액트공부",
      desc: "13~19시까지 리액트 effect hook 학습",
      date: "2022-12-22",
      comments: [
        {
          id: "uuidv4",
          name: "정하나",
          password: "2341",
          comment: "안녕하세요 잘봤습니다.",
          date: "2022-12-22",
        },
        {
          id: "uuidv4",
          name: "시윤",
          password: "1234",
          comment: "화이팅",
          date: "2022-12-22",
        },
        {
          id: "uuidv4",
          name: "하나",
          password: "1542",
          comment: "ㅎㅇㅌ",
          date: "2022-12-22",
        },
      ],
    },
  ],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addComment : (state, action) => {
      const selectedPost = state.post.filter(
        (item) => item.Id === action.payload.Id
      );
      // console.log(selectedPost);
      // state.post.comments.concat(action.payload);
      selectedPost[0].comments.push(action.payload);
    },
  },
});

export const { addComment } = calendarSlice.actions;
export default calendarSlice.reducer;
