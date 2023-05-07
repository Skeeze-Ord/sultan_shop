import { useState, useEffect } from "react";

export const GetSumAmount = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const request = indexedDB.open("LocalDataBase", 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Создание объектного хранилища и индекса
      const store = db.createObjectStore("productObjectStore", {
        keyPath: "id",
        autoIncrement: true,
      });
      store.createIndex("notePriceIndex", "note.price");
    };

    request.onerror = (event) => {
      console.error(event.target.error);
    };

    request.onsuccess = (event) => {
      const db = event.target.result;

      const transaction = db.transaction("productObjectStore", "readonly");
      const store = transaction.objectStore("productObjectStore");
      const getAllRequest = store.getAll();

      getAllRequest.onsuccess = () => {
        const data = getAllRequest.result;

        if (data && data.length) {
          const totalPrice = data.reduce((acc, obj) => acc + obj.note.price, 0);
          console.log(totalPrice);
          setTotalAmount(totalPrice);
        } else {
          console.log("No data in the database");
        }
      };

      getAllRequest.onerror = () => {
        console.error("Error reading data from the database");
      };
    };
  }, []);
  return totalAmount;
};
