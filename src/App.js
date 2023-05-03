import "./App.css";
import InputForm from "./components/InputForm";
import Table from "./components/Table";
import DataImport from "./components/DataImport";
import { useEffect, useState } from "react";

function App() {
  const useDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  console.log(useDarkTheme);

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App" data-theme={useDarkTheme ? "dark" : "light"}>
      <header className="App-header">
        <h1>Millage Utitliy</h1>
      </header>
      <DataImport setData={setData} />
      <InputForm />
      <Table data={data} />
    </div>
  );
}

export default App;
