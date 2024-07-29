import  { useState } from "react";

const Counter = ({ name, color }) => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "1px solid ", backgroundColor: color }}>
      <h2> Counter for : {name}</h2>
      <h1>Counter is : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
};

export default Counter;
