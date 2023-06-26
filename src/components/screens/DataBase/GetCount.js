import { useState, useEffect } from "react";
import { DBProduct } from "./DBProduct";
export const GetCount = () => {
  const [keyCount, setKeyCount] = useState(0);

  useEffect(() => {
    const request = indexedDB.open("LocalDataBase", 2);

    request.onerror = () => {
      console.log("Failed to open database");
    };

    request.onsuccess = (event) => {
      const countRequest = DBProduct(event).count();

      countRequest.onsuccess = (event) => {
        setKeyCount(event.target.result);
      };

      countRequest.onerror = () => {
        console.log("Failed to count of keys in database");
      };
    };
  }, []);
  return keyCount;
};
