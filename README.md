# Witch Room — Portfolio de Déborah Oudin

Portfolio interactif de développeuse web : le visiteur explore une pièce de sorcière et clique sur les objets pour découvrir les projets, les compétences et le formulaire de contact.

**Site en ligne : <https://oudin-deborah.github.io/Portfolio/>**

![Aperçu de la scène interactive du portfolio](public/deborah_oudin_developpeuse_web.png)

## Fonctionnalités

- **Scène interactive** : les zones cliquables sont placées en pourcentages sur l'image de fond et restent alignées sur les objets quelle que soit la taille de l'écran.
- **Portfolio** : carrousel de fiches projet (aperçu, description, technologies, liens vers le site et le dépôt), alimenté par un fichier JSON.
- **Compétences** : liste des technologies déduite des projets, avec pour chacune les projets qui l'utilisent.
- **Contact** : formulaire envoyé par Formspree, avec messages de succès et d'erreur, puis retour à l'accueil.
- **Ambiance sonore** : boucle musicale désactivée par défaut, activable par un bouton et continue d'une page à l'autre.
- **Responsive** : scène sur ordinateur et tablette horizontale, liste de boutons sur tablette verticale et mobile.
- **Accessibilité** : navigation au clavier, structure de titres, libellés pour les lecteurs d'écran, contrastes vérifiés avec WAVE et axe-core.

## Technologies

| Rôle | Outil |
|---|---|
| Interface | React 19 |
| Routage | React Router 7 |
| Build et serveur de développement | Vite 8 |
| Styles | Sass (syntaxe indentée), convention BEM |
| Icônes | Font Awesome |
| Polices | Cinzel Decorative, Montserrat, JetBrains Mono (hébergées avec le site via Fontsource) |
| Formulaire | Formspree |
| Qualité | ESLint |
| Hébergement | GitHub Pages, déployé par GitHub Actions |

## Installation

Prérequis : Node.js 22 ou plus récent.

```bash
git clone https://github.com/Oudin-Deborah/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Le site est alors disponible sur <http://localhost:5173/Portfolio/>.

## Scripts

| Commande | Effet |
|---|---|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Construit le site dans `dist/` |
| `npm run preview` | Sert le site construit, pour le vérifier avant mise en ligne |
| `npm run lint` | Analyse le code avec ESLint |

## Déploiement

Le site est publié automatiquement à chaque mise à jour de la branche `main`, par le workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml). Le développement se fait sur une branche de fonctionnalité, fusionnée dans `main` par une pull request.

## Structure du projet

```
├── .github/workflows/   Déploiement automatique
├── public/              Images des projets, favicon, page 404 de GitHub Pages
├── src/
│   ├── assets/          Images, musique et feuilles de style Sass
│   ├── components/      Composants réutilisables (Header, Modal, Carousel…)
│   ├── context/         État du son partagé par tout le site
│   ├── data/            projects.json : contenu des fiches projet
│   ├── hooks/           useAudio, useModal, usePageTitle
│   ├── pages/           Une page par route (Welcome, Index, About, Contact, NotFound)
│   ├── App.jsx          Déclaration des routes
│   └── main.jsx         Point d'entrée
├── index.html
└── vite.config.js
```

Les styles sont répartis en un fichier par page, plus `_variables.sass` (couleurs, polices) et `_mixins.sass` (boutons, points de rupture, focus) partagés par tous.

## Choix techniques

- **Données dans un JSON** : ajouter un projet revient à ajouter une entrée dans `src/data/projects.json`. Le carrousel et la liste des compétences se mettent à jour seuls.
- **Dimensions en `rem`** : la taille de base grandit avec la fenêtre sur les grands écrans, ce qui met tout le site à l'échelle sans règle supplémentaire.
- **Scène remplacée sur mobile** : les objets seraient trop petits pour être touchés ; sous 768 px, ils laissent place à une liste de boutons qui ouvre les mêmes contenus.
- **Modale accessible** : focus piégé dans la fenêtre, fermeture par Échap, retour du focus sur l'élément d'origine.
- **Adresses directes sur GitHub Pages** : GitHub Pages ne gère pas les routes d'une application monopage. Le build copie `index.html` sous le nom de chaque page, et `public/404.html` redirige les adresses inconnues vers l'application.
- **Performance** : images en WebP, musique en Opus avec MP3 de secours et chargée seulement à l'activation, polices hébergées avec le site, images de fond préchargées.

## Pistes d'amélioration

- Enrichir les fiches projet : contexte, objectifs, compétences développées, résultats.
- Rendre les projets et les compétences accessibles depuis le menu, et pas seulement depuis la scène.
- Pré-générer le HTML des pages pour améliorer le référencement.
- Ajouter de nouvelles zones interactives dans la scène.

## Crédits

- Musique : « Loop witch » par [Gribz](https://www.youtube.com/@Gribz_Music).
- Conception et développement : Déborah Oudin — [LinkedIn](https://www.linkedin.com/in/oudin-deborah/) · [GitHub](https://github.com/Oudin-Deborah)
