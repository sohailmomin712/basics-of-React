import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  //to store the products use usestate//
  const [products, setProduct] = useState([]);
  // used to redirect
  const navigate = useNavigate();
  //make a function to fetch the api so that we dont have to fetch it everytime//
  const getProductsData = async () => {
    //api fetch
    const promise = await fetch("https://fakestoreapi.com/products");
    //will return the promise so handle it again
    const res = await promise.json();
    console.log(res);
    //we have to set and update the data so setproduct(res)
    setProduct(res);
  };

  //now use useEffect
  //and call the getProductsData function inside it so that we can use it again and will not have to fetch again and again
  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="main-container">
      <h1>List of The Products</h1>
      <div className="product-container">
        {/* we have to show the product inside this container hence start a loop inside this div */}
        {products?.map((product, index) => {
          return (
            //this div is for particular product
            <div key={index}>
              <img src={product.image} />
              <p className="category">{product.category}</p>
              <p className="price">{product.price}</p>
              <button
                style={{
                  marginTop: "10px",
                }}
                //to make dynamic single product//
                onClick={() => navigate(`${product.id}`)}
              >
                See Products
              </button>
              <button
                style={{
                  marginTop: "10px",
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
