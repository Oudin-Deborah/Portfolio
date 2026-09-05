//Fonction pour la page d'accueil//
import Header from "../components/header";
import Footer from "../components/footer";
import InteractiveElement from "../components/InteractiveElement";
import "../assets/style/styleIndex.sass";
function Index() {
  return (
    <div>
      <Header />

      <InteractiveElement
        label="Contact"
        className="witch-room__hotspot witch-room__hotspot--contact"
      />
      <InteractiveElement
        label="À propos"
        className="witch-room__hotspot witch-room__hotspot--about"
      />
      <InteractiveElement
        label="Portfolio"
        className="witch-room__hotspot witch-room__hotspot--portfolio"
      />
      <InteractiveElement
        label="Jeux préférés"
        className="witch-room__hotspot witch-room__hotspot--games"
      />
      <InteractiveElement
        label="Mes recettes favorites"
        className="witch-room__hotspot witch-room__hotspot--recipes"
      />
      <InteractiveElement
        label="Tarot"
        className="witch-room__hotspot witch-room__hotspot--tarot"
      />
      {/*<InteractiveElement
        label="Easter egg"
        className="witch-room__hotspot witch-room__hotspot--egg"
      />*/}
      <Footer />
    </div>
  );
}

export default Index;
