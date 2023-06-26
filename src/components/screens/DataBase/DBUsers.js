export const DBUsers = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("LocalDataBase", 2);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains("Users")) {
        db.createObjectStore("Users", { keyPath: "login" });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
};
