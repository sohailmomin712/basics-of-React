import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { title: "Home", link: "/" },
    { title: "Product", link: "/product" },
    { title: "Counter", link: "/counter" },
    { title: "Cart", link: "/cart" },
    
  ];
  return (
    <div className="nav">
      {Links.map((el, index) => (
        <Link key={index} to={el.link}>
          {el.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
