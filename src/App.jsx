// App.jsx
import { Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";
import Info from "./components/Info";
import Home from "./components/Home";
import Snippet from "./components/Snippet";
import "./App.css";

const ThemeContext = createContext()

function App() {

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    document.body.classList.toggle('light-mode', theme === 'light');
}, [theme]);

  return (

    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className="container">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/info" element={<Info />} />
        <Route path="/snippet" element={<Snippet />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </ThemeContext.Provider>
  );
}

export { App, ThemeContext};
