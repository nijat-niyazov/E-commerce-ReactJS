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

function App() {
  return (
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
