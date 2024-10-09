import { useState, useLayoutEffect, useRef } from "react";

const UseLayoutEffectExample = () => {
  const [height, setHeight] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    console.log("useLayoutEffect: Running before the DOM is painted");

    // Measure the height of the div element before it is painted
    if (divRef.current) {
      const newHeight = divRef.current.getBoundingClientRect().height;
      setHeight(newHeight);
    }
  }, []);

  return (
    <div ref={divRef}>
      <p>This div has a height of: {height}px</p>
    </div>
  );
};

export default UseLayoutEffectExample;
