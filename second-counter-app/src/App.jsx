import CounterList from "./components/counter-list"; // Importing CounterList component
import { useState } from "react"; // Importing useState hook from React

const App = () => {
  // Step 1: Set up state for the form inputs and the list of counters
  const [color, setColor] = useState(""); // State to store color input
  const [name, setName] = useState(""); // State to store name input
  const [list, setList] = useState([]); // State to store list of counters

  // Step 2: Handle adding a new counter to the list
  const handleAddCounter = () => {
    // Check if both name and color are provided
    if (name && color) {
      // Update the list state with the new counter
      setList([...list, { name, color }]);
      // Reset the input fields
      setName("");
      setColor("");
    } else {
      // Alert if name or color is missing
      alert("Please enter both name and color");
    }
  };



  // Step 3: Render the UI
  return (
    <div>
      <CounterList list={list} /> {/* Pass the list state to CounterList component */}
      <div
        style={{
          display: "flex", // Display inputs and button in a flexbox
          gap: "10px", // Space between input fields and button
          marginTop: "10px", // Top margin for some spacing
          padding: "10px", // Padding inside the div
          border: "2px solid blue", // Blue border around the div
        }}
      >
        {/* Input for name */}
        <input
          placeholder="Enter name" // Placeholder text
          value={name} // Bind the input value to name state
          onChange={(e) => setName(e.target.value)} // Update the name state on input change
        />
        {/* Input for color */}
        <input
          placeholder="Enter color" // Placeholder text
          value={color} // Bind the input value to color state
          onChange={(e) => setColor(e.target.value)} // Update the color state on input change
        />
        {/* Button to add a new counter */}
        <button onClick={handleAddCounter}>Submit</button> {/* Trigger handleAddCounter on click */}
      </div>
    </div>
  );
};

export default App; // Export the App component
