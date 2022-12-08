import Home from './Pages/Home';
import Footer from './Pages/Footer';
import { Routes, Route } from 'react-router-dom';
import MainNav from './Components/MainNav';
import SecondNav from './Components/SecondNav';
import About from './Pages/FootPages/About';
import Privacy from './Pages/FootPages/Privacy';
import Shipping from './Pages/FootPages/Shipping';
import Contact from './Pages/FootPages/Contact';
import Return from './Pages/FootPages/Return';
import { useSelector } from 'react-redux';
import Basket from './Pages/Basket';
import Favorites from './Pages/Favorites';

function App() {
  const { ordered } = useSelector(state => state.basketReducer);
  // console.log(ordered);

  return (
    <div className="App" style={{ overflowY: `${ordered ? 'hidden' : ''}` }}>
      {/* <div className={ordered ? 'App-over' : 'App'}> */}
      <MainNav />
      <SecondNav />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Privacy />} path="/privacy" />
        <Route element={<Shipping />} path="/shipping" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Return />} path="/return" />
        <Route element={<Basket />} path="/basket" />
        <Route element={<Favorites />} path="/favorites" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
