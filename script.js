const video = document.getElementById('custom-video');
const playPauseButton = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume');
const fullscreenButton = document.getElementById('fullscreen');

// Управление воспроизведением
playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = '⏸️';
    } else {
        video.pause();
        playPauseButton.textContent = '▶️';
    }
});

// Управление громкостью
volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
});

// Полноэкранный режим
fullscreenButton.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
});