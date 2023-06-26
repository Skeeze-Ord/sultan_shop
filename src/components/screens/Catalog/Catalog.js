import React, { useState } from "react";
import data from "../../../data.json";
import { AddRecord } from "../DataBase/AddRecord";
import Header from "../Home/Header";
import { Link } from "react-router-dom";
import { sortByName } from "./Sort/sortByName";
import { sortByPrice } from "./Sort/sortByPrice";

const Catalog = () => {
  const [product, setProduct] = useState(null);
  const [sortedItems, setSortedItems] = useState(data);
  const [sortType, setSortType] = useState("");

  const handleChange = (item) => {
    setProduct(item);
  };

  const handleSortByPrice = (type) => {
    const sorted = sortByPrice(sortedItems, type);
    setSortedItems(sorted);
    setSortType(type);
  };

  const handleSortByName = (type) => {
    const sorted = sortByName(sortedItems, type);
    setSortedItems(sorted);
    setSortType(type);
  };

  return (
    <div>
      <Header />

      <div className="container w-4/5 mx-32 pb-10">
        <Link className="underline hover:no-underline" to="/">
          Главная
        </Link>{" "}
        / Каталог
      </div>

      <div className="flex gap-2 justify-end container w-4/5 mx-32">
        <button onClick={() => handleSortByPrice("asc")}>Price&uarr;</button>
        <button onClick={() => handleSortByPrice("desc")}>Price&darr;</button>
        <button onClick={() => handleSortByName("asc")}>Name &uarr;</button>
        <button onClick={() => handleSortByName("desc")}>Name &darr;</button>
      </div>

      <div className="flex container mx-32 w-5/6">
        <div>
          <div className="font-bold">ФИЛЬТРЫ</div>
          <div className="pt-5">
            <span>Цена</span>
            <div className="pt-3">
              <input
                className="rounded-2xl w-14 mr-2 bg-yellow-200"
                type="text"
              />{" "}
              -{" "}
              <input
                className="rounded-2xl w-14 ml-2 bg-yellow-200"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="produtcs flex flex-wrap container mx-32 w-5/6">
          {sortedItems.map((item) => (
            <div
              className="border border-solid px-1 py-2 child flex-col flex-auto h-auto"
              key={item.id}
              onClick={() => {
                handleChange(item);
              }}
            >
              {/* Верхний (картинка)*/}
              <div>
                <span className="z-50 rounded-xl px-3 text-white py-1 items-center bg-green-500">
                  Популярное
                </span>
                <div className="flex justify-center pt-2 h-40 ">
                  <img src={item.url} alt="product" />
                </div>
              </div>

              {/* Средний (описание) */}
              <div className="items-center h-56 flex-grow">
                <div className="text-gray-700">{item.volume}</div>
                <div className="h-20">{item.description}</div>
                <div className="pt-4">
                  <span className="text-gray-700">Штрихкод: </span>
                  {item.barcode}
                </div>
                <div>
                  <span className="text-gray-700">Производитель: </span>
                  {item.creator}
                </div>
                <div>
                  <span className="text-gray-700">Бренд: </span>
                  {item.brand}
                </div>
              </div>

              {/* Нижний (цена + кнопка) */}
              <div className="flex justify-evenly pt-3 pb-5 items-center h-max ">
                <div className="font-bold">
                  {item.price.toFixed(2).toLocaleString()}&#8376;
                </div>
                <div
                  onClick={() => AddRecord(item)}
                  className="flex justify-between rounded-3xl w-40 text-white px-4 py-2 bg-amber-400 cursor-pointer"
                >
                  <div>В корзину </div>
                  <img
                    className="w-8"
                    src={require("../../../assets/icons/whiteCartIcon.png")}
                    alt="cart icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
