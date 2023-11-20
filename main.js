const audio = document.getElementById("audio");
const playB = document.getElementById("play");
const pauseB = document.getElementById("pause");



const playAudio = () => {
    audio.play();
    playB.classList.toggle('disabled');
    pauseB.classList.remove('disabled');
}

const pauseAudio = () => {
    audio.pause();
    pauseB.classList.toggle('disabled');
    playB.classList.remove('disabled');
}

playB.addEventListener('click', playAudio);
pauseB.addEventListener('click', pauseAudio);


document.addEventListener('DOMContentLoaded', function () {
    audio.play();
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollDuration = 20000; // Время в миллисекундах (10 секунд)
    const targetScroll = document.body.scrollHeight - window.innerHeight;

    // Анимированная прокрутка
    function scrollToBottom() {
        let startTime;

        function animateScroll(timestamp) {
            if (!startTime) startTime = timestamp;

            const progress = timestamp - startTime;
            const percentage = Math.min(progress / scrollDuration, 1);

            window.scrollTo(0, percentage * targetScroll);

            if (progress < scrollDuration) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    }

    // Вызываем анимацию после короткой задержки (например, 1 секунды)
    setTimeout(scrollToBottom, 1000);
});
