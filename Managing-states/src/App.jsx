import { useState } from "react";
import Container from "./Components/Container.jsx";
import Input from "./Components/Input.jsx";
import Items from "./Components/Items.jsx";
import ErrorMsg from "./Components/ErrorMsg.jsx";

function App() {
  //let fruitStock = ["mango", "orange", "lemon"];
  //  let textStateArr = useState("fruit to be entered");
  //  let textToShow = textStateArr(0);   initial value which already defined
  //  let setTextState = textStateArr(1); value eneterd by user in input

  // passing functions by props in file
  //using useState hooks => [firstVal , Set ValueBy Adding in input]=>//[0,1]

  let [fruitStock, setFruitStock] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let enteredFruits = event.target.value;
      let newFruitStock = [...fruitStock, enteredFruits];
      setFruitStock(newFruitStock);
      event.target.value = " ";
    }
  };

  return (
    <Container>
      <h1>Fruit stock</h1>
      <Input handledbyKeyDown={onKeyDown}></Input>
      <ErrorMsg stock={fruitStock}></ErrorMsg>
      <Items stock={fruitStock}></Items>
    </Container>
  );
}

export default App;
