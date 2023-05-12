import { useState, useEffect } from "react";
import { ConnectToDb } from "./ConnectionToDB";

export const GetSumAmount = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const request = indexedDB.open("LocalDataBase", 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

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
      const getAllRequest = ConnectToDb(event).getAll();

      getAllRequest.onsuccess = () => {
        const data = getAllRequest.result;

        if (data && data.length) {
          const totalPrice = data.reduce((acc, obj) => acc + obj.note.price, 0);
          setTotalAmount(totalPrice);
        }
      };

      getAllRequest.onerror = () => {
        console.error("Error reading data from the database");
      };
    };
  }, []);
  return totalAmount;
};
