import Counter from "./pages/counter-page";
import Home from "./pages/home-page";
import Products from "./pages/product-page";
const App = () => {
  return (
    <div>
      <Counter />
      <div>
        <Home />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default App;
