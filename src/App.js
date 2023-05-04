import "./App.css";
import { SiteProvider, useSiteContext } from "./state/GlobalState";
import InputForm from "./components/InputForm";
import TableContainer from "./components/TableContainer";
import DataImport from "./components/DataImport";

function App() {
  const useDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  console.log(useDarkTheme);

  return (
    <div className="App" data-theme={useDarkTheme ? "dark" : "light"}>
      <SiteProvider>
        <header className="App-header">
          <h1>Millage Utilitiy</h1>
        </header>
        <DataImport />
        <InputForm />
        <TableContainer />
      </SiteProvider>
    </div>
  );
}

export default App;
