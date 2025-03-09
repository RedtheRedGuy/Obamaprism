document.addEventListener("click", function () {
    var audio = document.getElementById("bg-music");
    if (audio && audio.muted) {
        audio.muted = false;
        audio.play();
    }
}, { once: true });

const hand = document.getElementById('hand');
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
        
        if (!isNaN(speed)) {
            speedValue.textContent = speed;
            
            // Stop if speed is 0
            if (speed === 0) {
                pyramid.style.animation = 'none';
            }
            // Reverse if speed is lower than 0
            else if (speed < 0) {
                pyramid.style.animation = `rotate-reverse ${3 / Math.abs(speed)}s infinite linear`;
            }
            // Normal speed
            else {
                pyramid.style.animation = `rotate ${3 / speed}s infinite linear`;
            }
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
function toggleFullscreenUI() {
    const controls = document.getElementById('controls'); // Select the controls by ID

    if (controls) {
        if (document.fullscreenElement) {
            controls.style.display = 'none'; // Hide controls in fullscreen
        } else {
            controls.style.display = ''; // Show controls when exiting fullscreen
        }
    }
}

// Listen for fullscreen change events
document.addEventListener('fullscreenchange', toggleFullscreenUI);
document.addEventListener('webkitfullscreenchange', toggleFullscreenUI);
document.addEventListener('mozfullscreenchange', toggleFullscreenUI);
document.addEventListener('MSFullscreenChange', toggleFullscreenUI);

// Initial check when the page loads
toggleFullscreenUI();

let isBackground1 = true;
function toggleBackground() {
    if (isBackground1) { 
        document.body.style.backgroundImage = 'url("FO.png")';
    } else { 
        document.body.style.backgroundImage = 'url("WNF")'; } 
    isBackground1 = !isBackground1;
}
const currentIdk = 'hand1.png'
let handenabled = false
function toggleHand() {
    if (handenabled) { 
        hand.src = 'hand0.png';
    } else { 
        hand.src = currentIdk;
    }
    handenabled = !handenabled;
}

const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        alert('Please upload a valid image file.');
        return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;

        img.onload = () => {
            const overlay = new Image();
            overlay.src = 'Overlay.png';

            overlay.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');

            
                ctx.drawImage(img, 0, 0);
                ctx.drawImage(overlay, 0, 0, img.width, img.height);

                const front = document.querySelector('.front');
                front.style.backgroundImage = `url(${canvas.toDataURL()})`;
            };
        };
    };

    reader.readAsDataURL(file);
});



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

