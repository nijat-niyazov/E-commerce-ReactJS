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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  // const { ordered } = useSelector(state => state.basketReducer);

  return (
    // <div className="App" style={{ overflowY: `${ordered ? 'hidden' : ''}` }}>
    <div className="App">
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
      <ToastContainer
        autoClose={3000}
        pauseOnFocusLoss
        // toastStyle={{ backgroundColor: 'aqua', color: 'black' }}
        position="top-right"
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        draggable={true}
        pauseOnHover
        theme="colored"
      />
      <Footer />
    </div>
  );
}

export default App;
