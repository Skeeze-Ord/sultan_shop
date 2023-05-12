import React, { useState } from "react";
import data from "../../../data.json";
import "../../../index.css";
import PopUp from "./PopUp";
import { AddRecord } from "../DataBase/AddRecord";

const Promo = () => {
  // Product
  const [product, setProduct] = useState(null);
  const handleChange = (item) => {
    setProduct(item);
  };

  // PopUp
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <div className="text-3xl font-semibold container mx-32 pb-12 pt-20">
        <span className="text-amber-400">АКЦИОННЫЕ</span> ТОВАРЫ
      </div>

      <div className="produtcs flex flex-wrap container mx-32 w-5/6">
        {Object.keys(data).map((key) => (
          <div
            className="border border-solid px-1 py-2 child flex-col flex-auto h-auto"
            key={data[key].id}
            onClick={() => {
              handleChange(data[key]);
              setShowPopup(true);
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
            <div className="items-center h-56 flex-grow">
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
              <div
                onClick={() => AddRecord(data[key])}
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

      {/* Show PopUp */}
      {showPopup && (
        <div className="">
          <button
            className="float-right font-sans text-xl font-bold leading-none opacity-50 hover:opacity-100 transition ease-in-out duration-300"
            onClick={() => setShowPopup((prevState) => !prevState)}
          >
            &times;
          </button>
          <PopUp
            product={{
              url: product.url,
              name: product.name,
              description: product.description,
              volume: product.volume,
              price: product.price,
              barcode: product.barcode,
              creator: product.creator,
              brand: product.brand,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Promo;
