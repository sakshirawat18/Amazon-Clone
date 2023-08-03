import React from "react";
import "../style/Checkout.css";
import checkout_ad from "../assets/checkout_ad.png";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">

      <div className="checkout_left">
        <img className="checkout_ad" src={checkout_ad} alt="" />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your Shopping Cart</h2>
          {cart.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          
        </div>
      </div>

      <div className="checkout_right">
      <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
