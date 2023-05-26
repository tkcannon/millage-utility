import "./App.css";
import { SiteProvider, useSiteContext } from "./state/GlobalState";
import InputForm from "./components/InputForm";
import DataImport from "./components/DataImport";

import DaysContainer from "./components/DaysContainer";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Header from "./components/Header";

function App() {
  const mainTheme = createTheme({
    typography: {
      fontSize: 16,
      h1: { fontSize: "2.25rem" },
      h2: { fontSize: "2rem" },
      h3: { fontSize: "1.75rem" },
      h4: { fontSize: "1.5rem" },
      h5: { fontSize: "1.25rem" },
      h6: { fontSize: "1rem" },
    },
  });

  return (
    <div className="App">
      <SiteProvider>
        <ThemeProvider theme={mainTheme}>
          <Header />
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
