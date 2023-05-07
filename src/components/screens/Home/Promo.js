import React, { useState } from "react";
import data from "../../../data.json";
import "../../../index.css";
import PopUp from "./PopUp";
import { AddRecord } from "../DataBase/AddRecord";

const Promo = () => {
  // PopUp
  const [showPopup, setShowPopup] = useState(false);

  // Product
  const [product, setProduct] = useState(null);
  const handleChange = (item) => {
    setProduct(item);
  };

  // Count of product
  const [countToAdd, setCountToAdd] = useState(0);
  const AddCount = () => {
    setCountToAdd(countToAdd + 1);
  };
  const TakeCount = () => {
    countToAdd > 0 ? setCountToAdd(countToAdd - 1) : setCountToAdd(0);
  };

  return (
    <div>
      <div className="text-3xl font-semibold container mx-32 pb-12">
        <span className="text-amber-400">АКЦИОННЫЕ</span> ТОВАРЫ
      </div>

      <div className="produtcs flex flex-wrap container mx-32 w-5/6">
        {Object.keys(data).map((key) => (
          <div
            className="border border-solid px-1 py-2 child cursor-pointer flex-col flex-auto h-auto"
            key={data[key].id}
            onClick={() => {
              handleChange(data[key]);
              setShowPopup(true);
              AddRecord(data[key]);
            }}
          >
            {/* Верхний (картинка)*/}
            <div>
              <span className="z-50 rounded-xl px-3 text-white py-1 items-center bg-green-500">
                Популярное
              </span>
              <div className="flex justify-center pt-2 h-40 ">
                <img src={data[key].url} alt="product" />
              </div>
            </div>

            {/* Средний (описание) */}
            <div className="items-center flex-grow">
              <div className="text-gray-700">{data[key].volume}</div>
              <div className="h-20">{data[key].description}</div>
              <div className="pt-4">
                <span className="text-gray-700">Штрихкод: </span>
                {data[key].barcode}
              </div>
              <div>
                <span className="text-gray-700">Производитель: </span>
                {data[key].creator}
              </div>
              <div>
                <span className="text-gray-700">Бренд: </span>
                {data[key].brand}
              </div>
            </div>

            {/* Нижний (цена + кнопка) */}
            <div className="flex justify-evenly pt-3 pb-5 items-center h-max ">
              <div className="font-bold">
                {data[key].price.toLocaleString()}&#8376;
              </div>
              <div className="flex justify-between rounded-3xl w-40 text-white px-4 py-2 bg-amber-400 cursor-pointer">
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

      {showPopup && (
        <PopUp>
          <div className="popup container mx-32 w-4/5">
            <button
              className="float-right font-sans text-xl font-bold leading-none shadow-sm opacity-50 mr-2"
              onClick={() => setShowPopup(false)}
            >
              X
            </button>
            <div className="flex justify-center">
              <div className="w-60 items-center">
                <img
                  className="float-left h-60"
                  src={product.url}
                  alt="some product"
                />
              </div>
              <div className="items-center pt-16">
                <div className="font-bold text-2xl uppercase pb-4">
                  {product.name}
                </div>
                <div className="w-4/5  text-xl text-gray-900">
                  {product.description}
                </div>
                <div className="text-gray-700 text-xs pt-1">
                  {product.volume}
                </div>
                <div className="flex pt-4 justify-start items-center space-x-12">
                  <div className="text-xl font-bold">
                    {product.price.toLocaleString()}&#8376;
                  </div>
                  <div className="items-center select-none">
                    <span
                      className="cursor-pointer text-center bg-amber-200 rounded-full w-20 px-1.5"
                      onClick={() => TakeCount()}
                    >
                      -
                    </span>
                    <span className="px-3.5">{countToAdd}</span>
                    <span
                      className="cursor-pointer text-center bg-amber-200 rounded-full w-20 px-1.5"
                      onClick={() => AddCount()}
                    >
                      +
                    </span>
                  </div>
                  <div className="flex bottom-0 justify-between rounded-3xl text-white px-4 py-2 bg-amber-400 cursor-pointer">
                    <div>В корзину </div>
                    <img
                      className="w-8"
                      src={require("../../../assets/icons/whiteCartIcon.png")}
                      alt="cart icon"
                    />
                  </div>
                </div>
                <div>
                  <div className="pt-4">
                    <span className="text-gray-700">Артикул: </span>
                    {product.barcode}
                  </div>
                  <div>
                    <span className="text-gray-700">Производитель: </span>
                    {product.creator}
                  </div>
                  <div>
                    <span className="text-gray-700">Бренд: </span>
                    {product.brand}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PopUp>
      )}
    </div>
  );
};

export default Promo;
