import Method1 from "./Component/Method1";
import Ternary from "./Component/Ternary";
import Logical from "./Component/Logical";

function App() {
  return (
    <div className="condi-container">
      <h1>This is if-else statements.</h1>
      <Method1 />;<br />
      <h1>This is ternary operators.</h1>
      <Ternary />;<br />
      <h1>This is logical operators.</h1>
      <Logical />
    </div>
  );
}

export default App;
