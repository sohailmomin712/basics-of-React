import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // used to redirect

  const getProductData = async () => {
    try {
      const promise = await fetch(`https://fakestoreapi.com/products/${id}`);
      const res = await promise.json();
      setSingleProduct(res);
      setIsLoading(false);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {isError && (
        <div
          style={{
            width: "500px",
            height: "500px",
            border: "1px solid gray",
            display: "flex",
            margin: "auto",
          }}
        >
          <img
            src="https://media.tenor.com/eDchk3srtycAAAAi/piffle-error.gif"
            width={"100px"}
            style={{ margin: "auto" }}
          />
        </div>
      )}

      {isLoading && (
        <div
          style={{
            width: "150px",
            height: "150px",
            border: "1px solid gray",
            display: "flex",
            margin: "auto",
          }}
        >
          <img
            src="https://i.gifer.com/ZKZg.gif"
            width={"100px"}
            style={{ margin: "auto" }}
          />
        </div>
      )}

      {/* !isLoading */}
      {isLoading == false && isError == false && (
        <div
          style={{
            border: "1px solid",
            margin: "auto",
            height: "100%",
            display: "flex",
            gap: "20px",
            maxHeight: "500px",
          }}
        >
          <div
            style={{
              border: "1px solid gray",
              borderRadius: "10px",
              flex: 1,
            }}
          >
            <img
              src={singleProduct.image}
              width="100%"
              height="100%"
              style={{
                objectFit: "contain",
              }}
            />
          </div>

          <div
            style={{
              border: "1px solid gray",
              borderRadius: "10px",
              flex: 1,
            }}
          >
            <p className="category">{singleProduct.category}</p>
            <p className="price">{singleProduct.price}</p>

            <button
              style={{
                marginTop: "10px",
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;


