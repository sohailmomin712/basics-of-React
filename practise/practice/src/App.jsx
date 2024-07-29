import { useState } from "react";
import CounterList from "./counterList";


const App = () => {
  const style = { border: "2px solid black", flex: "1", padding: "20px" };
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    setList([...list, { name, color }]);
    setName("");
    setColor("");
  };
   console.log(list);
  return (
    <div style={{ ...style, display: "flex" }}>
      <div style={style}>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <br />
        <br />

        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
      <div style={style}>
        <CounterList list={list} />
      </div>

    </div>
  );
};

export default App;
