//Fonction pour le header visible sur toutes les pages du site//
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// Version du menu sur la scène (/index) :
// - false (version actuelle) : seul « À propos de moi » y est affiché, les objets de la scène
//   menant déjà au portfolio, aux compétences et au contact ;
// - true (version conservée, à retravailler après la soutenance) : menu complet sur la scène aussi.
const FULL_MENU_ON_SCENE = false;

function Header() {
  // Menu déplié ou non : ne sert que sur tablette verticale et mobile (bouton « Menu »)
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const { pathname } = useLocation();
  const isIndex = pathname.toLowerCase().replace(/\/$/, "") === "/index";
  // Menu complet partout, sauf sur la scène tant que FULL_MENU_ON_SCENE vaut false
  const showFullMenu = !isIndex || FULL_MENU_ON_SCENE;

  return (
    <header className="header">
      <nav
        className={`header__nav ${showFullMenu ? "" : "header__nav--single"}`}
        aria-label="Navigation principale"
        onKeyDown={(e) => e.key === "Escape" && closeMenu()}
      >
        <button
          type="button"
          className="header__link header__toggle"
          aria-expanded={isOpen}
          aria-controls="header-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          Menu
        </button>

        <ul
          id="header-menu"
          className={`header__menu ${isOpen ? "header__menu--open" : ""}`}
        >
          {/* Sur la scène, on y est déjà : pas de lien Accueil */}
          {!isIndex && (
            <li>
              <NavLink to="/index" className="header__link" onClick={closeMenu}>
                Accueil
              </NavLink>
            </li>
          )}
          {showFullMenu && (
            <>
              {/* Portfolio et Compétences : la scène s'ouvre directement sur la modale demandée */}
              <li>
                <Link
                  to="/index"
                  state={{ modal: "portfolio" }}
                  className="header__link"
                  onClick={closeMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/index"
                  state={{ modal: "skills" }}
                  className="header__link"
                  onClick={closeMenu}
                >
                  Compétences
                </Link>
              </li>
            </>
          )}
          <li>
            <NavLink to="/about" className="header__link" onClick={closeMenu}>
              À propos de moi
            </NavLink>
          </li>
          {showFullMenu && (
            <li>
              <NavLink
                to="/contact"
                className="header__link"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
