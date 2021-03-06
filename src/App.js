import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import LoginPage from "./components/LoginPage";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./store/StateProvider";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IcOXZSJ89g1aatqjFaytrXbeAytpRaAWUQdpNlkx0A5ZLGrcF2wQRsjFfPp60Dn3tYXZuJbBQADOBjqNIkIiWeu00QZEcMmH3"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
