import { useState } from "react";
import "./App.css";
import Chatbox from "./Chatbox";
import Inputname from "./Inputname";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <div className="conStainer">
        {name ? <Chatbox name={name} /> : <Inputname setName={setName} />}
      </div>
    </div>
  );
}

export default App;
