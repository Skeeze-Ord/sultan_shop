import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="pt-24 container mx-32">
      <div className="text-3xl font-semibold">
        <span className="text-amber-400">КАТЕГОРИИ</span> ТОВАРОВ
      </div>
      <span className="text-gray-700 pb-14">
        10 000+ ходовых позиций по специальным ценам
      </span>

      <div className="flex flex-wrap py-4">
        <Link
          to="/household-chemicals"
          className="w-52 mx-2 mb-8 text-center text-gray-700 cursor-pointer"
        >
          <img
            className="w-52 h-48"
            src={require("../../../../assets/product_categories/cat1.png")}
            alt="category 1"
          />
          <span className="mt-2 block">Бытовая химия</span>
        </Link>
        <Link
          to="/cosmetics-hygiene"
          className="w-52 mx-2 mb-8 text-center text-gray-700 cursor-pointer"
        >
          <img
            className="w-52 h-48"
            src={require("../../../../assets/product_categories/cat2.png")}
            alt="category 2"
          />
          <span className="mt-2 block">Косметика и гигиена</span>
        </Link>
        <Link
          to="/household_products"
          className="w-52 mx-2 mb-8 text-center text-gray-700 cursor-pointer"
        >
          <img
            className="w-52 h-48"
            src={require("../../../../assets/product_categories/cat3.png")}
            alt="category 3"
          />
          <span className="mt-2 block">Товары для дома</span>
        </Link>
        <Link
          to="childrens-moms"
          className="w-52 mx-2 mb-8 text-center text-gray-700 cursor-pointer"
        >
          <img
            className="w-52 h-48"
            src={require("../../../../assets/product_categories/cat4.png")}
            alt="category 4"
          />
          <span className="mt-2 block">Товары для детей и мам</span>
        </Link>
        <Link
          to="/dishes"
          className="w-52 mx-2 mb-8 text-center text-gray-700 cursor-pointer"
        >
          <img
            className="w-52 h-48"
            src={require("../../../../assets/product_categories/cat5.png")}
            alt="category 5"
          />
          <span className="mt-2 block">Посуда</span>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
