import React from "react";
import "./SingleCurrencyComponent.css";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";

function SingleCurrencyComponent({
  image,
  name,
  symbol,
  price,
  high,
  low,
  change,
}) {
  function decimalPlaces(number) {
    return (+number).toFixed(20).replace(/^-?\d*\.?|0+$/g, "").length;
  }

  const change_ = (change) => {
    return change > 0
      ? (change = `+${change.toFixed(3)}`)
      : change.toFixed(3);
  };

  const giveColor = (data) => {
    return data < 0 ? "var(--red)" : "var(--green)";
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
          <p className="coin_high">
            ${high}
            <NorthIcon style={{ fontSize: "11px" }} />
          </p>
          <p className="coin_low">
            ${low}
            <SouthIcon style={{ fontSize: "11px" }} />
          </p>
          <div className="change">
            <p
              className="coin_change"
              style={{ color: giveColor(change) }}
            >
              {change_(change)}%
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default SingleCurrencyComponent;
