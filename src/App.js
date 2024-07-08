import './App.css';
import './Main';
import Navbar from './Navbar';
import Banner from './Main';
import Feat from './Featuredproducts';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Feat />
      <Footer />
    </div>
  );
}

export default App;
