// Start background music when the document is clicked
document.addEventListener("click", function() {
    var audio = document.getElementById("bg-music");
    if (audio.muted) {
        audio.muted = false;
        audio.play();
    }
}, { once: true });

const fullscreenButton = document.getElementById('fullscreenButton');

// Fullscreen toggle function
fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
});

// Detect fullscreen changes and hide UI elements
document.addEventListener("fullscreenchange", toggleFullscreen);
document.addEventListener("webkitfullscreenchange", toggleFullscreen);
document.addEventListener("mozfullscreenchange", toggleFullscreen);
document.addEventListener("MSFullscreenChange", toggleFullscreen);

function toggleFullscreen() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        // Fullscreen is active, hide the buttons
        document.querySelector('.button-container').style.display = 'none';
        document.querySelector('.slider-container').style.display = 'none';
    } else {
        // Fullscreen is not active, show the buttons
        document.querySelector('.button-container').style.display = 'block';
        document.querySelector('.slider-container').style.display = 'block';
    }
}
