import React from "react";
import { useStateValue } from "../store/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Chceckout(props) {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP//TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Ad Banner"
        />
        <div className="checkout__productList">
          <h3>Hello, {user ? user?.email : "Guest. Login to Continue"}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
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
