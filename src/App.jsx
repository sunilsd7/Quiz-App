import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Quiz from "./components/Quiz"; 
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
