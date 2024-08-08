import Counter from "./components/Counter";

function App() {
  const data = [
    { name: "sufi", id: "1", color: "red" },
    { name: "sohail", id: "2", color: "green" },
    { name: "azim", id: "3", color: "blue" },
    { name: " nadim", id: "4", color: "aqua" },
  ];

  return (
    <div>
      {/* <Counter name="Sohail" id="1" /> */}

      {/* {data.map((el) => {
        return (
          <Counter key={el.id} name={el.name} id={el.id} color={el.color} />
        );
      })} */}

      {data.map((el) => (
        <Counter key={el.id} name={el.name} id={el.id} color={el.color} />
      ))}
    </div>
  );
}

export default App;
