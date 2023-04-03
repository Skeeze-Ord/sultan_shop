import React from "react";

const Categories = () => {
  return (
    <div className="pt-24">
      <div className="text-3xl font-semibold container mx-32 pb-4">
        <span className="text-amber-400">КАТЕГОРИИ</span> ТОВАРОВ
      </div>
      <span className="text-gray-700 container mx-32 pb-14">
        10 000+ ходовых позиций по специальным ценам
      </span>

      <div className="flex container mx-32 py-4">
        <div className="text-center text-gray-700 cursor-pointer">
          <img
            className="w-52 h-48"
            src={require("../../../assets/product_categories/cat1.png")}
          />
          <span>Бытовая химия</span>
        </div>
        <div className="text-center text-gray-700 cursor-pointer">
          <img
            className="w-52 h-48"
            src={require("../../../assets/product_categories/cat2.png")}
          />
          <span>Косметика и гигиена</span>
        </div>
        <div className="text-center text-gray-700 cursor-pointer">
          <img
            className="w-52 h-48"
            src={require("../../../assets/product_categories/cat3.png")}
          />
          <span>Товары для дома</span>
        </div>
        <div className="text-center text-gray-700 cursor-pointer">
          <img
            className="w-52 h-48"
            src={require("../../../assets/product_categories/cat4.png")}
          />
          <span>Товары для детей и мам</span>
        </div>
        <div className="text-center text-gray-700 cursor-pointer">
          <img
            className="w-52 h-48"
            src={require("../../../assets/product_categories/cat5.png")}
          />
          <span>Посуда</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;