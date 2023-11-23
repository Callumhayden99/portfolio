// App.jsx
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";
import Info from "./components/Info";
import Home from "./components/Home";
import Snippet from "./components/Snippet";

import "./App.css";

function App() {
  return (
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
  );
}

export default App;
