import { useState } from "react";
import CounterList from "./components/CounterList";

function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const [data, setData] = useState([]);

  const submitData = () => {
    let object = {
      name,
      color,
    };
    setData([...data,object]);
    setName("")
    setColor("")
  };

  console.log(data);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid black",
        margin: "auto",
      }}
    >
      <div
        style={{
          padding: "10px",
          border: "1px solid black",
          margin: "auto",
        }}
      >
        <CounterList userData={data} />
      </div>
      <div
        style={{
          padding: "10px",
          border: "1px solid black",
          margin: "auto",
        }}
      >
        <input
        value={name}
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
         value={color}
          placeholder="enter color"
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          onClick={submitData}
          style={{
            color: "white",
            background: "black",
          }}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default App;
