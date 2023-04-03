import React from "react";
import data from "../../../data.json";

const PriceFilter = () => {
  let maxPrice = 0;
  let i = 0;

  while (i < data.length) {
    if (maxPrice < data[i].price) {
      maxPrice = data[i].price;
    }
    i++;
  }

  const Show = () => {
    let startPriceValue = 0;
    let endPriceValue = Math.floor(maxPrice) + 1;

    let startPrice = document.getElementById("startPrice");
    let endPrice = document.getElementById("endPrice");

    if (startPrice !== null) {
      startPriceValue = Number(startPrice.value);
    }
    if (endPrice !== null) {
      endPriceValue = Number(endPrice.value);
    }

    for (let i = 0; i < data.length; i++) {
      if (data[i].price > startPriceValue && data[i].price < endPriceValue) {
        console.log(data[i].name);
        console.log(data[i].price);
      }
    }
  };

  return (
    <div className="ml-52 mt-8 pb-16">
      <div>
        <div>Цена &#8376;</div>
        <div>
          <input
            type="text"
            className="text-center bg-amber-200 rounded-full w-20"
            name="startPrice"
            id="startPrice"
            placeholder={0}
          />{" "}
          -{" "}
          <input
            type="text"
            className="text-center bg-amber-200 rounded-full w-20"
            name="endPrice"
            id="endPrice"
            placeholder={Math.floor(maxPrice) + 1}
          />
        </div>
        <p onClick={() => Show()}>Test</p>
      </div>

      <div>
        <span>Производитель</span>
        <div>
          <form></form>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
