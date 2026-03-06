// js/coran.js
const sourateList = document.getElementById("sourate-list");
const versetContainer = document.getElementById("verset-container");

fetch("data/coran.json")
    .then(response => response.json())
    .then(data => {
        // Afficher la liste des sourates
        data.forEach(sourate => {
            const li = document.createElement("li");
            li.textContent = `${sourate.numero}. ${sourate.nom} (${sourate.nom_arabe})`;
            li.style.cursor = "pointer";
            li.addEventListener("click", () => afficherVersets(sourate));
            sourateList.appendChild(li);
        });
    })
    .catch(error => console.error("Erreur chargement Coran:", error));

function afficherVersets(sourate) {
    versetContainer.innerHTML = `<h3>${sourate.nom} (${sourate.nom_arabe})</h3>`;
    sourate.versets.forEach(v => {
        const div = document.createElement("div");
        div.classList.add("verset");
        div.innerHTML = `<p><strong>${v.numero}.</strong> ${v.texte_ar}</p>
                         <p>${v.texte_fr}</p>`;
        versetContainer.appendChild(div);
    });
}