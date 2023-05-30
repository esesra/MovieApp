import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VisitorTemplate from "../template/visitor-template";
import HomePage from "../pages/visitor/homepage";

const CustomRouters = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<VisitorTemplate><HomePage/></VisitorTemplate>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
};

export default CustomRouters;
