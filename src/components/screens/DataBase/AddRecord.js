import { ConnectToDb } from "./ConnectionToDB";

export const AddRecord = (note) => {
  const request = indexedDB.open("LocalDataBase", 1);

  request.onupgradeneeded = (event) => {
    const db = event.target.result;

    const objectStore = db.createObjectStore("productObjectStore", {
      keyPath: "id",
      autoIncrement: true,
    });
  };

  request.onsuccess = (event) => {
    const request = ConnectToDb(event).add({ note });

    request.onsuccess = () => {
      console.log("Record added successfully");
    };

    request.onerror = (event) => {
      console.error(event.target.error);
    };
  };

  request.onerror = (event) => {
    console.error(event.target.error);
  };
};
