import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// // 초기 상태 값(initialState)
const initialState = {
  posts: [],
  post: "",
  idLoading: false,
  error: null,
};

// 푸터 팀원 이벤트 필터링
export const __filteredEvents = createAsyncThunk(
  "filteredEvents",
  async (payload, ThunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3001/posts");
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
      const response = await axios.get("http://localhost:3001/posts");
      return ThunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
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
  }
);

// 포스트 delete 수정중
export const __deletePosts = createAsyncThunk(
  "deletePosts",
  async (newTodo, ThunkAPI) => {
    try {
      await axios.delete("http://localhost:3001/posts", {
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
  }
);

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addComment: (state, action) => {
      return [...state, action.payload];
    },
    deleteComment: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: {
    // 캘린더에서 팀원별 이벤트 필터링
    [__filteredEvents.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__filteredEvents]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 이벤트 조회
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 포스트를 add할 때
    [__addPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__addPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addPost, deletePost, addComment, deleteComment } =
  calendarSlice.actions;

export default calendarSlice.reducer;
