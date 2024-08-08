import { useState } from "react";
import CounterList from "./components/CounterList";

function App() {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");

  const [list, setList] = useState([]);

  const style = { border: "1px solid gray", padding: "20px", flex: 1 };

  const handleSubmit = () => {
    setList([...list , { name, color }]);

    setName("");
    setColor("");
  };

  console.log(list);

  return (
    <div style={{ ...style, display: "flex" }}>
      <div style={style}>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Color"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <br /> <br />
        <button style={{ width: "100%" }} onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div style={style}>
        <CounterList list={list} />
      </div>
    </div>
  );
}

export default App;


/// https://codesandbox.io/s/task-counter-ass-day3-with-css-forked-wwx7ms