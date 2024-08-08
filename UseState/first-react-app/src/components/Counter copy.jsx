import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Counter({ name, id, color }) {
  const [counter, setCounter] = useState(0);



  return (
    <div
      style={{
        border: `1px solid ${color}`,
        padding: "10px",
        margin: "auto",
      }}
    >
      <h3>
        Counter for : {name} - {id}
      </h3>
      <h2>Count : {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <button onClick={() => setCounter(counter - 1)}>IDnc</button>
    </div>
  );
}

export default Counter;
