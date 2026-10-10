import { Link } from "react-router-dom";
import logo from "../assets/logo_oudin_deborah.webp";


//Affichage du logo qui redirige vers la page index du site//
function Logo() {
  return (
    <div className="wrapper__Logo">
      <Link to="/Index">
        <img
          src={logo}
          alt="Oudin Deborah professional logo and personal branding mark"
          className="Logo_OD"
        />
      </Link>
    </div>
  );
}

export default Logo;
