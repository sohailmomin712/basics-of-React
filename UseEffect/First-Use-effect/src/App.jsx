import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log(`1`, Date.now());
  // // after render
  // // side effect

  // callback, dependencies are used to avoid side effect i.e baar bar rendering hona
  // the useEffect is not dependent on anything

  useEffect(() => {
    document.title = `User Clicked ${count} times`;

    console.log("after useEffect");
  }, [count]);

  // useEffect( ()=>{} , [] ) only once after ui render
  // useEffect( ()=>{} , [count] )   after ui render then everytime dependency change

  // if we add empty array as a dependancy in
  // use affect arguement page will load once UI load or refresh the page
  // if we added count as a dependancies page will load when Count Change i.e dependencies

  // MOUNTING
  // ONLOAD, ON MOUNT
  // ONCOM

  // fetch("https://fakestoreapi.com/products")
  // .then((res) => res.json())
  // .then((res)=> console.log(res))

  console.log(`2`);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="App">
      <p>TO Understand useEffect Example</p>
      <hr />
      <h1>{`Clicked   ${count}  times`}</h1>
      <button onClick={() => setCount(count + 1)}>ADD</button>
      <br /> <hr />
      <h3>Click on the Button Page Title Will Change</h3>
      <hr />
      <p>
        {" "}
        [ empty array ] .........if we add empty array as a dependancy in use
        affect arguement page will load once UI is loaded or refresh the page
      </p>
      <p>
        {" "}
        [ count ] ......... if we added count as a dependanci page will load
        when Count Change // MOUNTING // ONLOAD, ON MOUNT
      </p>
      <br />
      <p> after render // // side effect // callback, dependencies</p>
      <p> the useEffect is not dependent on anything</p>
    </div>
  );
}

export default App;

// import { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   /// setCount(count+1)
//   // setCount(  (prev) => prev+1 )

//   // data feching / dependeciec changes // run code after ui render
//   // side effects handling

//   // useEffect will only run once ui renders

//   // console.log("0") // side effects to handle this we have useEFfect

//   // useEffect will run only once ui render with empty array depedency useEffect(()=>{ }, [] )

//   // useffect will run at once when render and also when dependeciy change
//   // useEffect(()=>{ }, [  count ] )

//   // useEffect will run everytime without any array or depedency  useEffect(()=>{ } )

//   useEffect(() => {
//     console.log("1");
//   }, [count]);

//   return (
//     <div className="container">
//       Counter : {count}
//       <button onClick={() => setCount(count + 1)}>Click</button>
//     </div>
//   );
// };

// export default App;

