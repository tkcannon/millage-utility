import "./App.css";
import { SiteProvider, useSiteContext } from "./state/GlobalState";
import InputForm from "./components/InputForm";
import DataImport from "./components/DataImport";

import DaysContainer from "./components/DaysContainer";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

function App() {
  const mainTheme = createTheme();

  return (
    <div className="App">
      <SiteProvider>
        <ThemeProvider theme={mainTheme}>
          <header className="App-header">
            <h1>Millage Utilitiy</h1>
          </header>
          {/* <DataImport />
        <InputForm />
      <TableContainer /> */}
          <DaysContainer />
        </ThemeProvider>
      </SiteProvider>
    </div>
  );
}

export default App;
