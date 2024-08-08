import { useState } from "react";

function Counter(data) {
  const [counter, setCounter] = useState(0);
  // console.log(data);
  return (
    <div
      style={{
        border: `1px solid ${data.color}`,
      }}
    >
      <h2
        style={{
          color: data.color,
        }}
      >
        Counter  {data.name ? data.name : "Unknown"} : {counter}
      </h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
}
export default Counter;
