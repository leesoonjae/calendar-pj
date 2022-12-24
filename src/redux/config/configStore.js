import { configureStore } from "@reduxjs/toolkit";
import calendar from "../modules/calendarSlice";

const store = configureStore({
  reducer: { calendar },
});

export default store;
