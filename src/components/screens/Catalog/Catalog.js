import React, { useState } from "react";
import SortComponent from "./SortComponent.js";
import productData from "../../../data.json";

const Catalog = () => {
  let items = productData;
  
  return (
    <div>
      <div>
        {/* <a href={require(`../Home/Home.js`)}>Главная</a> /{" "} */}
        <a href={""}>Каталог</a>
      </div>
      <h1>КОСМЕТИКА И ГИГИЕНА</h1>
      <div>
        Сортировка: <SortComponent items={items} />
      </div>
      <ul>
        <li>Уход за телом</li>
        <li>Уход за руками</li>
        <li>Уход за ногами</li>
        <li>Уход за лицом</li>
        <li>Уход за волосами</li>
        <li>Средства для загара</li>
        <li>Средства для бритья</li>
        <li>Подарочные наборы</li>
        <li>Гигиеническая продукция</li>
        <li>Гигиена полости рта</li>
        <li>Бумажная продукция</li>
      </ul>
    </div>
  );
};

export default Catalog;
