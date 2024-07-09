import React from 'react';
import Tick from './images/tick-04.svg';

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
          <li>Convenient Checkout Process <img className='Tick' src={Tick} alt='Check Mark' /></li>
          <li>Quick Customer Service <img className='Tick' src={Tick} alt='Check Mark' /></li>
          <li>Product Quality <img className='Tick' src={Tick} alt='Check Mark' /></li>
          <li>Fast Delivery <img className='Tick' src={Tick} alt='Check Mark' /></li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Banner;
