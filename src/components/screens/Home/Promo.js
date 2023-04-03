import React from "react";
import data from "../../../data.json";
import "../../../index.css";

const Promo = () => {
  return (
    <div>
      <div className="text-3xl font-semibold container mx-32 pb-12">
        <span className="text-amber-400">АКЦИОННЫЕ</span> ТОВАРЫ
      </div>

      <div className="produtcs flex flex-wrap container mx-32 w-4/5">
        {Object.keys(data).map((key) => (
          <div className="child " key={data[key].id}>
            <span className="z-50 rounded-xl px-3 text-white py-1 items-center bg-green-500">
              Популярное
            </span>
            <div className="flex justify-center pt-2 h-40 ">
              <img src={data[key].url} alt="product" />
            </div>
            <div className="text-gray-700">{data[key].volume}</div>
            <div className="description">{data[key].description}</div>
            <div className="items-center">
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
              <div className="flex justify-start pb-5 items-center bottom-0">
                <div className="font-bold pr-10">
                  {data[key].price.toLocaleString()}&#8376;
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promo;
