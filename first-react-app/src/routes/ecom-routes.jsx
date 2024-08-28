import { Route, Routes } from "react-router-dom"
import Home from "../pages/home-page"
import Products from "../pages/product-page"
import Counter from "../pages/counter-page"
import SingleProductPage from "../pages/single-product"


const EcomRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<Products/>}/>
    <Route path="/counter" element={<Counter/>}/>

  {/* /// dynamic routes using id */}
  <Route path="/product/:id" element={<SingleProductPage />} />

  </Routes>
  )
}

export default EcomRoutes
