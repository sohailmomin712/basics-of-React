import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/"> Home </Link>
      <Link to="/products"> Products </Link>
      <Link to="/todo"> Todo </Link>
    </nav>
  );
};

export default Navbar;
