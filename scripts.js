document.addEventListener("click", function() {
        var audio = document.getElementById("bg-music");
        if (audio.muted) {
            audio.muted = false;
            audio.play();
        }
    }, { once: true });

    const slider = document.getElementById('speedSlider');
    const speedValue = document.getElementById('speedValue');
    const pyramid = document.querySelector('.pyramid');
    const changeTile1Button = document.getElementById('changeTile1');
    const changeTile2Button = document.getElementById('changeTile2'); 
    const changeTile3Button = document.getElementById('changeTile3');
    
    slider.addEventListener('input', () => {
        const speed = slider.value;
        speedValue.textContent = speed;
        pyramid.style.animationDuration = `${3 / speed}s`;
    });
    pyramid.style.animationDuration = `${3 / 2}s`;
    changeTile1Button.addEventListener('click', () => { document.querySelector('.front').style.backgroundImage = "url('tile001.png')"; }); 
    changeTile2Button.addEventListener('click', () => { document.querySelector('.front').style.backgroundImage = "url('tile002.png')"; }); 
    changeTile3Button.addEventListener('
    click', () => { document.querySelector('.front').style.backgroundImage = "url('tile003.png')"; });
    
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
