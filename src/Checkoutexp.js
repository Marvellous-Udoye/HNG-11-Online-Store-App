import productImage1 from './images/image 19.svg';
import productImage2 from './images/image 20.svg';
import productImage3 from './images/image 21.svg';
import productImage4 from './images/image 22.svg';
import productImage5 from './images/image 23.svg';

const CheckoutPage = () => {
    const products = [
        { name: "HISENSE 100 INCH U7K SERIES ULED 4K", price: 3900950, quantity: 1, image: productImage1 },
        { name: "HISENSE 20KG ICE MAKER", price: 169900, quantity: 2, image: productImage2 },
        { name: "MAXI GENERATOR 2.5KVA", price: 3597900, quantity: 1, image: productImage3 },
        { name: "HAWAII 2.5KW INVERTER", price: 418200, quantity: 1, image: productImage4 },
        { name: "BLENDTEC BLENDER", price: 46990, quantity: 3, image: productImage5 },
    ];

    const calculateTotal = () => {
        return products.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    return (
        <div className="checkout-page-container">
            <main className="checkout-page-content m-container">
                <p className='stage-cart'><span className='go-to-home'>Home</span> <span className='go-to-home'>/ </span><span className='go=to-home'>Cart</span> <span>/</span> Checkout</p>
                <h1>Checkout</h1>
                <div className="progress-bar">
                    <div className="checkout-step active"></div>
                    <div className="checkout-step active"></div>
                    <div className="checkout-step active"></div>
                    <div className='checkout-step-num-container'>
                        <span className="checkout-step-num">1</span>
                        <span className="checkout-step-num">2</span>
                    </div>
                </div>
                <div className="checkout-details-section">
                    <div className="checkout-billing-details">
                        <h2>Billing Details</h2>
                        <form>
                            <div className="checkout-form-group">
                                <label>Full Name <span>*</span></label>
                                <input type="text" name="name" placeholder="Darwin Nunez" />
                            </div>
                            <div className="checkout-form-group">
                                <label>Email Address <span>*</span></label>
                                <input type="email" name="email" placeholder="Darwin Nunez@gmail.com" />
                            </div>
                            <div className="checkout-form-group">
                                <label>Phone Number <span>*</span></label>
                                <input type="tel" name="phone" placeholder="+44   |   (555) 123-4567" />
                            </div>
                            <div className="checkout-form-group">
                                <label>Address <span>*</span></label>
                                <input type="text" name="address" placeholder="Block 12C, West Minister Area" />
                            </div>
                            <div className="checkout-form-group">
                                <label>City <span>*</span></label>
                                <input type="text" name="city" placeholder="Liverpool" />
                            </div>
                            <div className="checkout-form-group">
                                <label>Country <span>*</span></label>
                                <input type="text" name="country" placeholder="England" />
                            </div>
                            <div className="checkout-form-group">
                                <label>Additional Information</label>
                                <p>Order Notes <span>(Optional)</span></p>
                                <textarea name="additional-info" rows={10} placeholder="Note about your order, e.g. special note for delivery"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="checkout-order-summary">
                        <h2>Order Summary</h2>
                        <div className="checkout-order-items">
                            {products.map((product, index) => (
                                <div className="checkout-order-item" key={index}>
                                    <img className='info-img' src={product.image} alt={product.name} />
                                    <div className='info-check-out'>
                                        <p>{product.name}</p>
                                        <p>₦{(product.price * product.quantity).toLocaleString()}</p>
                                    </div>
                                    <p>x {product.quantity}</p>
                                </div>
                            ))}
                        </div>
                        <p className='sub-t' >Sub-Total: <span className='sub-t-span'>₦{calculateTotal().toLocaleString()}</span></p>
                        <p className='sub-t'>Shipping Fee: <span className='sub-t-span'>₦3,300</span></p>
                        <div className="checkout-coupon">
                            <input type="text" placeholder="Coupon Code" />
                            <button>Apply</button>
                        </div>
                        <p className='sub-t-t-t'>Total Price: <span className='sub-t-span sub-t-t'>₦{(calculateTotal() + 3300).toLocaleString()}</span></p>
                        <button className='payment-button'>Proceed to Payment</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CheckoutPage;
