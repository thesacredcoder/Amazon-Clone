import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(props) {
  return (
    <div className="home">
      <div className="home__container">
        <img
          alt="Join Prime"
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
        />
        <div className="home__row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successful,
          Businesses, Paperback"
            price={521}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red), Stylish Kitchen Mixer with K-Beater, Dough Hppk and Whisk, 5 litre Steel Bowl"
            image="https://m.media-amazon.com/images/I/51ae8jtSakL._AC_UY218_.jpg"
            price={46801}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
            price={3499}
            rating={4}
          />
          <Product
            title="iPad Pro 2020 12.9 inch Wi-Fi Only&nbsp; 512 GB Space Grey+Apple Pencil (2nd Generation)"
            image="https://m.media-amazon.com/images/I/81x7ElpwjDL._AC_UY218_.jpg"
            price={127800}
            rating={4}
          />
          <Product
            title='Amazfit GTS 2 Smart Watch, 1.65" AMOLED Display, Built-in GPS, SpO2 &amp; Stress Monitor, Bluetooth Phone Calls, 3GB Music Sto...'
            image="https://m.media-amazon.com/images/I/61SlprgBhUL._AC_UY218_.jpg"
            price={12999}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            image="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY218_.jpg"
            price={500000}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
