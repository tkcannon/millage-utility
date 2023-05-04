import { useEffect, useState } from "react";
import { importCSV } from "../../utils/importCSV";
import { idbPromise } from "../../state/idb";
import { useSiteContext } from "../../state/GlobalState";
import { ADD_TRIPS } from "../../state/actions";

function DataImport() {
  const [importFile, setImportFile] = useState("");
  const [, dispatch] = useSiteContext();
  const [data, setData] = useState([]);

  const handleFileChange = (event) => {
    setImportFile(event.target.files[0]);
  };

  const handleImport = (event) => {
    event.preventDefault();
    importCSV(importFile, setData);
  };

  useEffect(() => {
    if (data.length) {
      idbPromise("put", data);
      dispatch({ type: ADD_TRIPS, trips: data });
      setData([]);
    }
  }, [data, dispatch]);

  return (
    <form>
      <label>
        Import File
        <input
          type="file"
          accept=".csv,.txt"
          onChange={handleFileChange}
        ></input>
      </label>
      <button type="submit" onClick={handleImport}>
        Import
      </button>
    </form>
  );
}

export default DataImport;
