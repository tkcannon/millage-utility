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
      let trips = [];
      for (let i = 0; i < data.length; i++) {
        const trip = data[i];
        trips.push({
          date: trip[0],
          start: trip[1],
          end: trip[2],
          destination: trip[3],
          purpose: trip[4],
        });
      }
      idbPromise("put", trips);
      dispatch({ type: ADD_TRIPS, trips: trips });
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
