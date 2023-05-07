import React from "react";
import "../../../index.css";
import { GetCount } from "../DataBase/GetCount";
import { GetSumAmount } from "../DataBase/GetSumAmount";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center text-sm">
        <div className="flex items-center">
          <img
            className="w-4 h-4"
            src={require(`../../../assets/icons/gpsIcon.png`)}
            alt="gps icon"
          />
          <div className="pl-5">
            <b>Г. Кокчетав, ул. Ж. Ташенова 129Б</b> <br />{" "}
            <span className="text-gray-600">(Рынок Восточный)</span>
          </div>
          <div className="pl-5 flex items-center">
            <img
              className="w-4 h-3"
              src={require(`../../../assets/icons/mailIcon.png`)}
              alt="mail icon"
            />
            <div className="pl-5 ">
              <b>opt.sultan@mail.ru</b> <br />{" "}
              <span className="text-gray-600">На связи в любое время</span>
            </div>
          </div>
        </div>
        <div className="list">
          <ul className="flex justify-evenly pl-16 text-gray-700">
            <li>О компании</li>
            <li>Доставка и оплата</li>
            <li>Возврат</li>
            <li>Контакты</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="pb-4 pt-2 text-sm">
        <ul className="flex items-center w-max">
          <li>
            <div className="flex items-center">
              <img
                alt="logo"
                src={require(`../../../assets/icons/sultanIcon.png`)}
              />
              <span className="tracking-widest font-serif font-bold pl-2">
                СУЛТАН
              </span>
            </div>
          </li>
          <li>
            <span className="rounded-3xl p-3 text-white px-14 bg-amber-400 cursor-pointer">
              Каталог
            </span>
          </li>
          <li className="w-52">
            <div className="bg-gray-300 rounded-3xl p-1 w-52 flex items-center justify-between">
              <input
                type="text"
                className="float-left text-gray-500 bg-gray-300 outline-none pl-2"
                placeholder="Поиск..."
              />
              <img
                className="float-right mt-1 bg-amber-400 rounded-full p-2 cursor-pointer"
                src={require(`../../../assets/icons/searchIcon.png`)}
                alt="search icon"
              />
            </div>
          </li>
          <li className="flex items-center">
            <div>
              <ul className="list-none">
                <li className="float-right">+7 (777) 490-00-91</li>
                <li className="text-gray-600">время работы: 9:00-20:00</li>
                <li className="float-right underline text-gray-600 cursor-pointer">
                  <a
                    href="https://wa.me/77774900091"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Заказать звонок
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img src={require(`../../../assets/woman.png`)} alt="woman"></img>
            </div>
          </li>
          <li className="flex rounded-3xl p-3 text-white px-14 bg-amber-400 items-center cursor-pointer">
            Прайс-лист{" "}
            <img
              className="pl-1"
              src={require(`../../../assets/icons/downloadIcon.png`)}
              alt="download button icon"
            ></img>
          </li>
          <li className="flex items-center">
            <div>
              <img
                className="cart"
                src={require("../../../assets/icons/cartIcon.png")}
                alt="cart icon"
              ></img>
              <span className="itemsCount">{GetCount()}</span>{" "}
            </div>
            <div>
              <span>Корзина</span> <br />
              <span id="amount">{GetSumAmount().toFixed(2)} &#8376;</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
