import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AptList from "./pages/AptList";
import AptAddForm from "./pages/AptAddForm";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkTheme = {
    backgroundColor: "black",
    color: "lightgray",
  };

  const lightTheme = {
    backgroundColor: "white",
    color: "black",
  };

  const darkBtnTheme = {
    backgroundColor: "red",
    color:"black",
  }
  const lightBtnTheme = {
    backgroundColor: "lightblue",
    color:"darkgray",
  }



  const toggleTheme = () => {setIsDarkMode(!isDarkMode)}

  return (
    <div className="App" style={isDarkMode === true ? darkTheme : lightTheme}>
      <div className="boton">
        <button onClick={toggleTheme} style={isDarkMode === true ? darkBtnTheme : lightBtnTheme}>Switch Theme</button>
      </div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pisos/list" element={<AptList />} />
        <Route path="/pisos/add" element={<AptAddForm />} />

        {/* error handlers */}
        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
