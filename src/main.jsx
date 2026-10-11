import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// Polices hébergées avec le site : seules les graisses utilisées sont chargées
import "@fontsource/cinzel-decorative/latin-400.css";
import "@fontsource/cinzel-decorative/latin-700.css";
import "@fontsource/montserrat/latin-400.css";
import "@fontsource/montserrat/latin-600.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import "./assets/style/styleGlobal.sass";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Portfolio/">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
