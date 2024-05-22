import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Products from "./screens/Products";
import ProductsCategory from "./screens/ProductsCategory";
import Payments from "./screens/Payments";
import Invoices from "./screens/Invoices";
import Settings from "./screens/Settings";
import Login from "./screens/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/ProductsCategory" element={<ProductsCategory />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/Invoices" element={<Invoices />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
