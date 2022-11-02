import { useEffect, useState } from "react";
import "./App.css";
import SingleCurrencyComponent from "./SingleCurrencyComponent";
import axios from "axios";

/*https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=80&page=1&sparkline=false*/

function App() {
  const [coins, setCoins] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=80&page=1&sparkline=false"
      )
      .then((res) => setCoins(res.data))
      .catch((err) => console.log(err));
    console.log(coins);
  }, []);
  const queryCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="app">
      <div className="search_component">
        <span>Search Cryptocurrency</span>
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
      <div className="results_component">
        {queryCoins.map((coin) => {
          return (
            <SingleCurrencyComponent
              key={coin.id}
              image={coin.image}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.current_price}
              high={coin.high_24h}
              low={coin.low_24h}
              change={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
