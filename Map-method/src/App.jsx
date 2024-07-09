import React from "react";

function App() {
  let foodItem = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ul className="List-group">
        {
          //using map function
          foodItem.map((item) => (
            <li key={item} className="list-group-item">
              {item}
            </li>
          ))
        }
      </ul>
    </React.Fragment>
  );
}

export default App;
