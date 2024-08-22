import Counter from "./page/counter-page";
import Products from "./page/products-page";

const App = () => {
  return (
    <div>
      <Counter/>
      <div style={{marginTop:"15px"}}>
      <Products/>
      </div>
    </div>
  );
};

export default App;
