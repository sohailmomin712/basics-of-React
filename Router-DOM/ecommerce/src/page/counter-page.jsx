import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        width: "100px",
      }}
    >
      <h3>Count {count}</h3>
      <button
        style={{ backgroundColor: "black", color: "white" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{ backgroundColor: "black", color: "white" }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
