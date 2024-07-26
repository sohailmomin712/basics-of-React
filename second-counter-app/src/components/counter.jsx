import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        border:"2px solid red",
        margin:"auto",
    }}>
      <h3 style={{
        border:"1px solid blue"
      }}>counter for:</h3>
      <h4>count:{counter}</h4>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <button onClick={() => setCounter(counter - 1)}>Dec</button>
    </div>
  );
};

export default Counter;
