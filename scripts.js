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
        document.querySelector('.pyramid-container').style.animationDuration = `${3 / speed}s`;
    });
    pyramid.style.animationDuration = `${3 / 2}s`;
    changeTile1Button.addEventListener('click', () => { document.querySelector('.front').style.backgroundImage = "url('tile001.png')"; }); 
    changeTile2Button.addEventListener('click', () => { document.querySelector('.front').style.backgroundImage = "url('tile002.png')"; }); 
    changeTile3Button.addEventListener('click', () => { document.querySelector('.front').style.backgroundImage = "url('tile003.png')"; });
    

fullscreenButton.addEventListener('click', () => {
    if (pyramid.requestFullscreen) {
        pyramid.requestFullscreen();
    } else if (pyramid.mozRequestFullScreen) { // Firefox
        pyramid.mozRequestFullScreen();
    } else if (pyramid.webkitRequestFullscreen) { // Chrome, Safari and Opera
        pyramid.webkitRequestFullscreen();
    } else if (pyramid.msRequestFullscreen) { // IE/Edge
        pyramid.msRequestFullscreen();
    }
});



function enterFullscreen() {

if (document.documentElement.requestFullscreen) {

document.documentElement.requestFullscreen();

} else if (document.documentElement.mozRequestFullScreen) { // Firefox

document.documentElement.mozRequestFullScreen();

} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera

document.documentElement.webkitRequestFullscreen();

} else if (document.documentElement.msRequestFullscreen) { // IE/Edge

document.documentElement.msRequestFullscreen();

}

}

// Function to hide all elements except the pyramid container when in fullscreen

function onFullscreenChange() {

if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {

// Entered fullscreen, hide other elements

document.body.style.overflow = 'hidden'; // Ensure no scrollbars

document.body.querySelectorAll(':not(.pyramid-container)').forEach(el => {

el.style.display = 'none'; // Hide other elements

});

} else {


document.body.querySelectorAll('*').forEach(el => {

el.style.display = ''; // Reset display styles

});

}

}




document.addEventListener('fullscreenchange', onFullscreenChange);

document.addEventListener('webkitfullscreenchange', onFullscreenChange); // Safari

document.addEventListener('mozfullscreenchange', onFullscreenChange); // Firefox

document.addEventListener('MSFullscreenChange', onFullscreenChange); // IE/Edge

