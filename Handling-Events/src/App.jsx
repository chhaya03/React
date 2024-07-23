import React from "react";
import css from "./App.module.css";
import Container from "./Component/Container";
import ItemInput from "./Component/ItemInput";

function App() {
  let array = ["Pc", "Keyboard", "Mouse", "Speaker", "Laptop", "Printer"];

  const handleBuyButton = (items) => {
    console.log(event);
    console.log(`${items} being bought`); //will show in inspect
  };

  return (
    <Container>
      <h1 className={css.head}>Electronics</h1>
      <ItemInput />
      <ul className="list-group">
        {array.map((items) => (
          <li className="list-group-item ">
            {items}
            <button
              className={`${css.button} btn btn-info`}
              onClick={() => handleBuyButton(items)}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default App;
