import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cars from "./Components/Cars.tsx";
import Bike from "./Components/Bike.tsx";
import Luxury from "./Components/Luxury.tsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/bike" element={<Bike />} />
          <Route path="/luxurycars" element={<Luxury /> } />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}