
// import './App.css';

import Navbar from "./components/Navbar";
import Products from "./components/ProductsList";
import Slider from "./components/Slider";
import About from "./components/About";
import {Routes , Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<><Slider /><Products /></>}>
      </Route>
      <Route path="about" element={<> <About /> </>}></Route>
      <Route path="product/:productId" element={<> <ProductDetails /> </>}></Route>
      </Routes>
    </div>
  );
}


export default App;
