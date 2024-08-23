import Navbar from "./components/navbar";
import EcomRoutes from "./routes/ecom-routes";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <EcomRoutes />
      </div>
    </div>
  );
};

export default App;
