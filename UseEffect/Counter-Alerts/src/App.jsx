// import Count from "./count";
import "./App.css";
import EcomRoutes from "./routes/ecom-routes";
import Navbar from "./component/navbar";
// import Profile from "./profile";

const App = () => {
  return (
    <div>
      <Navbar />
      <EcomRoutes />
    </div>
  );
};

export default App;

// <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       {/* <Count /> */}
//       <Profile/>
//     </div>
