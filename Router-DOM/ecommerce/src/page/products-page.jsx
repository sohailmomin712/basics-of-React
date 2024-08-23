import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProductData = async () => {
    const promise = await fetch("https://fakestoreapi.com/products");
    const res = await promise.json();
    console.log(res);
    setProducts(res);
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="Main-container">
      <h2>List of All Products</h2>
      <div className="product-container">
        {products?.map((product, index) => {
          return (
            <div key={index}>
              <img src={product.image}width={"100px"} />
              <p className="category">{product.category}</p>
              <p className="price">{product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
