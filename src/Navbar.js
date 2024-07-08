import logo from './images/Logo.svg';
import cart from './images/shopping-basket-01.svg';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="App-header m-container-header">
        <div><img src={logo} className="App-logo" alt="logo" /></div>
        <div className='Search'>
          <input id='Search' placeholder='Search for all accessories' type='text' required></input>
          <select>
            <option>All Categories</option>
            <option>Mobile Electronics</option>
            <option>Home Appliances</option>
          </select>
          <button for="Search">Search</button>
        </div>
        <nav className='Nav-bar'>
          <ul>
            <li><Link to='/Product'>Product</Link></li>
            <li>Contact Us</li>
            <li><img src={cart} className="Cart-logo" alt="cart" /><Link to='/Cart'>My cart</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
