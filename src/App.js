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
