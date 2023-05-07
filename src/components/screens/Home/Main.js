import React from "react";
import "../../../index.css";
import Header from "./Header";
import Promo from "./Promo";
import Categories from "./Categories";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="main text-white">
        <div className="pb-24">
          <div className="text-5xl w-96 ml-28 pt-24">
            Бытовая химия, косметика и хозтовары
          </div>
          <div className="pt-10 ml-28 pb-14 font-bold text-2xl">
            ОПТОМ ПО КОКЧЕТАВУ И ОБЛАСТИ
          </div>
          <span className="font-bold ml-28 rounded-full p-3 py-5 text-white px-14 bg-amber-400 cursor-pointer">
            В КАТАЛОГ
          </span>
          <div className="flex">
            <div className="flex items-center pt-20">
              <span className="font-bold bg-amber-400 px-1.5 leading-tight ml-28 rounded-full">
                +
              </span>
              <div className="ml-2 w-52 font-bold">
                Только самые выгодные предложения
              </div>
            </div>
            <div className="flex items-center pt-20">
              <span className="font-bold bg-amber-400 px-1.5 leading-tight ml-10 rounded-full">
                +
              </span>
              <div className="ml-2 w-48 font-bold">
                Бесплатная доставка по Кокчетаву от 10 тыс &#8376;
              </div>
            </div>
          </div>
        </div>
      </div>
      <Promo />
      <Categories />
    </div>
  );
};

export default Main;
