import { useNavigate } from "react-router-dom";
import { useModal } from "../hooks/useModal";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InteractiveElement from "../components/InteractiveElement";
import Modal from "../components/Modal";
import SkillsList from "../components/SkillsList";
import RecipesList from "../components/RecipesList";
import GamesList from "../components/GamesList";
import "../assets/style/styleIndex.sass";
import PortfolioList from "../components/PortfolioList";

function Index() {
  const navigate = useNavigate();
  const { activeContent, openModal, closeModal } = useModal();

  // Contenu et titre de chaque modale
  const modalContents = {
    portfolio: { title: "Portfolio", content: <PortfolioList /> },
    games: { title: "Jeux préférés", content: <GamesList /> },
    recipes: { title: "Mes recettes favorites", content: <RecipesList /> },
    skills: { title: "Compétences", content: <SkillsList /> },
  };
  const activeModal = modalContents[activeContent];

  return (
    <>
      <Header />

      <main className="witch-room">
        {/* Titre de la page, lu par les lecteurs d'écran mais non affiché */}
        <h1 className="visually-hidden">
          Portfolio de Déborah Oudin, développeuse web
        </h1>

        <div className="witch-room__stage">
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
          {/*<InteractiveElement
            label="Jeux préférés"
            className="witch-room__hotspot witch-room__hotspot--games"
            onActivate={() => openModal("games")}
          />*/}
          {/*<InteractiveElement
            label="Mes recettes favorites"
            className="witch-room__hotspot witch-room__hotspot--recipes"
            onActivate={() => openModal("recipes")}
          />*/}
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
        </div>
        <p className="witch-room__hint">
          Explorez la pièce : cliquez sur les objets
        </p>
      </main>

      <Modal
        isOpen={!!activeModal}
        onClose={closeModal}
        title={activeModal?.title}
      >
        {activeModal?.content}
      </Modal>

      <Footer />
    </>
  );
}

export default Index;
