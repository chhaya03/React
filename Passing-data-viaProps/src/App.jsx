import ErrorMessage from "./Components/ErrorMessage";
import Fruititem from "./Components/Fruititem";

import React from "react";

function App() {
  //let Fruits =[];
  let Fruits = ["Papaya", "Banana", "ORange", "Grapes", "Mango", "Cheekoo"];

  return (
    <>
      <h1>Fruits</h1>
      <ErrorMessage items={Fruits}></ErrorMessage>
      <Fruititem items={Fruits}></Fruititem>
    </>
  );
}

export default App;
