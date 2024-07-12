import productImage1 from './images/image 14.svg';
import productImage2 from './images/image 15.svg';
import productImage3 from './images/image 16.svg';
import productImage4 from './images/image 17.svg';
import productImage5 from './images/image 18.svg';
import remove from './images/delete-02.svg';
import { Link } from 'react-router-dom';


const CartPage = () => {
  const products = [
    { name: "HISENSE 100 INCH U7K SERIES ULED 4K", price: 3900990, quantity: 1, image: productImage1 },
    { name: "HISENSE 20KG ICE MAKER ICM2011", price: 160900, quantity: 2, image: productImage2 },
    { name: "MAXI E17000KWH GENERATOR 21.25 KVA", price: 3597900, quantity: 1, image: productImage3 },
    { name: "HUAWEI -M 2.5kW POWER  INVERTER", price: 4182900, quantity: 1, image: productImage4 },
    { name: "BINATONE BLENDER", price: 48990, quantity: 3, image: productImage5 },
  ];

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="cart-page">
      <main className="cart-container">
        <p className='stage-cart stage-cart-cart'><span className='go=to-home'>Home</span> <span>/</span> Cart</p>
        <h1 className='Cart'>Cart</h1>
        <div className="progress-bar cart-progress-bar">
          <div className="checkout-step active"></div>
          <div className="checkout-step not-active"></div>
          <div className="checkout-step not-active"></div>
          <div className='step-num-container'>
            <span className="checkout-step-num">1</span>
            <span className="checkout-step-num">2</span>
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
                <img className='delete' src={remove} alt='Remove item' />
                <div className='product-cart-image'><img src={product.image} alt="Product" /></div>
                <div className='cart-product-details'>
                  <p>{product.name}</p>
                  <p>₦{product.price.toLocaleString()}</p>
                  <div className="quantity-control">
                    <button>-</button>
                    <span>{product.quantity}</span>
                    <button>+</button>
                  </div>
                  <p className='total-p'>Total: <span className='total-p-span'>₦{(product.price * product.quantity).toLocaleString()}</span></p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Sub-Total <span>₦{calculateTotal().toLocaleString()}</span></p>
            <p>Shipping Fee <span>₦83,000</span></p>
            <hr />
            <div className='coupon'>
              <input placeholder='Coupon Code' id='coupon' type="text" />
              <button>Apply</button>
            </div>
            <h6>Total Price <span>₦{(calculateTotal() + 83000).toLocaleString()}</span></h6>
            <button className='go-to-checkout'><Link to='/Checkout'>Checkout</Link></button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CartPage;
