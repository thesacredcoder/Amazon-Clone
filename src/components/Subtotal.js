import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../store/StateProvider";
import { getBasketTotal } from "../store/reducer";

function Subtotal(props) {
  const [{ basket }, dsipatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        // value={0}
        displayType={"text"}
        ThousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
