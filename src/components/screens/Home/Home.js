import React from "react";
import Main from "./Main";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CardProduct from "../CardProduct/CardProduct";
import store from "../../../store/store";
import { Provider } from "react-redux";

const Home = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="two" element={<CardProduct product={store} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    // <Header />
    // <Main />
    // <PriceFilter />
    // <Promo />
    // <Categories />
  );
};

export default Home;
