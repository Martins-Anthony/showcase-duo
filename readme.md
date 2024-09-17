# Showcase Duo

## Description du projet

Showcase duo est une application web permettant de générer des captures d'écran combinant l'affichage d'un téléphone et d'un ordinateur dans une seule image optimisée, que l'utilisateur peut télécharger.

## Fonctionnalités

- **Téléchargement d'images optimisées** : Génération de captures d'écran au format PNG allégé max 1 Mo, contenant une combinaison de l'affichage mobile et desktop.
- **Import ou glisser-déposer** : L'utilisateur peut importer ou glisser-déposer des images distinctes pour l'écran mobile et l'écran desktop.
- **Génération d'une image unique** : Peu importe l'appareil que l'utilisateur utilise,  l'image générée sera toujours identique version desktop taille 2880*1504
- **Notification via modal** : Une fenêtre modale s'affiche pour indiquer à l'utilisateur que l'image est prête à être téléchargée.

## Technologies utilisées

- [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) :  Fournit la structure sémantique de l'application, assurant une base solide et standardisée pour l'ensemble du contenu.
- [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)](https://sass-lang.com/) : Utilisé pour la mise en page et le style de l'application, avec des styles réactifs et personnalisables. SCSS est employé pour les mixins, les variables, et les fonctions Sass, améliorant la modularité et la maintenance du code CSS.
- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white)](https://jquery.com/) : Apporte le dynamisme à l'application, permettant de charger les composants de manière asynchrone à partir de fichiers externes et d'interagir avec l'interface utilisateur de manière fluide.
- [![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=flat&logo=google-fonts&logoColor=white)](https://fonts.google.com/)
 : Intègre la police `Shrikhand` pour enrichir le design typographique et assurer une cohérence visuelle dans l'ensemble de l'application.
- **[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org) (Node-sass)** : Utilisé pour la compilation automatique des fichiers SCSS en CSS, facilitant le développement et le déploiement des styles.
- [![HTML2canvas](https://img.shields.io/badge/HTML2canvas-FF9900?style=flat)](https://html2canvas.hertzen.com/) : Génère des captures d'écran des éléments de la page au format PNG, permettant aux utilisateurs de capturer et de sauvegarder des visuels de l'application.
- [![browser-image-compression](https://img.shields.io/badge/browser--image--compression-4CAF50?style=flat)](https://github.com/Donaldcwl/browser-image-compression) : Réduit la taille des images, garantissant une taille maximale de 1 Mo pour optimiser le chargement et la performance de l'application.

## Installation

1. Clonez ce dépôt sur votre machine locale :

    ```bash
    git clone https://github.com/Martins-Anthony/showcase-duo.git
    ```

2. Installez les dépendances nécessaires :

    ```bash
    npm install
    ```

3. Compilez les fichiers SCSS en CSS en lançant le script :

    ```bash
    npm run sass
    ```

4. Ouvrez `index.html` dans votre navigateur pour visualiser l'application.

## Utilisation

1. Importez ou glissez-déposez les images à afficher sur l'écran du **téléphone** et de l'**ordinateur**.
2. Cliquez sur le bouton "Generate" pour créer une image combinée.
3. Une fenêtre modale s'affichera, vous permettant de télécharger l'image générée en format JPEG optimisé.

## Auteur

- **Martins Anthony** - [![Portfolio](https://img.shields.io/badge/Portfolio-webcraft--anthony.com-blueviolet?style=for-the-badge&logo=internet-explorer&logoColor=white)](http://webcraft-anthony.com)  [![GitHub](https://img.shields.io/badge/GitHub-Martins--Anthony-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Martins-Anthony)

## Licence

Ce projet est sous licence [ISC](https://opensource.org/licenses/ISC).
