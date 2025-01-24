import React from "react";
import { memo } from "react";

const Navbar = ({ adjective, getAdjective }) => {
  console.log("Navbar is redered");
  return (
    <div>
      I am {adjective} Navbar
      <button //Calls getAdjective when the button is clicked and also uses its return value as the button text.
        onClick={() => {
          getAdjective();
        }}
      >
        {getAdjective()}
      </button>
    </div>
  );
};

// The purpose of using export default memo(Navbar); is to optimize the rendering of the Navbar component by preventing unnecessary re-renders.
export default memo(Navbar);
