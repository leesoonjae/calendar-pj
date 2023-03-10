import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

// // 초기 상태 값(initialState)
const initialState = {
  posts: [],
  idLoading: false,
  error: null,
};
//1
// 푸터 팀원 이벤트 필터링
export const __filteredEvents = createAsyncThunk(
  "filteredEvents",
  async (payload, ThunkAPI) => {
    try {
      const response = await axios.get(
        "https://gentle-aquamarine-basketball.glitch.me/posts"
      );
      const result = ThunkAPI.fulfillWithValue(response.data).payload.filter(
        (item) => {
          if (item.userId === payload) {
            return item;
          }
        }
      );
      return result;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

// 포스트 조회
export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, ThunkAPI) => {
    try {
      const response = await axios.get(
        "https://gentle-aquamarine-basketball.glitch.me/posts"
      );
      return ThunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

// 포스트 add
export const __addPost = createAsyncThunk(
  "addPosts",
  async (newTodo, ThunkAPI) => {
    try {
      const response = await axios.post(
        "https://gentle-aquamarine-basketball.glitch.me/posts",
        newTodo
      );
      return ThunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

// 포스트 delete 수정중
export const __deletePost = createAsyncThunk(
  "deletePosts",
  async (payload, ThunkAPI) => {
    console.log(payload);
    try {
      await axios.delete(
        `https://gentle-aquamarine-basketball.glitch.me/posts/${payload}`
      );
      const response = await axios.get(
        "https://gentle-aquamarine-basketball.glitch.me/posts"
      );
      // console.log("delete", ThunkAPI.fulfillWithValue(response.data));
      return ThunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);
// 포스트 업데이트
export const __updatePost = createAsyncThunk(
  "updatePosts",
  async (updateTodo, ThunkAPI) => {
    try {
      const response = await axios.patch(
        `https://gentle-aquamarine-basketball.glitch.me/posts/${updateTodo.id}`,
        updateTodo
      );
      // console.log(response.data);
      return ThunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {},
  extraReducers: {
    // 캘린더에서 이벤트 조회
    [__filteredEvents.pending]: (state) => {
      state.idLoading = true;
    },
    [__filteredEvents.fulfilled]: (state, action) => {
      state.idLoading = false;
      state.posts = action.payload;
    },
    [__filteredEvents.rejected]: (state, action) => {
      state.idLoading = false;
      state.error = action.payload;
    },
    // 포스트를 조회할 때
    [__getPosts.pending]: (state) => {
      state.idLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.idLoading = false;
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.idLoading = false;
      state.error = action.payload;
    },
    // 포스트를 add할 때
    [__addPost.pending]: (state) => {
      state.idLoading = true;
    },
    [__addPost.fulfilled]: (state, action) => {
      state.idLoading = false;
      console.log(current(state));
      state.posts = [...state.posts, action.payload];
    },
    [__addPost.rejected]: (state, action) => {
      state.idLoading = false;
      state.error = action.payload;
    },
    // 삭제
    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      console.log("삭제 성공시", action.payload);
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 수정
    [__updatePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatePost.fulfilled]: (state, action) => {
      console.log("업데이트 성공시", action.payload);
      state.isLoading = false;
      const index = state.posts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.posts.splice(index, 1, action.payload);
    },
    [__updatePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addPost, deletePost, addComment, removeComment, updateComment } =
  calendarSlice.actions;

export default calendarSlice.reducer;

// 초기 상태 값(initialState)
// const initialState = {
//   post: [
//     {
//       userId: "jaehyun",
//       Id: "1203004",
//       title: "리액트공부",
//       desc: "13~19시까지 리액트 effect hook 학습",
//       date: "2022-12-22",
//       comments: [],
//     },
//     {
//       userId: "fesfa",
//       Id: "12031321004",
//       title: "리액트공부",
//       desc: "13~19시까지 리액트 effect hook 학습",
//       date: "2022-12-22",
//       comments: [],
//     },
//   ],
// };
