import React from 'react';
import Check from './images/tick-04.svg';

const Banner = () => {
  return (
    <div>
      <div className='Banner'>
        <div className='Banner-details'>
          <p>Get the Best Quality Product</p>
          <button className='Active-button'>Shop Now</button>
        </div>
      </div>
      <div className='Features m-container'>
        <ul>
          <li>Convenient Checkout Process <img src={Check} alt='Check Mark' /></li>
          <li>Quick Customer Service <img src={Check} alt='Check Mark' /></li>
          <li>Product Quality <img src={Check} alt='Check Mark' /></li>
          <li>Fast Delivery <img src={Check} alt='Check Mark' /></li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Banner;
