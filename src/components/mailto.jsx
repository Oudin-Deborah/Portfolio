import { useState } from "react";

function ContactForm() {
  const [statut, setStatut] = useState(null); // null | "envoi" | "succes" | "erreur"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatut("envoi");

    const formData = new FormData(e.target);

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
    } catch (error) {
      setStatut("erreur");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nom" placeholder="Ton nom" required />
      <input type="email" name="email" placeholder="Ton email" required />
      <textarea name="message" placeholder="Ton message" required />

      <button type="submit" disabled={statut === "envoi"}>
        {statut === "envoi" ? "Envoi..." : "Envoyer"}
      </button>

      {statut === "succes" && <p>Message envoyé, merci !</p>}
      {statut === "erreur" && <p>Une erreur est survenue, réessaie.</p>}
    </form>
  );
}

export default ContactForm;
