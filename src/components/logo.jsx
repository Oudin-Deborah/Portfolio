//Gère le logo qui renvoie vers la page Index du site au clic//

import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/Index">
        <img
          src="src/assets/logo_oudin_deborah.webp"
          alt="Oudin Deborah professional logo and personal branding mark"
        />
      </Link>
    </div>
  );
}
export default Logo;
