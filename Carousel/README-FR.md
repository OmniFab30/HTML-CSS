# 🎠 Carousel HTML & CSS

Un **carousel entièrement réalisé en HTML et CSS**, sans JavaScript.

Le carousel utilise les fonctionnalités modernes de CSS pour gérer la navigation horizontale, l'alignement des éléments et les indicateurs de position.

### ⚙️ Fonctionnement

* Les éléments sont disposés horizontalement grâce à `display: flex`.
* Le conteneur utilise `overflow-x: auto` pour permettre le défilement horizontal.
* `scroll-snap-type: x mandatory` permet de positionner automatiquement chaque carte lors du défilement.
* Chaque `.card` utilise `scroll-snap-align: start` afin que les cartes s'alignent correctement.
* Les boutons **précédent / suivant** sont générés directement avec les pseudo-éléments CSS `::scroll-button()`.
* Les indicateurs de navigation sont générés avec `::scroll-marker()` et regroupés grâce à `::scroll-marker-group`.
* `:target-current` permet de mettre en évidence l'indicateur correspondant à la carte actuellement affichée.
* `scroll-behavior: smooth` ajoute une transition fluide lors de la navigation.
* Le scrollbar natif est masqué pour obtenir une interface plus propre.

### 📱 Responsive

Une media query adapte la position des boutons sur les écrans de moins de **500px** afin de conserver une navigation adaptée aux petits écrans.

### 🧩 Technologies utilisées

* HTML5
* CSS3
* CSS Scroll Snap
* CSS Scroll Buttons
* CSS Scroll Markers
* Flexbox
* Media Queries

> **Aucun JavaScript n'est utilisé.** Toute la navigation du carousel repose sur les fonctionnalités natives du CSS moderne.
