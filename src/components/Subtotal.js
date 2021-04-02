import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal(props) {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        // value={getBasketTotal(basket)}
        value={0}
        displayType={"text"}
        ThousandSeparator={true}
        prefix={"&#8377;"}
      />

      <button>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
