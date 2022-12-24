import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// // 초기 상태 값(initialState)
const initialState = {
  posts: [{ id: uuidv4(), title: "", date: "", desc: "" }],
  idLoading: false,
  error: null,
};

// 포스트 조회
export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, ThunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3001/posts");
      return ThunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  },
);

// 포스트 add
export const __addPosts = createAsyncThunk(
  "addPosts",
  async (newTodo, ThunkAPI) => {
    try {
      await axios.post("http://localhost:3001/posts", {
        id: newTodo.id,
        title: newTodo.title,
        date: newTodo.date,
        desc: newTodo.desc,
      });
      const response = await axios.get("http://localhost:3001/posts");

      return ThunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  },
);

const calendarSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    //   addPost: (state, action) => {
    //     return [...state, action.payload];
    //   },
    //   deletePost: (state, action) => {
    //     return state.filter((item) => item.id !== action.payload);
    //   },
    //   addComment: (state, action) => {
    //     return [...state, action.payload];
    //   },
    //   deleteComment: (state, action) => {
    //     return state.filter((item) => item.id !== action.payload);
    //   },
  },
  extraReducers: {
    // 포스트를 조회할 때
    [__getPosts.pending]: (state) => {
      state.isLanding = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLanding = false;
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLanding = false;
      state.error = action.payload;
    },
    // 포스트를 add할 때
    [__addPosts.pending]: (state) => {
      state.isLanding = true;
    },
    [__addPosts.fulfilled]: (state, action) => {
      state.isLanding = false;
      state.posts = action.payload;
    },
    [__addPosts.rejected]: (state, action) => {
      state.isLanding = false;
      state.error = action.payload;
    },
  },
});

export const { addPost, deletePost, addComment, deleteComment } =
  calendarSlice.actions;
export default calendarSlice.reducer;
