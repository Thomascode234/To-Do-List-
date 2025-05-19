// Récupération des éléments du DOM
const form = document.getElementById("todo-form");      // Formulaire d'ajout de tâche
const input = document.getElementById("todo-input");    // Champ texte pour nouvelle tâche
const list = document.getElementById("todo-list");      // Liste UL où afficher les tâches
const filters = document.querySelectorAll(".filters button");  // Boutons de filtre (Toutes, En cours, Terminées)

// Récupération des tâches enregistrées dans le localStorage ou initialisation à tableau vide
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Fonction pour sauvegarder la liste des tâches dans localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Fonction pour afficher les tâches selon le filtre choisi (all, active, completed)
function renderTodos(filter = "all") {
  list.innerHTML = ""; // Vider la liste avant affichage

  todos
    .filter(todo => {
      if (filter === "all") return true;
      if (filter === "active") return !todo.completed;      // Tâches non terminées
      if (filter === "completed") return todo.completed;    // Tâches terminées
    })
    .forEach((todo, index) => {
      const li = document.createElement("li");             // Créer un élément li pour chaque tâche

      // Création du texte de la tâche
      const span = document.createElement("span");
      span.textContent = todo.text;
      if (todo.completed) span.classList.add("completed");  // Style tâche terminée

      // Cliquer sur le texte pour changer le statut terminé/en cours
      span.addEventListener("click", () => {
        todos[index].completed = !todos[index].completed;
        saveTodos();
        renderTodos(filter);
      });

      // 🔧 Bouton Modifier
      const editBtn = document.createElement("button");
      editBtn.textContent = "Modifier";
      editBtn.title = "Modifier";
      editBtn.style.border = "none";
      editBtn.style.background = "none";
      editBtn.style.cursor = "pointer";
      editBtn.addEventListener("click", (e) => {
        e.stopPropagation();  // Empêche le clic de se propager au span
        editTask(span, index, filter);
      });

      // 🗑️ Bouton Supprimer
      const del = document.createElement("button");
      del.textContent = "Supprimer";
      del.title = "Supprimer";
      del.style.border = "none";
      del.style.background = "none";
      del.style.cursor = "pointer";
      del.addEventListener("click", (e) => {
        e.stopPropagation();  // Empêche la bascule de statut en cliquant sur supprimer
        todos.splice(index, 1); // Supprime la tâche du tableau
        saveTodos();
        renderTodos(filter);
      });

      // Ajout des éléments dans le li puis dans la liste
      li.appendChild(span);
      li.appendChild(editBtn);
      li.appendChild(del);
      list.appendChild(li);
    });
}

// Fonction pour modifier une tâche : remplace le texte par un input éditable
function editTask(span, index, filter) {
  const currentText = span.textContent;
  const inputEdit = document.createElement("input");
  inputEdit.type = "text";
  inputEdit.value = currentText;
  inputEdit.classList.add("edit-input");

  // Remplacer le span par l'input
  span.replaceWith(inputEdit);
  inputEdit.focus();

  // Sauvegarder la modification quand l'input perd le focus
  inputEdit.addEventListener("blur", () => {
    const newText = inputEdit.value.trim() || currentText; // Valeur nouvelle ou ancienne si vide
    todos[index].text = newText;
    saveTodos();
    renderTodos(filter);
  });

  // Sauvegarder aussi si on appuie sur Enter
  inputEdit.addEventListener("keydown", (e) => {
    if (e.key === "Enter") inputEdit.blur();
  });
}

// Gestion de la soumission du formulaire (ajout de tâche)
form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    todos.push({ text, completed: false });  // Ajouter tâche non terminée
    input.value = "";                         // Réinitialiser le champ
    saveTodos();                             // Sauvegarder dans localStorage
    renderTodos();                           // Rafraîchir affichage
  }
});

// Ajout d'un écouteur sur chaque bouton filtre pour changer l'affichage
filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active")); // Retirer active de tous
    button.classList.add("active");                          // Ajouter active au bouton cliqué
    renderTodos(button.dataset.filter);                      // Afficher selon filtre choisi
  });
});

// Afficher la liste au chargement de la page
renderTodos();
