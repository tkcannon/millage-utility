import "./App.css";

function App() {
  const useDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  console.log(useDarkTheme);

  return (
    <div className="App" data-theme={useDarkTheme ? "dark" : "light"}>
      <header className="App-header">
        <h1>Millage Utitliy</h1>
      </header>
    </div>
  );
}

export default App;
