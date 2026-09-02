//Fonction pour le header visible sur toutes les pages du site//
import { NavLink } from "react-router-dom";
import "../assets/style/styleHeader.sass";
import AudioLoop from "../components/audioloop";
function Header() {
  return (
    <header className="Header">
      <nav className="Header__Nav">
        <NavLink to="/About" className="nav__link Link__About">
          A propos de moi
        </NavLink>
        <NavLink to="/Contact" className="nav__link Link__Contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
