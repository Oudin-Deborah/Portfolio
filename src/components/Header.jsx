//Fonction pour le header visible sur toutes les pages du site//
import { NavLink, useLocation } from "react-router-dom";
function Header() {
  // Sur la scène (/index), on y est déjà : le lien Accueil n'est pas affiché
  const { pathname } = useLocation();
  const isIndex = pathname.toLowerCase().replace(/\/$/, "") === "/index";

  return (
    <header className="header">
      <nav
        className={`header__nav ${isIndex ? "header__nav--single" : ""}`}
        aria-label="Navigation principale"
      >
        {!isIndex && (
          <NavLink to="/index" className="header__link">
            Accueil
          </NavLink>
        )}
        <NavLink to="/about" className="header__link">
          À propos de moi
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
