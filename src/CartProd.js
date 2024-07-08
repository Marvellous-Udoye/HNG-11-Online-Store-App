import productImage1 from './images/image 14.svg';
import productImage2 from './images/image 15.svg';
import productImage3 from './images/image 16.svg';
import productImage4 from './images/image 17.svg';
import productImage5 from './images/image 18.svg';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const products = [
    { name: "HISENSE 100 INCH U7K SERIES ULED 4K", price: 3900950, quantity: 1, image: productImage1 },
    { name: "HISENSE 20KG ICE MAKER", price: 169900, quantity: 2, image: productImage2 },
    { name: "MAXI GENERATOR 2.5KVA", price: 3597900, quantity: 1, image: productImage3 },
    { name: "HAWAII 2.5KW INVERTER", price: 418200, quantity: 1, image: productImage4 },
    { name: "BINATONE BLENDER", price: 46990, quantity: 1, image: productImage5 },
  ];

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="cart-page">
      <main className="cart-container m-container">
        <p className='stage-cart'><span className='go=to-home'>Home</span> <span>/</span> Cart</p>
        <h1>Cart</h1>
        <div className="progress-bar">
          <div className="step active"></div>
          <div className="step"></div>
          <div className="step"></div>
          <div className='step-num-container'>
            <span className="step-num">1</span>
            <span className="step-num">2</span>
          </div>
        </div>
        <div className='cartProd-container'>
          <div className="cart-items">
            <div className='cart-heading'>
              <p className='first-p'>Product Name</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            {products.map((product, index) => (
              <div className='cart-item' key={index}>
                <div className='product-cart-image'><img src={product.image} alt="Product" /></div>
                <div className='cart-product-details'>
                  <p>{product.name}</p>
                  <p>₦{product.price.toLocaleString()}</p>
                  <div className="quantity-control">
                    <button>-</button>
                    <span>{product.quantity}</span>
                    <button>+</button>
                  </div>
                  <p className='total-p'>₦{(product.price * product.quantity).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Sub-Total <span>₦{calculateTotal().toLocaleString()}</span></p>
            <p>Shipping Fee <span>₦1,000</span></p>
            <hr />
            <div className='coupon'> 
              <input placeholder='Coupon Code' id='coupon' type="text" />
              <button>Apply</button>
            </div>
            <h6>Total Price <span>₦{(calculateTotal() * 1.075 + 1000).toLocaleString()}</span></h6>
            <button><Link to='/Checkout'>Checkout</Link></button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CartPage;
