import React from "react";
import "../style/Home.css";
import Product from "./Product";
import home_img from "../assets/home_img.png";
import tv from "../assets/tv.png";
import watch from "../assets/watch.png"
import iphone from "../assets/iphone.png"
import camera from "../assets/camera.png"
import vr from "../assets/vr.png"


function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img src={home_img} alt="" className="home_img" />
        <div className="home_row">
          <Product
            id="1"
            title="Sony Bravia 189 cm (75 inches) 4K Ultra HD Smart LED Google TV KD-75X80K (Black)"
            price= {151990}
            rating={5}
            image={tv}
          />
          <Product
            id="2"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={10999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home_row">
        <Product
            id="3"
            title="Canon EOS 6D Mark II 26.2MP Digital SLR Camera with EF24-105 mm f/4L is II USM Lens [Black]"
            price={169490}
            rating={4}
            image={camera}
          />
          <Product
            id="4"
            title="Apple iPhone 14 Pro Max (128 GB) - Deep Purple"
            price={139900}
            rating={5}
            image={iphone}
            />
        <Product
            id="5"
            title="Apple Watch Ultra [GPS + Cellular 49 mm] Smart Watch w/Rugged Titanium Case & Midnight Ocean Band. Fitness Tracker, Precision GPS, Action Button, Extra-Long BatteryLife, Brighter Retina Display"
            price={87203}
            rating={4}
            image={watch}
          />
        </div>

        <div className="home_row">
        <Product
            id="6"
            title="Oculus Rift + Touch Virtual Reality System"
            price={64990}
            rating={4}
            image={vr}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
