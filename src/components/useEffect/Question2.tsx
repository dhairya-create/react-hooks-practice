import { useState, useEffect } from "react";
//clean up function in useEffect
const TimerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Start a timer when the component mounts
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function: this will be called when the component unmounts
    return () => {
      clearInterval(timer); // Stop the timer to prevent memory leaks
      console.log("Timer cleaned up");
    };
  }, []); // Empty dependency array, so this effect only runs once on mount

  return <div>Timer: {count}</div>;
};

export default TimerComponent;
