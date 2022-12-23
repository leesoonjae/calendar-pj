import { configureStore } from "@reduxjs/toolkit";
// import todo from "../modules/todoSlice";

const store = configureStore({
  reducer: { calendar: calendar },
});

export default store;
