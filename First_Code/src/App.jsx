import Hello from "./Hello";



// functional Component => initially stateless (initially no value need)
function App(){



  return <div>
    <h1>This is my first code in React.</h1>
    <button>Click here</button>

    { /* importing Hello.jsx file into this file */}
    <Hello></Hello>      
  </div>
}

export default App;      // defines for exporintg this file to another file 