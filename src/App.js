import "./App.css";
import { SiteProvider, useSiteContext } from "./state/GlobalState";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Header from "./components/Header";
import Millage from "./pages/Millage";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          <BrowserRouter>
            <Header />
            <Nav />
            <Routes>
              <Route path="/millage" element={<Millage />} />
              {/* <DataImport />
        <InputForm />
      <TableContainer /> */}
              {/* <DaysContainer /> */}
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </SiteProvider>
    </div>
  );
}

export default App;
