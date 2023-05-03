export function idbPromise(method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("millage-utility", 1);
    let db, tx, store;
    request.onupgradeneeded = function (e) {
      const db = request.result;
      db.createObjectStore("trips", { keyPath: "_id" });
    };

    request.onerror = function (e) {
      console.log("There was an error");
    };

    request.onsuccess = function (e) {
      db = request.result;
      tx = db.transaction("trips", "readwrite");
      store = tx.objectStore("trips");

      db.onerror = function (e) {
        console.log("error", e);
      };

      switch (method) {
        case "put":
          if (object.length) {
            for (let i = 0; i < object.length; i++) {
              store.put(object[i]);
            }
          } else {
            store.put(object);
          }
          resolve(object);
          break;
        case "get":
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case "delete":
          store.delete(object._id);
          break;
        default:
          console.log("No valid method");
          break;
      }

      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}
