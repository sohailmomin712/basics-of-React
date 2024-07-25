import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  // const handleChange = (value)=>{
  //     setCounter(counter + value)
  // }

  return (
    <div
      style={{
        border: "1px solid",
        padding: "10px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Count : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <button onClick={() => setCounter(counter - 1)}>IDnc</button>
    </div>
  );
}

export default App;
