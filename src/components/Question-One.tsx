import { useState } from "react";
const Q1 = () => {
  const [count, setCount] = useState(0);

  const IncrementByThree = () => {
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);

    //solution is
    setCount((prev) => prev+1)
    setCount((prev) => prev+1)
    setCount((prev) => prev+1)
  }
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={IncrementByThree}>Increment by 3</button>
    </div>
  );
};

export default Q1;

// "In my original code, 
// I used setCount(count + 1) three times, expecting it to increment by 3.
//  However, React batches state updates for performance reasons, so all three state updates are processed after the function finishes.
//   Since they all reference the same initial count value, the state only increments by 1. To fix this, I need to use the functional form of setCount, which updates the state based on the previous state value. 
// This ensures each update sees the latest count value and increments it correctly."
