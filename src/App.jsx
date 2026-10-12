import { Routes, Route } from "react-router-dom";
//Routes dans l'ordre de l'arbre DOM
import { AudioProvider } from "./context/AudioProvider";
import AudioLoop from "./components/AudioLoop";
import Welcome from "./pages/Welcome";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <AudioProvider>
        <AudioLoop />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/index" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projets/:id" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AudioProvider>
    </>
  );
}

export default App;
