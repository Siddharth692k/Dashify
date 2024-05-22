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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productsCategory" element={<ProductsCategory />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
