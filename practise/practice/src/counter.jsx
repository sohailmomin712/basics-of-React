import { useState } from "react";

const Counter = ({ name, color }) => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        border: "1px solid",
        backgroundColor: color,
      }}
    >
      <h3>Counter For : {name}</h3>
      <h4>Count is: {count}</h4>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
};

export default Counter;
