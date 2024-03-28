import React from 'react';
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
  const [{basket}] = useStateValue();
  return (
    <div>
    <div className='Checkout'> 
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket.length === 0 ?(
          <div className='checkout_left'>
            
            <h2> Your shopping basket is empty</h2>
            <p> you can add items in your basket to buy products</p>
          </div>
        ):(
          <div className='checkout_title'>
            <h2> Your shopping basket</h2>
            {/*
            for displaying items in your basket
            */
            }
            {basket.map(item =>(
              <CheckoutProduct
              id= {item.id}
              title = {item.title}
              image ={item.image}
              price ={item.price}
              rating ={item.rating}
              />
            ))}
          </div>
        
        )}
        </div>
        {basket.length >0 && (
          <div className='checkout_right'>
          </div>
        )}
    </div>
  );
}

export default Checkout;