import React from "react";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../../Cart/Cart";

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
