import { useState, useEffect } from "react";
import { ConnectToDb } from "./ConnectionToDB";

export const GetCount = () => {
  const [keyCount, setKeyCount] = useState(0);

  useEffect(() => {
    const request = indexedDB.open("LocalDataBase", 1);

    request.onerror = () => {
      console.log("Failed to open database");
    };

    request.onsuccess = (event) => {
      const countRequest = ConnectToDb(event).count();

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
