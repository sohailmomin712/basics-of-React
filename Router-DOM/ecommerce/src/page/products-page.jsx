import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  // used to redirect

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
              <img src={product.image} width={"100px"} />
              <p className="category">{product.category}</p>
              <p className="price">{product.price}</p>
              <button
                style={{
                  marginTop: "10px",
                }}
                onClick={() => navigate(`${product.id}`)}
              >
                See Product
              </button>
              <button
                style={{
                  marginTop: "10px",
                }}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
