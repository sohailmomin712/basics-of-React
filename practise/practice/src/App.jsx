import { useState } from "react";

const App = () => {
  const style = { border: "2px solid black", padding: "20px", flex: 1 };
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    setList([...list, { name, color }]);
    setName("");
    setColor("");
  };console.log(list)
  return (
    <div style={{ ...style, display: "flex", gap: "10px" }}>
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
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default App;
