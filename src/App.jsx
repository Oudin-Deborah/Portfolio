import { Routes, Route } from "react-router-dom";
import Index from "./pages";
import { useState } from "react";
import "./App.css";
import About from "./pages/about";
import Error from "./pages/error";
import Contact from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
