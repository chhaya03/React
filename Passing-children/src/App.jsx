import React from "react";
import Container from "./component/Container";
import styles from "./App.module.css";

function App() {
  let array = ["Pc", "Keyboard", "Mouse", "Speaker", "Laptop", "Printer"];

  return (
    <>
      <Container>
        <h1 className={styles.heading}>Electronics</h1>
        <ul>
          {array.map((items) => (
            <li key={items}>{items}</li>
          ))}
        </ul>
      </Container>

      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container>
    </>
  );
}

export default App;
