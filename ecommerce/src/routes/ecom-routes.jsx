import { Route, Routes } from "react-router-dom";
import Home from "../page/home-page";
import Products from "../page/products-page";
import Counter from "../page/counter-page";
import SingleProductPage from "../page/single-product-page";

const EcomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/counter" element={<Counter />} />

      {/* /// dynamic routes */}
      <Route path="/product/:id" element={<SingleProductPage />} />

      
    </Routes>
  );
};

export default EcomRoutes;
