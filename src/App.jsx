import { Routes, Route } from "react-router-dom";
import Index from "./pages";
import { useState } from "react";
import "./App.css";
import About from "./pages/about";
import Error from "./pages/error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
