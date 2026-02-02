import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Explore from "./pages/Explore";
import Shop from "./pages/Shop";
import Sell from "./pages/Sell";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home/>}/>
      <Route index path="/explore" element={<Explore/>}/>
      <Route index path="/shop" element={<Shop/>}/>
      <Route index path="/sell" element={<Sell/>}/>
      <Route index path="/cart" element={<Cart/>}/>
    </Routes>
  );
}

export default App;
