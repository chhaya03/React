import Container from "./components/Container";
import Input from "./components/Input";
import "./App.css";
import Item from "./components/Item";
import ErrorMessage from "./components/ErrorMessage";
import { useState } from "react";

function App() {
  //let FruitStock = ["Apples", "Mango", "Oranges"];

  // passing functions by props in file
  //using useState hooks => [firstVal , Set ValueBy Adding in input]=>//[0,1]

  let [FruitStock, setFruitStock] = useState(["Mango"]);

  const onKeyDown = (event) => {
    //when enter key will be clicked a value will be printed
    if (event.key === "Enter") {
      // this stores entered value from input field
      let newFruitItem = event.target.value;

      // newStock collects one more value in this array => ... Spread Operator works for recollect the value in new array
      let newStock = [...FruitStock, newFruitItem];
      setFruitStock(newStock);

      event.target.value = ""; // input field will be empty after clicking enter key
    }
  };

  return (
    <Container>
      <h1 className="heading">Products</h1>
      <Input handleonkeydown={onKeyDown}></Input>
      <ErrorMessage Fruits={FruitStock}></ErrorMessage>
      <Item Fruits={FruitStock}></Item>
    </Container>
  );
}

export default App;
