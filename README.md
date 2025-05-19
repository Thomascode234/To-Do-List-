
# Gestionnaire de Tâches Personnel

## 📝 Description du projet

Ce projet est un gestionnaire de tâches personnel simple et responsive, conçu pour permettre aux utilisateurs de :
- Ajouter, modifier et supprimer des tâches.
- Filtrer les tâches selon leur état : toutes, en cours, terminées.
- Sauvegarder automatiquement les données dans le navigateur grâce à **localStorage**.

L’objectif est de fournir une interface claire et intuitive, avec une expérience utilisateur fluide et un design élégant.

---

## 🧱 Structure du projet

- **index.html** : Structure HTML principale de l’application, incluant les balises sémantiques, le formulaire de création de tâche, et les filtres.
- **style.css** : Feuille de style CSS personnalisée assurant un rendu moderne, responsive et accessible. Inclut un fond d’écran artistique.
- **app.js** : Contient toute la logique JavaScript permettant la gestion dynamique des tâches (ajout, suppression, édition, filtres, sauvegarde).

---

## 💡 Fonctionnalités principales

- ✔️ Ajouter une nouvelle tâche.
- ✏️ Modifier une tâche existante.
- 🗑️ Supprimer une tâche.
- 📂 Filtrer par statut (Toutes, En cours, Terminées).
- 💾 Sauvegarde automatique via localStorage.
- 🎨 Interface responsive avec image et design attrayant.

---

## 📂 Aperçu du code

### `index.html`

Contient la structure de la page avec :
- Une section d’image à gauche.
- Un formulaire de création de tâches.
- Une section d’affichage dynamique des tâches.

### `style.css`

Définit :
- Un fond d’écran artistique.
- Une disposition responsive entre desktop et mobile.
- Des animations et styles cohérents pour tous les composants.

### `app.js`

Fonctionnalités incluses :
- Récupération/stockage des tâches dans le localStorage.
- Affichage dynamique avec `renderTodos()`.
- Édition et suppression de tâches avec écouteurs d’événements.
- Mise à jour en temps réel de l'affichage selon les filtres.

---


## 🚀 Lancement du projet

1. Ouvrez le fichier `index.html` dans un navigateur moderne.
2. Ajoutez des tâches via le formulaire.
3. Testez les filtres et la persistance entre les sessions.

Aucune installation requise — tout est en HTML/CSS/JS natif.

---

## 🛠️ Technologies utilisées

- HTML5 sémantique
- CSS3 avec Flexbox et Media Queries
- JavaScript ES6+
- localStorage

---

## 👤 Auteur

Projet réalisé par [Thomas lebon].

---

## 📄 Licence

Ce projet est libre de droit. Utilisez-le, modifiez-le et partagez-le librement.
