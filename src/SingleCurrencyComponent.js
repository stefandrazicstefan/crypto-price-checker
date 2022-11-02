import React from "react";
import "./SingleCurrencyComponent.css";

function SingleCurrencyComponent({
  image,
  name,
  symbol,
  price,
  volume,
}) {
  return (
    <div className="component">
      <div className="coin_basic_info">
        <img
          src={image}
          alt=""
        />
        <h1 className="coin_name">{name}</h1>
        <p className="coin_symbol">{symbol}</p>
      </div>
      <div className="coin_data">
        <p className="coin_price">${price}</p>
        <p className="coin_volume">${volume}</p>
      </div>
      <hr />
    </div>
  );
}

export default SingleCurrencyComponent;
