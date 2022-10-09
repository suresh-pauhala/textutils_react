import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled", "success");
    }
  };

  return (
    <>
    <Router>
      <div>
        
          <Navbar
            title="Textutils"
            aboutText="About Textutils"
            mode={mode}
            toggleMode={toggleMode}
          />
          <Alert alert={alert} />

          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TextForm
                heading="Enter the text below to analyze"
                mode={mode}
                showAlert={showAlert}
              />}></Route>
          </Routes>
          {/* <About /> */}
       
      </div>
      </Router>
    </>
  );
}

export default App;
