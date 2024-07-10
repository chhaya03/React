import React from "react";

function Method1() {
  let foodItem = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  //if-else statement
  if (foodItem.length == 0) {
    return <h3>I am still hungry.</h3>;
  } else {
    //using map method
    return (
      <>
        <h1>Healthy food</h1>
        <ul className="list-grp">
          {foodItem.map((item) => (
            <li key={item} className="list-grp-item">
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Method1;
