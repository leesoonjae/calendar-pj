import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Calendar from "../components/Calendar/Calendar";
import Footer from "../components/Footer/Footer";
import ReadPost from "../components/todo/ReadPost";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Calendar />} />
        <Route path="/:id" element={<ReadPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
