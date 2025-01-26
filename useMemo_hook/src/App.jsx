import { useState } from "react";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setCount(count + 1);
  };

  const countNumber = (num) => {
    console.log("~file: App.jsx ~ line 12 ~ countNumber ~num", num);
    for (let i = 0; i <= 1000000000; i++) {}

    return num;
  };

  const checkData = useMemo(() => {
    //his leads to unnecessary recomputation of the expensive loop, which can make the app sluggish, especially if countNumber involves more complex logic.
    return countNumber(count);
  }, [count]);

  return (
    <div>
      <button onClick={() => getValue()} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p>my count is : {count}</p>
      <button onClick={() => setShow(!show)}>
        {show ? "you clicked me" : "Click me plz"}
      </button>
    </div>
  );
}

export default App;
