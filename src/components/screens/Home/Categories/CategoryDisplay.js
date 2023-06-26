import React, { useEffect, useState } from "react";
import data from "../../../../data.json";
import { AddRecord } from "../../DataBase/AddRecord";
import PopUp from "../PopUp";
import Header from "../Header";
import { Link } from "react-router-dom";

const CategoryDisplay = ({ category, a }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let _ = [];
    Object.keys(data).map((key) => {
      for (let i = 0; i < data[key].categories.length; i++) {
        if (data[key].categories[i] === category) {
          _.push(data[key]);
        }
      }
    });

    setProducts(_);
  }, []);

  const handleChange = (item) => {
    setProduct(item);
  };

  if (products !== null) {
    return (
      <div>
        <Header />

        <div className="container w-4/5 mx-32 pb-10">
          <Link className="underline hover:no-underline" to="/">
            Главная
          </Link>{" "}
          / {a}
        </div>

        <div className="flex flex-wrap container mx-32 w-5/6">
          {Object.keys(products).map((key) => (
            <div
              className="border border-solid px-1 py-2 child flex-col flex-auto h-auto"
              key={products[key].id}
              onClick={() => {
                handleChange(products[key]);
                setShowPopup(true);
              }}
            >
              {/* Верхний (картинка)*/}
              <div>
                <span className="z-50 rounded-xl px-3 text-white py-1 items-center bg-green-500">
                  Популярное
                </span>
                <div className="flex justify-center pt-2 h-40 ">
                  {products[key] && products[key].url && (
                    <img src={products[key].url} alt="product" />
                  )}
                </div>
              </div>

              {/* Средний (описание) */}
              <div className="items-center h-56 flex-grow">
                <div className="text-gray-700">{products[key].volume}</div>
                <div className="h-20">{products[key].description}</div>
                <div className="pt-4">
                  <span className="text-gray-700">Штрихкод: </span>
                  {products[key].barcode}
                </div>
                <div>
                  <span className="text-gray-700">Производитель: </span>
                  {products[key].creator}
                </div>
                <div>
                  <span className="text-gray-700">Бренд: </span>
                  {products[key].brand}
                </div>
              </div>

              {/* Нижний (цена + кнопка) */}
              <div className="flex justify-evenly pt-3 pb-5 items-center h-max ">
                <div className="font-bold">
                  {products[key].price.toFixed(2).toLocaleString()}&#8376;
                </div>
                <div
                  onClick={() => AddRecord(products[key])}
                  className="flex justify-between rounded-3xl w-40 text-white px-4 py-2 bg-amber-400 cursor-pointer"
                >
                  <div>В корзину </div>
                  <img
                    className="w-8"
                    src={require("../../../../assets/icons/whiteCartIcon.png")}
                    alt="cart icon"
                  />
                </div>
              </div>
            </div>
          ))}

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
      </div>
    );
  }
};

export default CategoryDisplay;
