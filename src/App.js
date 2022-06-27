import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Overlay from "./Components/Overlay";

function App() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow((prevData) => !prevData);
  }

  return (
    <div className="app">
      <Router>
        {show && <Overlay />}
        <Routes>
          <Route
            exact
            path="/"
            element={[<Nav show={show} click={handleShow} />, <Home />]}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
