import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import MainNav from './Components/NavBar/MainNav';
import SecondNav from './Components/NavBar/SecondNav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import lazyLoad from './utils/lazyLoad';

///////// DEFAULT LAZY COMPONENTS  ⤵
const Privacy = lazy(() => import('./Components/Footer/FootPages/Privacy'));
const Shipping = lazy(() => import('./Components/Footer/FootPages/Shipping'));
const Return = lazy(() => import('./Components/Footer/FootPages/Return'));
const LoginForm = lazy(() => import('./Components/Login/Login'));
const Basket = lazy(() => import('./Components/Basket/Basket'));
const Favorites = lazy(() => import('./Components/Favorites/Favorites'));
const Item = lazy(() => import('./Components/Item/Item'));

///////// UNDEFAULT LAZY COMPONENTS  ⤵

//#1
// const About = lazy(() =>
//   import('./Components/Footer/FootPages/About').then(module => ({
//     default: module.About,
//   }))
// );

//#2
const About = lazyLoad('./Components/Footer/FootPages/About', 'About');
const Contact = lazyLoad('./Components/Footer/FootPages/Contact', 'Contact');

function App() {
  return (
    <div className="App">
      <MainNav />
      <SecondNav />
      <Suspense fallback={<h1>IT's loading... </h1>}>
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
      </Suspense>
      <ToastContainer
        autoClose={3000}
        pauseOnFocusLoss
        position="top-right"
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnHover
        draggable={true}
        theme="colored"
        // toastStyle={{ backgroundColor: 'aqua', color: 'black' }}
      />
      <Footer />
    </div>
  );
}

export default App;
