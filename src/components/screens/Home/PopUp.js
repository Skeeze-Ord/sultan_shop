import React, { useState } from "react";

const PopUp = ({ product }) => {
  const { url, name, description, volume, price, barcode, creator, brand } =
    product;

  const [countToAdd, setCountToAdd] = useState(1);
  const AddCount = () => {
    setCountToAdd(countToAdd + 1);
  };
  const TakeCount = () => {
    countToAdd > 1 ? setCountToAdd(countToAdd - 1) : setCountToAdd(1);
  };

  return (
    <div className="popup container mx-32 w-4/5 bg-white shadow-lg rounded-lg px-4 py-6">
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="w-full lg:w-60 items-center mb-4 lg:mb-0">
          <img
            className="float-left h-60 object-cover"
            src={url}
            alt="some product"
          />
        </div>
        <div className="lg:pl-8 pt-4 lg:pt-0">
          <div className="font-bold text-2xl uppercase mb-4">{name}</div>
          <div className="text-xl text-gray-900 leading-6 mb-4">
            {description}
          </div>
          <div className="text-gray-700 text-base mb-4">{volume}</div>
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-xl font-bold">{price}&#8376;</div>
            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-300 transition ease-in-out duration-300"
                onClick={() => TakeCount()}
              >
                -
              </button>
              <span className="text-gray-700">{countToAdd}</span>
              <button
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-300 transition ease-in-out duration-300"
                onClick={() => AddCount()}
              >
                +
              </button>
            </div>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-yellow-600 transition ease-in-out duration-300">
              <span>В корзину</span>
              <img
                className="w-6"
                src={require("../../../assets/icons/whiteCartIcon.png")}
                alt="cart icon"
              />
            </button>
          </div>
          <div className="text-gray-700 text-base mb-4">
            <span className="font-bold">Артикул: </span>
            {barcode}
          </div>
          <div className="text-gray-700 text-base mb-4">
            <span className="font-bold">Производитель: </span>
            {creator}
          </div>
          <div className="text-gray-700 text-base mb-4">
            <span className="font-bold">Бренд: </span>
            {brand}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
