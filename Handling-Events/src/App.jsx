import React from "react";
import css from "./App.module.css";
import Container from "./Component/Container";
import ItemInput from "./Component/ItemInput";
import ErrorMessage from "./Component/ErrorMessage";
import Item from "./Component/Item";

function App() {
  let array = ["Pc", "Keyboard", "Mouse", "Speaker", "Laptop", "Printer"];
  //let array = [];

  return (
    <Container>
      <h1 className={css.head}>Electronics</h1>
      <ItemInput />
      <ErrorMessage arrayItems={array}></ErrorMessage>
      <Item arrayItems={array}></Item>
    </Container>
  );
}

export default App;
