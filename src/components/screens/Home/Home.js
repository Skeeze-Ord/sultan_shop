import React from "react";
import Header from "./Header";
import PriceFilter from "../Filter/PriceFilter";
import Main from "./Main";
import Promo from "./Promo";
import Categories from "./Categories";

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <PriceFilter />
      <Promo />
      <Categories />
    </div>
  );
};

export default Home;
