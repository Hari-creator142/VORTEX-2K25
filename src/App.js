import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./project/templates/Home";
import Events from "./project/templates/Events";
import About from "./project/templates/About";
import Team from "./project/templates/Team";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;