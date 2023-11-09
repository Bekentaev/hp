const audio = document.getElementById("audio");
const playB = document.getElementById("play");
const pauseB = document.getElementById("pause");




const playAudio = () => {
    audio.src = "1.mp3";

    audio.play();

    playB.classList.toggle('disabled');
    pauseB.classList.remove('disabled');
}

const pauseAudio = () => {
    audio.pause();
    pauseB.classList.toggle('disabled');
    playB.classList.remove('disabled');

}

playB.addEventListener('click', playAudio)
pauseB.addEventListener('click', pauseAudio)