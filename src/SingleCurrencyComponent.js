import React from "react";
import "./SingleCurrencyComponent.css";

function SingleCurrencyComponent({
  image,
  name,
  symbol,
  price,
  high,
  low,
  change,
}) {
  const change_ = (change) => {
    return change > 0
      ? (change = `+${change.toFixed(3)}`)
      : change.toFixed(3);
  };
  const giveColor = (data) => {
    return data < 0 ? "red" : "green";
  };
  return (
    <div className="wrapper">
      <div className="component">
        <div className="coin_basic_info">
          <div className="img_name">
            <img
              src={image}
              alt=""
            />
            <h1 className="coin_name">{name}</h1>
          </div>

          <p className="coin_symbol">{symbol.toUpperCase()}</p>
          <div className="price">
            <p className="coin_price">${price}</p>
          </div>
        </div>
        <div className="coin_data">
          <p className="coin_high">${high}</p>
          <p className="coin_low">${low}</p>
          <p
            className="coin_change"
            style={{ color: giveColor(change) }}
          >
            {change_(change)}%
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default SingleCurrencyComponent;
