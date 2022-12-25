import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// 초기 상태 값(initialState)
const initialState = [
  {
    userId: "김재현",
    Id: "1203004",
    title: "리액트 공부와 팀 프로젝트",
    desc: "13~19시까지 리액트 effect hook 학습",
    date: "2022-12-01",
    comments: [
      {
        id: "uuidv4",
        name: "정하나",
        password: "2341",
        comment: "ㅎㅇㅌ",
        date: "2022-12-01",
      },
    ],
  },
  {
    userId: "이순재",
    Id: "1203005",
    title: "빡공하기",
    desc: "열심히 공부",
    date: "2022-12-12",
    comments: [
      {
        id: "uuidv4",
        name: "시윤",
        password: "1234",
        comment: "화이팅",
        date: "2022-12-12",
      },
    ],
  },
  {
    userId: "변시윤",
    Id: "1203006",
    title: "리덕스",
    desc: "리덕스공부",
    date: "2022-12-22",
    comments: [
      {
        id: "uuidv4",
        name: "하나",
        password: "1542",
        comment: "ㅎㅇㅌ",
        date: "2022-12-22",
      },
    ],
  },
  {
    userId: "정하나",
    Id: "1203007",
    title: "흑흑",
    desc: "리덕스뿌셔",
    date: "2022-12-22",
    comments: [
      {
        id: "uuidv4",
        name: "시윤",
        password: "4561",
        comment: "ㅎㅇㅌ",
        date: "2022-12-22",
      },
    ],
  },
];

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addPost: (state, action) => {
      return [...state, action.payload];
    },
    deletePost: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    addComment: (state, action) => {
      return [...state, action.payload];
    },
    deleteComment: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    readEvent: () => {
      return initialState;
    },
    filterEvent: (state, action) => {
      const result = state.filter((item) => {
        if (item.userId === action.payload) {
          return item;
        }
      });
      // return [...state, result]; // 전체 데이터 + 필터링 데이터
      return result;
    },
  },
});

export const {
  addPost,
  deletePost,
  addComment,
  deleteComment,
  readEvent,
  filterEvent,
} = calendarSlice.actions;
export default calendarSlice.reducer;
