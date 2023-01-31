import "./styles.css";

import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./view/Home";
import Pokemones from "./view/Pokemones";
 
export default function App() {
    return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
           <Route  path="/"  element={<Home />}  />
           <Route path="/pokemones" element={<Pokemones />} />
     
        </Routes>
      </BrowserRouter>
    </div>
  );
}
