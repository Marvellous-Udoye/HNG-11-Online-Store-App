import Navbar from "../Navbar";
import CartPage from "../CartProd";
import Footer from "../Footer";
import { Helmet } from 'react-helmet';

function CartProdList() {
  return (
    <div>
      <Helmet>Timbu Cloud Shop-Cart Page</Helmet>
      <Navbar />
      <CartPage />
      <Footer />
    </div>
  )
}

export default CartProdList