import React from "react";
import "../style/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove the item from the cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutproduct">
      <img className='checkoutpro_image' src={image} />
      <div className="checkoutpro_info">
        <p>{title}</p>
        <p className="checkoutpro_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutpro_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐️</p>
            ))}
        </div>
        
          <button onClick={removeFromCart}>Remove from Cart</button>
        
      </div>
    </div>
  );
}

export default CheckoutProduct;
