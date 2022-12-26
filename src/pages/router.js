import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Calendar from "../components/Calendar/Calendar";
import Footer from "../components/Footer/Footer";
import TodoItem from "../components/todo/TodoItem";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Calendar />} />
        <Route exact path="/:id" element={<TodoItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
