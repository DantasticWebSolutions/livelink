import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Description from "./screens/Description";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card/:id" element={<Description />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
