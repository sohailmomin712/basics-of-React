// import Student from "./pages/Student";

import Hideshow from "./pages/Hideshow";

const App = () => {
  //   const [name,setName]=useState("sohail")
  //   const [inputValues, setInputValues] = useState(null);
  //   const [printValues, setPrintValues] = useState(false);
  //   const getValues = (data) => {
  //     console.log(data.target.value);
  //     setInputValues(data.target.value);
  //     setPrintValues(false); //in order to hide value while typing//
  //   };

  return (
    // Topic => passing of props//
    // <div className="App">
    //   <h1>Props in the React </h1>
    //   <Student name={name}email={"sohail@gmail.com"}other={{ address: "Delhi", mobile: "000" }}
    //   />
    //   <button onClick={()=>setName("Sufi")}>Update Name</button>
    //   <Student
    //     name={"sufi"}
    //     email={"sufi@gmail.com"}
    //     other={{ address: "Mumbai", mobile: "111" }}
    //   />
    // </div>

    // Topic => Getting the Values using input box//
    //     <div className="inputValues">
    //       {printValues ? <h1>{inputValues}</h1> : null}
    //       <input type="text" onChange={getValues}></input>
    //       <h2>Show the Input Values : {inputValues} </h2>
    //       <button onClick={() => setPrintValues(true)}>Print Values</button>
    //     </div>

    <div>
      <Hideshow />
    </div>
  );
};

export default App;
