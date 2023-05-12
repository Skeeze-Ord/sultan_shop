import React, { useEffect, useState } from "react";
import { ConnectToDb } from "../screens/DataBase/ConnectionToDB";
import Header from "../screens/Home/Header";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    const request = indexedDB.open("LocalDataBase", 1);

    request.onsuccess = (event) => {
      const showAllRequest = ConnectToDb(event).getAll(
        IDBKeyRange.lowerBound(0)
      );

      showAllRequest.onsuccess = (event) => {
        const products = event.target.result;

        const counts = {};
        let uniqueProductsInCart = [];

        products.forEach((element) => {
          if (counts[element.note.name]) {
            counts[element.note.name]++;
          } else {
            counts[element.note.name] = 1;
            uniqueProductsInCart.push(element.note);
          }
        });

        const productsWithCount = uniqueProductsInCart.map((product) => {
          return {
            ...product,
            count: counts[product.name],
          };
        });

        setProductsInCart(productsWithCount);
      };
      event.target.result.close();
    };
  }, []);

  const handleDeleteClick = (productId) => {
    const request = indexedDB.open("LocalDataBase", 1);
    request.onsuccess = (event) => {
      const deleteRequest = ConnectToDb(event).delete(productId);

      deleteRequest.onsuccess = () => {
        setProductsInCart((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      };

      deleteRequest.onerror = () => {
        console.log("Failed to delete product with id", productId);
      };
    };
  };

  return (
    <div>
      <Header />
      <div className="container w-4/5 mx-32">
        <Link className="underline hover:no-underline" to="/">
          Главная
        </Link>{" "}
        / Корзина
      </div>

      <div className="w-full max-w-2xl mx-auto my-8">
        {productsInCart.length > 0 ? (
          <>
            <h2 className="text-lg font-medium mb-4">Корзина</h2>
            <div className="bg-white rounded shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="py-2 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Продукт
                    </th>
                    <th className="py-2 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Цена
                    </th>
                    <th className="py-2 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Количество
                    </th>
                    <th className="py-2 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Итого
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productsInCart.map((product, index) => (
                    <tr
                      key={product.id}
                      className={index % 2 === 0 ? "bg-gray-50" : ""}
                    >
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">
                        {product.name}
                      </td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">
                        {product.price} руб.
                      </td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">
                        {product.count} шт.
                      </td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">
                        {product.price * product.count} руб.
                      </td>
                      <td>
                        <button className="inline-flex items-center justify-center rounded-full p-1 transition-colors duration-300 hover:bg-red-500 hover:text-white">
                          <span
                            className="h-5 w-5"
                            onClick={() => handleDeleteClick(product.id)}
                          >
                            X
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <span>Всего товаров в корзине: </span>
              {productsInCart.length}
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center">Корзина пуста</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
