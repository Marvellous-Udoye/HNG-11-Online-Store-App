import './App.css';
import './Main';
import Navbar from './Navbar';
import Banner from './Main';
import Feat from './Featuredproducts';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Timbu Cloud Shop</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <Banner />
      <Feat />
      <Footer />
    </div>
  );
}

export default App;


// // App.js
// import './App.css';
// import './Main';
// import Navbar from './Navbar';
// import Banner from './Main'; // Ensure this is correctly imported
// import Feat from './Featuredproducts';
// import Footer from './Footer';
// import { Helmet } from 'react-helmet';
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import DisplayProducts from './Timbuproduct';
// import CartPage from './CartProd';
// // import { useCart } from './Cartcontext';
// import { CartProvider } from './Cartcontext'; // Adjust path as per your project structure

// function App() {
//   return (
//     <Router>
//       <CartProvider>
//         <div className="App">
//           <Helmet>
//             <meta charSet="utf-8" />
//             <title>Timbu Cloud Shop</title>
//             <link rel="canonical" href="http://mysite.com/example" />
//           </Helmet>
//           <Navbar />
//           <Banner />
//           <Switch>
//             <Route exact path="/"> <Feat /> </Route>
//             <Route path="/Product"> <DisplayProducts /> </Route>
//             <Route path="/Cart"> <CartPage /> </Route>
//           </Switch>
//           <Footer />
//         </div>
//       </CartProvider>
//     </Router>
//   );
// }

// export default App;




