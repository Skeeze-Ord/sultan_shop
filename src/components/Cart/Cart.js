import React, { useEffect, useState } from "react";
import { DBProduct } from "../screens/DataBase/DBProduct";
import Header from "../screens/Home/Header";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    const request = indexedDB.open("LocalDataBase", 2);

    request.onsuccess = (event) => {
      const showAllRequest = DBProduct(event).getAll(IDBKeyRange.lowerBound(0));

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
    const request = indexedDB.open("LocalDataBase", 2);

    request.onsuccess = (event) => {
      const deleteRequest = DBProduct(event).delete(productId);

      deleteRequest.onsuccess = () => {
        setProductsInCart((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      };

      deleteRequest.onerror = () => {
        console.log("Failed to delete product with id ", productId);
      };
    };
  };

  const totalInfo = () => {
    let totalCount = 0;
    let totalSum = 0;
    productsInCart.map((element) => {
      totalCount += element.count;
      totalSum += element.price * element.count;
    });
    return [totalCount, totalSum];
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
                        {product.price.toFixed(2)} &#8376;
                      </td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">
                        {product.count} шт.
                      </td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">
                        {(product.price * product.count).toFixed(2)} &#8376;
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
              <div className="pt-4">
                Всего товаров в корзине: {totalInfo()[0]} <br />
                На общую сумму: {totalInfo()[1].toLocaleString()}
                &#8376;
              </div>
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
