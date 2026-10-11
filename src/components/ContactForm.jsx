import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Temps laissé pour lire la confirmation avant le retour à l'accueil
const REDIRECT_DELAY = 3000;

//fonction de gestion du form d'envoi de mail//
function ContactForm() {
  const [statut, setStatut] = useState(null); // null | "envoi" | "succes" | "erreur"
  const navigate = useNavigate();

  // Message envoyé : retour à l'accueil après la confirmation
  useEffect(() => {
    if (statut !== "succes") return;

    const timer = setTimeout(() => navigate("/index"), REDIRECT_DELAY);
    return () => clearTimeout(timer);
  }, [statut, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatut("envoi");

    const formData = new FormData(e.target);
    //conditionnelle asynchrone de l'envoi//
    try {
      const response = await fetch("https://formspree.io/f/mzebzwwj", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatut("succes");
        e.target.reset();
      } else {
        setStatut("erreur");
      }
    } catch {
      setStatut("erreur");
    }
  };
  //form : chaque champ a un label, masqué à l'écran car le placeholder en tient lieu visuellement//
  return (
    <form onSubmit={handleSubmit} aria-label="Formulaire de contact">
      <label htmlFor="contact-nom" className="visually-hidden">
        Votre nom
      </label>
      <input
        id="contact-nom"
        type="text"
        name="nom"
        placeholder="Votre nom"
        autoComplete="name"
        required
      />

      <label htmlFor="contact-email" className="visually-hidden">
        Votre email
      </label>
      <input
        id="contact-email"
        type="email"
        name="email"
        placeholder="Votre email"
        autoComplete="email"
        required
      />

      <label htmlFor="contact-message" className="visually-hidden">
        Votre message
      </label>
      <textarea
        id="contact-message"
        name="message"
        placeholder="Votre message"
        required
      />

      <button type="submit" disabled={statut === "envoi"}>
        {statut === "envoi" ? "Envoi..." : "Envoyer"}
      </button>

      {/* Les deux zones de message restent dans la page, vides : un lecteur d'écran
          n'annonce de façon fiable que le texte ajouté dans une zone déjà présente */}
      <div className="contact-form__feedback">
        <p role="status">
          {statut === "succes" && "Message envoyé, merci ! Retour à l'accueil…"}
        </p>
        <p role="alert">
          {statut === "erreur" &&
            "Une erreur est survenue, veuillez réessayer."}
        </p>
      </div>
    </form>
  );
}

export default ContactForm;
