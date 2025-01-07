import "./App.css";
import { useState } from "react";
import InputSection from "./components/InputSection";
import Button from "./components/Button";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Perform validation or send data to the server here
  };

  return (
    <center>
      <form onSubmit={handleSubmit} className="form">
        <InputSection handleOnchange={handleChange}></InputSection>
        <Button></Button>
      </form>
    </center>
  );
}

export default App;
