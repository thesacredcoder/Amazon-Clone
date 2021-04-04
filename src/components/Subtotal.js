import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../store/StateProvider";
import { getBasketTotal } from "../store/reducer";
import { useHistory } from "react-router";

function Subtotal(props) {
  const history = useHistory();
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

      <button onClick={(e) => history.push("/payment")}>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
