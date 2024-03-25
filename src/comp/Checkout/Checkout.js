import React from 'react';
import { useStateValue } from '../StateProvider';

function Checkout() {
  const [{basket}] = useStateValue();
  return (
    <div className='CheckOut'>
     
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />


    </div>
  );
}

export default Checkout;