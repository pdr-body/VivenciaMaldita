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
var isPlaying = false;

function startGame() {
    StartSound.play();
}

document.getElementById("toggleBackgroundMusic").addEventListener("click", function() {
    if (isPlaying) {
        backgroundMusic.pause();
        this.textContent = "Tocar Música de Fundo";
    } else {
        backgroundMusic.play();
        this.textContent = "Pausar Música de Fundo";
    }
    isPlaying = !isPlaying;
});

