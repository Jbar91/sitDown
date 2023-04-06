import { useState } from "react";
import "./App.css";
import { Cards } from "./cards/cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>marico el que lo lea</p>
      <Cards></Cards>
    </>
  );
}

export default App;
