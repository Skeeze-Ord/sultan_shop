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
    const db = event.target.result;

    const transaction = db.transaction("productObjectStore", "readwrite");
    const objectStore = transaction.objectStore("productObjectStore");

    const request = objectStore.add({ note });

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
