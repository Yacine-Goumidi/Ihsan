// dhikr.js
const dhikrSelect = document.getElementById("dhikr-select");
const counterDisplay = document.getElementById("counter-display");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");

let counter = 0;

// Fonction pour mettre à jour l'affichage
function updateDisplay() {
    const dhikr = dhikrSelect.value;
    counterDisplay.textContent = `${dhikr} : ${counter}`;
}

// Ajouter 1 au compteur
incrementBtn.addEventListener("click", () => {
    counter++;
    updateDisplay();
});

// Réinitialiser le compteur
resetBtn.addEventListener("click", () => {
    counter = 0;
    updateDisplay();
});

// Initialiser l'affichage
updateDisplay();

// Mettre à jour l'affichage si on change de dhikr
dhikrSelect.addEventListener("change", () => {
    counter = 0;
    updateDisplay();
});

// Ajouter 1 au compteur avec effet
incrementBtn.addEventListener("click", () => {
    counter++;
    updateDisplay();

    // Ajouter l'effet
    counterDisplay.classList.add("pulse");
    setTimeout(() => {
        counterDisplay.classList.remove("pulse");
    }, 300); // même durée que l'animation
});

// Charger le son
const dhikrSound = new Audio("audio/dhikr-click.mp3");

// Jouer le son au clic
incrementBtn.addEventListener("click", () => {
    counter++;
    updateDisplay();

    counterDisplay.classList.add("pulse");
    setTimeout(() => {
        counterDisplay.classList.remove("pulse");
    }, 300);

    dhikrSound.currentTime = 0; // permet de rejouer rapidement
    dhikrSound.play();
});