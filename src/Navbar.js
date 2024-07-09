import logo from './images/Logo.svg';
import cart from './images/shopping-basket-01.svg';
import Dropdown from './images/dropdown.svg';
import Search from './images/Icon.svg'
import { useState } from 'react';
import { ReactComponent as MenuIcon } from './images/menu-02.svg';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="App-header m-container-header">
        <div><img src={logo} className="App-logo" alt="logo" /></div>
        <div className='Search'>
          <div className='Seach-full-bar'>
          <img className='Search-icon' src={Search} alt='Search icon' />
          <input id='Search' placeholder='Search for all accessories' type='text' required></input>
          </div>
          <select>
            <option>All Categories</option>
          </select>
          <button for="Search">Search</button>
        </div>
        <div className='Nav-bar'>
          <button><Link to='/Product'>Products</Link></button>
          <button>Contact Us</button>
        </div>
        <div className='toggle-menu'>
          <div className="menu-icon" onClick={toggleSidebar}>
            <MenuIcon />
          </div>
          <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
            <ul>
              <li><input type='text' placeholder='Search for all accessories' /></li>
              <li className='sidebar-dropdown'>All Categories <img src={Dropdown} alt='Select categories' /></li>
              <li><Link to='/Product'>Products</Link></li>
              <li>Contact Us</li>
              <li><p className='nav-social'>SOCIAL</p></li>
              <li>X</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </nav>
          <button className='add-to-cart-button'><img src={cart} className="Cart-logo" alt="cart" /><Link to='/Cart'>My cart<p>5</p></Link></button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

