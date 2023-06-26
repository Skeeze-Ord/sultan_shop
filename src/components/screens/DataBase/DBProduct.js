export const DBProduct = (event) => {
  const db = event.target.result;
  const transaction = db.transaction("productObjectStore", "readwrite");
  const objectStore = transaction.objectStore("productObjectStore");

  return objectStore;
};
