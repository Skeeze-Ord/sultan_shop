import { useState, useEffect } from "react";

export const GetCount = () => {
  const [keyCount, setKeyCount] = useState(0);

  useEffect(() => {
    const request = indexedDB.open("LocalDataBase", 1);

    request.onerror = () => {
      console.log("Failed to open database");
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction("productObjectStore", "readonly");
      const objectStore = transaction.objectStore("productObjectStore");

      const countRequest = objectStore.count();

      countRequest.onsuccess = (event) => {
        setKeyCount(event.target.result);
      };

      countRequest.onerror = () => {
        console.log("Failed to count keys in database");
      };
    };
  }, []);
  return keyCount;
};
