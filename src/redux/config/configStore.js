import { configureStore } from "@reduxjs/toolkit";
import calendar from "../modules/calendarSlice";
import comment from "../modules/commentSlice";
const store = configureStore({
  reducer: { calendar, comment },
});

export default store;
