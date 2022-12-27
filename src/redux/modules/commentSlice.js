import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComment = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/posts/${payload}`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "__addComment",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const response = await axios.get(
        `http://localhost:3001/posts/${payload.id}`
      );
      const updateComments = { comments: [...response.data.comments, payload] };
      const { data } = await axios.patch(
        `http://localhost:3001/posts/${payload.id}`,
        updateComments
      );
      // console.log(data);

      // get 에서 뽑아낸 데이터 조회 중
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "__deleteComment",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/posts/${payload.id}`
      );

      let data = response.data.comments.filter(
        (item) => item.commentId !== payload.commentId
      );
      console.log("1", data);
      const updateComments = {
        comments: [...data],
      };
      console.log("2", updateComments);

      await axios.patch(
        `http://localhost:3001/posts/${payload.id}`,
        updateComments
      );

      // console.log("3", deletedDate);
      return thunkAPI.fulfillWithValue(updateComments);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateComment = createAsyncThunk(
  "updateComment",
  async (payload, thunkAPI) => {
    try {
      // console.log('update 페이로드: ', payload);
      await axios.patch(`http://localhost:3003/posts/${payload}`, payload);
      const response = await axios.get("http://localhost:3003/comment");
      // console.log('update 이벤트의 서버 응답: ', data.data);

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.comments = [...action.payload.comments];
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("받아온값", action.payload);
      state.comments = [...action.payload.comments];
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__updateComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default commentSlice.reducer;
