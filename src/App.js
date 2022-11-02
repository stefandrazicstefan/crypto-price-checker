import { useEffect } from "react";
import "./App.css";
import SingleCurrencyComponent from "./SingleCurrencyComponent";

function App() {
  return (
    <div className="app">
      <div className="search_component">
        <span>Search Cryptocurrency</span>
        <form action="">
          <input
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
      <div className="results_component">
        <SingleCurrencyComponent />
      </div>
    </div>
  );
}

export default App;
