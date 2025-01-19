import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // useEffect hook to perform side effects
  useEffect(() => {
    // This code will run after the component mounts
    console.log("Component mounted or count changed:", count);
    alert("count was changed");
  }, [count]); // Dependency array, only re-run the effect if count changes

  return (
    <center className="body">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
    </center>
  );
};

export default App;
