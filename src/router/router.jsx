import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kanban from "../pages/kanban";
import Table from "../pages/table";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Kanban />} />
        <Route path="table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
