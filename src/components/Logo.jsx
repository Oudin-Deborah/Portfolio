import { Link } from "react-router-dom";
import logo from "../assets/logo_oudin_deborah.webp";


//Affichage du logo qui redirige vers la page index du site//
function Logo() {
  return (
    <div className="logo">
      <Link to="/index">
        <img
          src={logo}
          alt="Logo de Déborah Oudin, développeuse web : entrer dans le site"
          className="logo__image"
        />
      </Link>
    </div>
  );
}

export default Logo;
