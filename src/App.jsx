import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Change from "./parts/Change";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[100vh]">
      <Change />
    </div>
  );
}

export default App;
