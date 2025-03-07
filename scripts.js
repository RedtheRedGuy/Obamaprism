document.addEventListener("click", function () {
    var audio = document.getElementById("bg-music");
    if (audio && audio.muted) {
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
const fullscreenButton = document.getElementById('fullscreenBtn');

if (slider && speedValue && pyramid) {
    slider.addEventListener('input', () => {
        const speed = parseFloat(slider.value);
        if (!isNaN(speed) && speed > 0) {
            speedValue.textContent = speed;
            pyramid.style.animationDuration = `${3 / speed}s`;
        }
    });
}

const changeTile = (button, tile) => {
    if (button) {
        button.addEventListener('click', () => {
            const front = document.querySelector('.front');
            if (front) {
                front.style.backgroundImage = `url('${tile}')`;
            }
        });
    }
};
// Function to toggle visibility of all elements outside pyramid-container
function toggleFullscreenUI() {
    const pyramidContainer = document.querySelector('.pyramid-container'); // Get the pyramid container

    if (pyramidContainer) {
        document.querySelectorAll('body > *').forEach(element => {
            if (element !== pyramidContainer) {
                element.style.display = document.fullscreenElement ? 'none' : ''; // Hide all except pyramid-container
            } else {
                element.style.display = 'block'; // Ensure pyramid-container stays visible
            }
        });
    } else {
        console.error("No element with class 'pyramid-container' found!");
    }
}

// Listen for fullscreen changes
document.addEventListener('fullscreenchange', toggleFullscreenUI);
document.addEventListener('webkitfullscreenchange', toggleFullscreenUI);
document.addEventListener('mozfullscreenchange', toggleFullscreenUI);
document.addEventListener('MSFullscreenChange', toggleFullscreenUI);

// Initial check
toggleFullscreenUI();


document.getElementById("fullscreenBtn").addEventListener("click", function() {
    if (!document.fullscreenElement &&    // Check if fullscreen is not active
        !document.webkitFullscreenElement && 
        !document.mozFullScreenElement && 
        !document.msFullscreenElement) {
        
        // Request fullscreen for different browsers
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Safari
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
        }
    } else {
        // Exit fullscreen for different browsers
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Safari
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
});

changeTile(changeTile1Button, 'tile001.png');
changeTile(changeTile2Button, 'tile002.png');
changeTile(changeTile3Button, 'tile003.png');
