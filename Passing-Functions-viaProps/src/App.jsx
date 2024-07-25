import React from "react";
import "./App.css";
import Container from "./Components/Container";
import ItemInput from "./Components/ItemInput";
import ErrorMessage from "./Components/ErrorMessage";
import Item from "./Components/Item";

function App() {
  let array = ["Pc", "Keyboard", "Mouse", "Speaker", "Laptop", "Printer"];
  //let array = [];

  // These function defined via props in diffrent files
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  const handlebyButton = (item) => {
    console.log(`${item} being bought`);
  };

  return (
    <Container>
      <h1 className="head">Electronics</h1>
      <ItemInput handleOnChange={handleOnChange}></ItemInput>
      <ErrorMessage arrayItems={array}></ErrorMessage>
      <Item arrayItems={array} handlebyButton={handlebyButton}></Item>
    </Container>
  );
}

export default App;
