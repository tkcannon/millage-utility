import { useEffect, useState } from "react";
import { importCSV } from "../../utils/importCSV";

function DataImport({ setData }) {
  const [importFile, setImportFile] = useState("");

  const handleFileChange = (event) => {
    setImportFile(event.target.files[0]);
  };

  const handleImport = (event) => {
    event.preventDefault();
    importCSV(importFile, setData);
  };

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
