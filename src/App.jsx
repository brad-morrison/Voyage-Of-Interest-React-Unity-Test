import { useState } from "react";
import "./App.css";
import UnityApp from "./components/UnityApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <UnityApp />
      </div>
    </>
  );
}

export default App;
