import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Chceckout(props) {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP//TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Ad Banner"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <img
          alt=""
          src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
        />
        <Subtotal />
      </div>
    </div>
  );
}

export default Chceckout;
