# Showcase Duo

## Description du projet

Showcase duo est une application web permettant de générer des captures d'écran combinant l'affichage d'un téléphone et d'un ordinateur dans une seule image optimisée, que l'utilisateur peut télécharger.

## Fonctionnalités

- **Téléchargement d'images optimisées** : Génération de captures d'écran au format JPEG allégé, contenant une combinaison de l'affichage mobile et desktop.
- **Import ou glisser-déposer** : L'utilisateur peut importer ou glisser-déposer des images distinctes pour l'écran mobile et l'écran desktop.
- **Génération d'une image unique** : Peu importe l'appareil que l'utilisateur utilise,  l'image générée sera toujours identique version desktop taille 2880*1504
- **Notification via modal** : Une fenêtre modale s'affiche pour indiquer à l'utilisateur que l'image est prête à être téléchargée.

## Technologies utilisées

- **HTML5** : Structure de base de l'application.
- **CSS3/SCSS** : Mise en place de styles réactifs et personnalisables avec des mixins, des variables, et des fonctions Sass.
- **JavaScript (jQuery)** : Dynamisme de l'application pour charger les composants à partir de fichiers externes.
- **Google Fonts** : Utilisation de la police `Shrikhand` pour le design typographique.
- **Node.js (Node-sass)** : Compilation automatique des fichiers SCSS en CSS.

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

- **Martins Anthony** - [Portfolio](https://webcraft-anthony.com/) - [GitHub](https://github.com/Martins-Anthony)

## Licence

Ce projet est sous licence [ISC](https://opensource.org/licenses/ISC).
