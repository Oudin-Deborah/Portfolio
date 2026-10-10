//Fonction pour le header visible sur toutes les pages du site//
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink to="/index" className="header__link header__link--index">
          Accueil
        </NavLink>
        <NavLink to="/about" className="header__link header__link--about">
          A propos de moi
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
