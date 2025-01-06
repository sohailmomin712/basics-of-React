import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((result) => {
      result.json().then((response) => {
        console.log(response);
      });
    });
  }, []);
console.log(data)
  return (
    <div className="Container">
      <h1>Get API Call</h1>
    </div>
  );
};

export default App;
