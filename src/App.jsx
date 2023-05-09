import React, { useContext, useState } from 'react';
import './App.css';
import { DarkModeContext } from './Components/Context/darkModeAction';
///component
import Home from "./Components/Home/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle: toggleDarkMode }}>
    <div  className={darkMode ? 'dark-mode' : ''}>
    <Home/>
    </div>
    </DarkModeContext.Provider>
  )
}

export default App
