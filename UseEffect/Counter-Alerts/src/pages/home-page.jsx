import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const RedirectKaro = useNavigate();

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <button onClick={() => RedirectKaro("/products")}>
        Redirect to Product
      </button>

      <button onClick={() => RedirectKaro("/todo")}>Redirect to Todo</button>

      {/* <Link to="/products">
        <button>Redirect to Product</button>
      </Link>

      <Link to="/todo">
        <button>Redirect to Todo</button>
      </Link> */}
    </div>
  );
};

export default HomePage;
