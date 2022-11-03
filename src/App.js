import { useEffect, useState } from "react";
import "./App.css";
import SingleCurrencyComponent from "./SingleCurrencyComponent";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

function App() {
  const [coins, setCoins] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const queryCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(query.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(query.toLowerCase())
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
        {!isLoading ? (
          queryCoins.length < 1 ? (
            { error }.length > 1 ? (
              <div className="div">{error}</div>
            ) : coins.length > 1 ? (
              <div className="no-results">No results</div>
            ) : (
              ""
            )
          ) : (
            queryCoins.map((coin, index) => {
              if (index > 15) return;
              else {
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
              }
            })
          )
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
}

export default App;
