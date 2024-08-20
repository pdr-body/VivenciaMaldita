const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});

var backgroundMusic = document.getElementById("backgroundMusic");
var StartSound = document.getElementById("StartSound");

window.onload = function() {
    console.log("Window loaded. Attempting to play background music.");
    backgroundMusic.play().then(() => {
        console.log("background music started playing.");
    }).catch((error) => {
        console.error("Failed to play background music:", error);
    });
};

function startGame() {
    console.log("Start button clicked.");
    StartSound.play().then(() => {
        console.log("Start sound played.");
        backgroundMusic.pause();
    }).catch((error) => {
        console.error("Failed to play start sound:", error);
    });
}



