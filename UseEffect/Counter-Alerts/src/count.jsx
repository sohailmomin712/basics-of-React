import { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [nums, setNums] = useState(0);
  useEffect(()=>{
    alert("You have clicked on the button");
  },[])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Cick to Add {count}</button>
      <br/>
      <br/>
      <button onClick={() => setNums(nums - 1)}>Cick to Remove {nums}</button>
    </div>
  );
};

export default Count;
