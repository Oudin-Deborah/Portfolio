import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { usePageTitle } from "../hooks/usePageTitle";

function Index() {
  usePageTitle("Portfolio interactif — Déborah Oudin, développeuse Full Stack");

  const navigate = useNavigate();
  // En arrivant d'une fiche projet ou d'un lien du menu, la modale demandée s'ouvre directement
  const location = useLocation();
  const { activeContent, openModal, closeModal } = useModal(
    location.state?.modal,
  );

  // Ne sert que si le menu complet est affiché sur la scène (FULL_MENU_ON_SCENE dans Header.jsx) :
  // un lien du menu vers une modale ne recharge pas la page quand on y est déjà, donc on repère
  // la nouvelle navigation à sa clé pour ouvrir la modale demandée
  const [lastKey, setLastKey] = useState(location.key);
  if (location.key !== lastKey) {
    setLastKey(location.key);
    if (location.state?.modal) openModal(location.state.modal);
  }

  // À la fermeture, on oublie le projet d'où l'on revenait : la prochaine ouverture
  // (ou un rechargement de la page) repart du début du carrousel
  const handleClose = useCallback(() => {
    closeModal();
    if (location.state) navigate(location.pathname, { replace: true });
  }, [closeModal, location.state, location.pathname, navigate]);

  // Contenu et titre de chaque modale
  const modalContents = {
    portfolio: {
      title: "Portfolio",
      content: <PortfolioList initialId={location.state?.projectId} />,
    },
    games: { title: "Jeux préférés", content: <GamesList /> },
    recipes: {
      title: "Mes recettes favorites",
      content: <RecipesList initialSeason={location.state?.season} />,
    },
    skills: {
      title: "Compétences",
      content: <SkillsList initialSkill={location.state?.skill} />,
    },
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
          {/* L'ordre des zones est celui de la liste affichée sur mobile */}
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
          <InteractiveElement
            label="Mes recettes"
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
          <InteractiveElement
            label="Contact"
            className="witch-room__hotspot witch-room__hotspot--contact"
            onActivate={() => navigate("/contact")}
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
        onClose={handleClose}
        title={activeModal?.title}
      >
        {activeModal?.content}
      </Modal>

      <Footer />
    </>
  );
}

export default Index;
