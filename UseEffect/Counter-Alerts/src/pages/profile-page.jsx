import { useEffect, useState } from "react";

const Profile = () => {
  const [products, setProducts] = useState([]);

  
  // const getProductData = ()=> {
  //   fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.json())
  //   .then((res) => setProducts(res));
  // }

  const getProductData = async ()=> {
   const promise = await fetch("https://fakestoreapi.com/products");
   const res = await promise.json()
   setProducts(res)
  }

  // async function  getData (){

  // }

  useEffect(() => {
    getProductData()
  }, []);




  return (
    <div className="Main-container">
      <h1>List Of Products</h1>

      <div className="product-container">
        { products?.map((product, index) => (
          <div key={index}>
            <img src={product.image} width={"100px"} />
            <p className="category">{product.category}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;

// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": {
//       "rate": 3.9,
//       "count": 120
//   }
// }

// const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((res) => setProducts(res));
//   }, []);

//   return (
//     <div>
//       <h1>All Products</h1>

//       <div
//         className="products-container"
//         style={{
//           border: "1px solid",
//           padding: "10px",
//           display: "grid",
//           gridTemplateColumns: "repeat(4,1fr)",
//         }}
//       >
//         {products.map((product, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid",
//               padding: "10px",
//             }}
//           >
//             <img src={product.image} width={"100%"} />
//             <h3 style={{ fontSize: "20px", textAlign: "center" }}>
//               {product.title}
//             </h3>
//             <p
//               style={{ color: "black", fontSize: "15px", textAlign: "center" }}
//             >
//               {product.price}
//             </p>
//             <p
//               style={{ color: "black", fontSize: "14px", textAlign: "center" }}
//             >
//               {product.description}
//             </p>
//             <p
//               style={{
//                 color: "white",
//                 fontSize: "14px",
//                 textAlign: "center",
//                 backgroundColor: "black",
//               }}
//             >
//               {product.category}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
