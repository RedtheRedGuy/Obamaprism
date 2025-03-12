document.addEventListener("click", function () {
    var audio = document.getElementById("bg-music");
    if (audio && audio.muted) {
        audio.muted = false;
        audio.play();
    }
}, { once: true });

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const hand = document.getElementById('hand');
const slider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');
const pyramid = document.querySelector('.pyramid');
const changeTile1Button = document.getElementById('changeTile1');
const changeTile2Button = document.getElementById('changeTile2');
const changeTile3Button = document.getElementById('changeTile3');
const fullscreenButton = document.getElementById('fullscreenBtn');
const changeTile4Button = document.getElementById('changeTile4');

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

function playAnimation() {
    let sound = document.getElementById("sound");

    sound.play();
    
    pyramid.style.animation = 'none';
    
    pyramid.style.animation = "beatbox 10s infinite linear ";
    sleep(1).then(() => {
        var audio = document.getElementById("bg-music");
        audio.muted = true;
        sleep(9999).then(() => {
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
             
        }  var audio = document.getElementById("bg-music");
        audio.muted = false;});
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

let backgroundState = 0; // Keeps track of the current background

function toggleBackground() {
    if (backgroundState === 0) {
        document.body.style.backgroundImage = 'url("FO.png")';  // First background
    } else if (backgroundState === 1) {
        document.body.style.backgroundImage = 'url("WXPB.png")';  // Second background
    } else {
        document.body.style.backgroundImage = 'url("WNF")';  // Third background
    }
    backgroundState = (backgroundState + 1) % 3;  // Cycle through 0, 1, 2
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
const brightnessSlider = document.getElementById('brightnessSlider');

const overlayImage = new Image(); // Create overlay image object
let uploadedImage = null; // Store the uploaded image

// Set the source for the overlay image
overlayImage.src = 'Overlay.png';

// Event listener for image upload
fileInput.addEventListener('change', processImage);

// Event listener for brightness adjustment slider
brightnessSlider.addEventListener('input', applyBrightness);

// Process uploaded image and display
function processImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        alert('Please upload a valid image file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        uploadedImage = new Image();
        uploadedImage.src = event.target.result;

        uploadedImage.onload = () => {
            // Once the image is loaded, apply the brightness
            applyBrightness();
        };
    };

    reader.readAsDataURL(file);
}

// Apply brightness adjustment to the uploaded image and default left/right images
function applyBrightness() {
    if (!uploadedImage || !overlayImage) return;

    // Get the brightness value from the slider
    const brightness = brightnessSlider.value;

    // Create a canvas to draw the uploaded image for the front face
    const canvas = document.createElement('canvas');
    canvas.width = uploadedImage.width;
    canvas.height = uploadedImage.height;
    const ctx = canvas.getContext('2d');

    // Draw the uploaded image onto the canvas for the front face
    ctx.drawImage(uploadedImage, 0, 0);
    ctx.filter = `brightness(${brightness}%)`;
    ctx.drawImage(overlayImage, 0, 0, uploadedImage.width, uploadedImage.height);
    document.querySelector('.front').style.backgroundImage = `url(${canvas.toDataURL()})`;

    // Apply brightness to the default left face image
    const leftFace = document.querySelector('.left');
    leftFace.style.filter = `brightness(${brightness}%)`;

    // Apply brightness to the default right face image
    const rightFace = document.querySelector('.right');
    rightFace.style.filter = `brightness(${brightness}%)`;
}


const configurationFileInput = document.getElementById('configurationFileInput');

const frontPyramidFace = document.querySelector('.front');
const leftPyramidFace = document.querySelector('.left');
const rightPyramidFace = document.querySelector('.right');

function savePyramidConfiguration() {
    const pyramidConfig = {
        frontFace: {
            backgroundImage: frontPyramidFace.style.backgroundImage,
            brightness: frontPyramidFace.style.filter
        },
        leftFace: {
            brightness: leftPyramidFace.style.filter
        },
        rightFace: {
            brightness: rightPyramidFace.style.filter
        },
        hand: {
            src : hand.src
        }
    };

    const blob = new Blob([JSON.stringify(pyramidConfig)], { type: 'application/json' });

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'my obama.prism';
    downloadLink.click();
    alert("Saved");
}


function loadPyramidConfiguration() {
    configurationFileInput.click();
}

configurationFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
if (!file.name.endsWith('.prism')) {
    alert('cringe. its not .prism, you boomer.');
    return;
}

 
    const reader = new FileReader();
    reader.onload = (e) => {
        const pyramidConfig = JSON.parse(e.target.result);

        if (pyramidConfig.frontFace) {
            frontPyramidFace.style.backgroundImage = pyramidConfig.frontFace.backgroundImage || '';
            frontPyramidFace.style.filter = pyramidConfig.frontFace.brightness || '';
        }

        if (pyramidConfig.leftFace) {
            leftPyramidFace.style.filter = pyramidConfig.leftFace.brightness || '';
        }

        if (pyramidConfig.rightFace) {
            rightPyramidFace.style.filter = pyramidConfig.rightFace.brightness || '';
        }
        if (pyramidConfig.hand) {
            hand.src = pyramidConfig.hand.src || '';
        }
        alert("Pyramid loaded!");
        configurationFileInput.value = '';
    };

    reader.readAsText(file);
});

changeTile(changeTile1Button, 'tile001.png');
changeTile(changeTile2Button, 'tile002.png');
changeTile(changeTile3Button, 'tile003.png');
changeTile(changeTile4Button, 'Angy.png');


