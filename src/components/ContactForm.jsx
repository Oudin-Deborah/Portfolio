import { useState } from "react";
//fonction de gestion du form d'envoi de mail//
function ContactForm() {
  const [statut, setStatut] = useState(null); // null | "envoi" | "succes" | "erreur"

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

      {statut === "succes" && <p role="status">Message envoyé, merci !</p>}
      {statut === "erreur" && (
        <p role="alert">Une erreur est survenue, veuillez réessayer.</p>
      )}
    </form>
  );
}

export default ContactForm;
