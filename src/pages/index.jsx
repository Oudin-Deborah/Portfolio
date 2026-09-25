import { useNavigate } from "react-router-dom";
import { useModal } from "../hooks/UseModal";
import Header from "../components/header";
import Footer from "../components/footer";
import InteractiveElement from "../components/InteractiveElement";
import Modal from "../components/Modal";
import SkillsList from "../components/skills";
import RecipesList from "../components/recipes";
import GamesList from "../components/games";
import "../assets/style/styleIndex.sass";
import PortfolioList from "../components/porfolio";

function Index() {
  const navigate = useNavigate();
  const { activeContent, openModal, closeModal } = useModal();

  const modalContents = {
    portfolio: <PortfolioList />,
    games: <GamesList />,
    recipes: <RecipesList />,
    skills: <SkillsList />,
  };

  return (
    <div>
      <Header />

      <InteractiveElement
        label="Contact"
        className="witch-room__hotspot witch-room__hotspot--contact"
        onActivate={() => navigate("/contact")}
      />
      <InteractiveElement
        label="Portfolio"
        className="witch-room__hotspot witch-room__hotspot--portfolio"
        onActivate={() => openModal("portfolio")}
      />
      <InteractiveElement
        label="Jeux préférés"
        className="witch-room__hotspot witch-room__hotspot--games"
        onActivate={() => openModal("games")}
      />
      <InteractiveElement
        label="Mes recettes favorites"
        className="witch-room__hotspot witch-room__hotspot--recipes"
        onActivate={() => openModal("recipes")}
      />
      {/*<InteractiveElement
        label="Tarot"
        className="witch-room__hotspot witch-room__hotspot--tarot"
        onActivate={() => openModal("tarot")}
      />*/}
      <InteractiveElement
        label="Compétences"
        className="witch-room__hotspot witch-room__hotspot--skills"
        onActivate={() => openModal("skills")}
      />
      {/*<InteractiveElement
        label="Easter egg"
        className="witch-room__hotspot witch-room__hotspot--egg"
      />*/}

      <Modal isOpen={!!activeContent} onClose={closeModal}>
        {modalContents[activeContent]}
      </Modal>

      <Footer />
    </div>
  );
}

export default Index;
