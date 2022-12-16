import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import MainNav from './Components/NavBar/MainNav';
import SecondNav from './Components/NavBar/SecondNav';
import About from './Components/Footer/FootPages/About';
import Privacy from './Components/Footer/FootPages/Privacy';
import Shipping from './Components/Footer/FootPages/Shipping';
import Contact from './Components/Footer/FootPages/Contact';
import Return from './Components/Footer/FootPages/Return';
import Basket from './Components/Basket/Basket';
import Favorites from './Components/Favorites/Favorites';
import Item from './Components/Item/Item';
import LoginForm from './Components/Login/Login';
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
        <Route element={<LoginForm />} path="/login" />
        <Route element={<About />} path="/about" />
        <Route element={<Privacy />} path="/privacy" />
        <Route element={<Shipping />} path="/shipping" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Return />} path="/return" />
        <Route element={<Basket />} path="/basket" />
        <Route element={<Favorites />} path="/favorites" />
        <Route element={<Item />} path="/item/:id" />
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
