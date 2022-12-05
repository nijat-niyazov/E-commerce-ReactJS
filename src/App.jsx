import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import { Routes, Route } from "react-router-dom";
import MainNav from "./Components/MainNav";
import SearchAppBar from "./Components/SearchBar";
import Slider from "./Components/Carousel";
import SecondNav from "./Components/SecondNav";

function App() {
  return (
    <div className="App">
      <MainNav />
      <SecondNav />
      {/* <SearchAppBar /> */}
      <Slider />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
