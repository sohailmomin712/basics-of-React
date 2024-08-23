import { Route, Routes } from "react-router-dom";
import Home from "../page/home-page";
import Products from "../page/products-page";
import Counter from "../page/counter-page";

const EcomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Products />}></Route>
      <Route path="/counter" element={<Counter />}></Route>
    </Routes>
  );
};

export default EcomRoutes;
