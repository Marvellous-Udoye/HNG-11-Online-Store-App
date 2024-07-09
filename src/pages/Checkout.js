import Navbar from "../Navbar";
import CheckoutPage from "../Checkoutexp";
import Footer from "../Footer";
import { Helmet } from 'react-helmet';

function Checkout() {
  return (
    <div>
      <Helmet>Timbu Cloud Shop-Check Out Page</Helmet>
      <Navbar />
      <CheckoutPage />
      <Footer />
    </div>
  )
}

export default Checkout