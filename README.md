# G2DTemplate

Ce répertoire contient l'ensemble des ressources front-end (HTML, CSS, JS) du projet **G2D Bénin**. Il sert de base visuelle et interactive pour l'intégration dans le framework Laravel.

## 🚀 Fonctionnalités incluses

- **Accueil Dynamique** : Carrousel d'images avec animations de texte synchronisées.
- **Système d'Authentification** : Templates pour la connexion (Login) et l'inscription multi-étapes (Register).
- **Tableau de Bord (Dashboard)** : Interface utilisateur complète avec barre latérale de navigation et gestion de profil.
- **Gestion des Ressources** : 
    - Grille d'affichage des ressources pédagogiques.
    - Page de détails d'une ressource avec commentaires et statistiques.
    - Formulaire de publication avec prévisualisation des fichiers et drag & drop.
- **Mode Sombre (Dark Mode)** : Support du thème sombre via `localStorage`.
- **Animations au scroll** : Utilisation de l'Intersection Observer pour des effets d'apparition fluides (`fade-in`).
- **Responsive Design** : Entièrement optimisé pour mobiles et tablettes.

## 📁 Structure des dossiers

- `/css` : Feuilles de style modulaires (chaque page possède son propre fichier CSS pour une meilleure maintenance).
- `/js` : Scripts pour l'interactivité (carrousel, gestion du thème, upload de fichiers).
- `/img` : (Non inclus dans ce repo) Stockage des assets graphiques.

## 🛠️ Technologies utilisées

- **CSS3** : Variables CSS (custom properties), Flexbox, CSS Grid.
- **JavaScript (ES6+)** : Manipulation du DOM, API Intersection Observer, gestion du stockage local.
- **Polices** : Google Fonts ('Outfit', 'Quicksand').

## ⚙️ Installation

1. Clonez le répertoire dans votre dossier local :
   ```bash
   git clone https://github.com/frjuscko/G2DTemplate.git
    
   ```
2. Ouvrez le fichier `index.html` (ou intégrez les vues dans vos templates Blade Laravel).
3. Assurez-vous que les chemins des fichiers CSS et JS sont correctement configurés dans vos balises `<link>` et `<script>`.

---
*Développé pour le projet G2D Bénin.*
[G2D Bénin](img/Accueil.png)