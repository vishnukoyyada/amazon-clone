import React from "react";
import "./Product.css"; // Import your CSS file
import { useStateValue } from '../StateProvider';


function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };


  return (
    <div className="product">
        <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
        <small>$</small>
        <strong>{price}</strong>
        </p>
        {/* for printing stars*/}
        <div className="product_rating">
         {
         Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))
        }
        </div>
        </div>

      <img src ={image} alt =""/>
      <button onClick={addToBasket}> Add to Basket</button>

    </div>

  );
}

export default Product;
