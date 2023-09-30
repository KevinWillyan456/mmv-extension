const buttonAcept = document.getElementById("acept");
const telaBemVindo = document.querySelector(".tela_bem_vindo");
const body = document.querySelector("body");
let videoFundo = document.getElementById("backgroundVideo");
let telaLoading = document.querySelector(".tela_loading");

let data = [
    "https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/Devilchi.mp4",
    "https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/Jahy-Sama%20-%20Adorable.mp4",
    "https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/Light%20It%20UP.mp4",
    "https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/MMV%20-%20%20Aftermath%20-%20The%20way%20You%20Are.mp4",
    "https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/MMV%20-%20KEAN%20DYSSO%20-%20Plain%20Jane.mp4",
    "https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/MMV-%20Imanbek%20%E2%80%93%20RosesRemix.mp4",
    "https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/Never%20Letting%20Go.mp4",
    "https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/NIVERSO%20-%20Underwater%20_%20Number%202%20in%20Demon%20Realm.mp4",
];

let ultimoSorteado = -1;

buttonAcept.addEventListener("click", () => {
    telaBemVindo.remove();
    ultimoSorteado = sortearDiferenteAnterior(data, ultimoSorteado);
    videoFundo.src = data[ultimoSorteado];
    telaLoading.classList.remove("tela_loading-Hidden");
});

videoFundo.addEventListener("loadeddata", () => {
    setTimeout(() => {
        telaLoading.classList.add("tela_loading-Hidden");
        videoFundo.play();
        gerenciaVideos();
    }, 2000);
});

function gerenciaVideos() {
    videoFundo.addEventListener("ended", nextVideo);
    function nextVideo() {
        ultimoSorteado = sortearDiferenteAnterior(data, ultimoSorteado);
        videoFundo.src = data[ultimoSorteado];
        videoFundo.play();
        gerenciaVideos();
    }
}

function sortearDiferenteAnterior(array, ultimoSorteado) {
    let novoSorteado;
    do {
        novoSorteado = Math.floor(Math.random() * array.length);
    } while (novoSorteado === ultimoSorteado);

    return novoSorteado;
}

let buttonFullScreen = document.querySelector(".fullScreen");
buttonFullScreen.addEventListener("click", toggleFullScreen);

function toggleFullScreen() {
    if (
        (document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(
                Element.ALLOW_KEYBOARD_INPUT
            );
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}
