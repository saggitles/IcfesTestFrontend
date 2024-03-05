import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./components/products";
import AddProduct from "./components/addProduct";

function App() {
  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
