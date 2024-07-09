import React from 'react';
import logo from './images/Logo.svg';
import google from './images/Get.svg';
import apple from './images/Get (1).svg';
import Twitter from './images/1.svg';
import Fcb from './images/2.svg';
import Instagram from './images/3.svg';

const Footer = () => {
  return (
    <div>
      <div className="Subscribe">
        <div className="Newsletter m-container">
          <p>Subscribe to our newsletter to get updates on our latest offers!</p>
          <form className='Form'>
            <input id="Email" type="email" placeholder="Enter your Email Address" required />
            <button htmlFor="Email">Subscribe</button>
          </form>
        </div>
      </div>
      <footer>
        <div className="Outro m-container">
          <div className="links">
            <div className='help'>
              <p className='footer-p'>Let Us Help You</p>
              <p>Accessibility Statement</p>
              <p>Your Orders</p>
              <p>Returns and Replacement</p>
              <p>Shipping Rates and Policies</p>
              <p>Refund and Return Policy</p>
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
              <p>Cookie Settings</p>
              <p>Help Center</p>
            </div>
            <div className='about'>
              <p className='footer-p'>About</p>
              <p>Contact Us</p>
              <p>Careers</p>
              <p>Blogs</p>
              <p>Customers Reviews</p>
              <p>FAQs</p>
            </div>

          </div>
          <div className='f-small-screen'>
            <div className='support'>
              <p className='footer-p'>Support</p>
              <p>Showrooms</p>
              <p>Customer Service</p>
              <p>Affiliates</p>
              <p>After Service Sales</p>
            </div>
            <div className="follow">
              <div className="social-media">
                <p>Follow Us on Social Media</p>
                <div className='social-media-apps'>
                  <img src={Twitter} alt='Twitter' />
                  <img src={Fcb} alt='Facebook' />
                  <img src={Instagram} alt='Instagram' />
                </div>
              </div>
              <div className="download">
                <h4>Download our app</h4>
                <div className='apps'>
                  <img src={google} alt='Download on Google Store' />
                  <img src={apple} alt='Download on Apple Store' />
                </div>
              </div>
            </div>
            <div className="logo">
              <img src={logo} alt='Logo' />
            </div>
          </div>
        </div>
        <hr className='m-container' />
        <div className='Finalle m-container'>
          <div className='impo-links'>
            <p>Terms and Conditions</p>
            <p href="#policy">Policy</p>
            <p href="#privacy">Privacy</p>
            <p href="#order">Order</p>
          </div>
          <div className='copyright'>
            <p>© Copyright 2024, All rights Reserved by Timbu Cloud Shop</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
