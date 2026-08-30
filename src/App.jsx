import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
//Routes dans l'ordre de l'arbre DOM
import Welcome from "./pages/welcome";
import Index from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Error from "./pages/error";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/Index" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
