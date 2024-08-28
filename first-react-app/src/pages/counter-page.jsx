import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h3>Display Count : {count}</h3>
      <button
        style={{ color: "white", background: "black" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{ color: "white", background: "black" }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
