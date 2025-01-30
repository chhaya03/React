import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Shop from "./component/Shop";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <center>
          <Shop />
        </center>
      </div>
    </>
  );
}

export default App;
