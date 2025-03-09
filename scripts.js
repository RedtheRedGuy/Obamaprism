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

const lolcatDictionary = {
    "hello": "oh hai",
    "hi": "hai",
    "welcome": "welcom",
    "goodbye": "gudbai",
    "bye": "bai",
    "yes": "yus",
    "no": "nu",
    "please": "plz",
    "thanks": "thx",
    "thank you": "thx u",
    "friend": "fren",
    "friends": "frens",
    "love": "luv",
    "cute": "adorbs",
    "happy": "happeh",
    "sad": "sadz",
    "angry": "angreh",
    "hungry": "hungreh",
    "tired": "sleepiez",
    "sleep": "nap tiem",
    "food": "nomz",
    "eat": "eetz",
    "drinks": "sipz",
    "cat": "kitteh",
    "dog": "doggo",
    "fish": "fishie",
    "bird": "birb",
    "mouse": "mousie",
    "bunny": "bunbun",
    "house": "hoem",
    "home": "hoem",
    "computer": "compooter",
    "internet": "intarwebz",
    "website": "webzite",
    "click": "clik",
    "button": "buttunz",
    "the": "teh",
    "this": "dis",
    "that": "dat",
    "is": "iz",
    "are": "r",
    "was": "wuz",
    "what": "wut",
    "why": "y",
    "because": "cuz",
    "how": "how iz",
    "where": "wherz",
    "who": "hoo",
    "when": "wen",
    "me": "meh",
    "you": "u",
    "your": "ur",
    "my": "mah",
    "mine": "mahn",
    "our": "oar",
    "we": "wez",
    "they": "dey",
    "them": "dem",
    "fun": "fun tiemz",
    "cool": "awsum",
    "awesome": "epik",
    "great": "gud",
    "bad": "not gud",
    "work": "werk",
    "play": "playz",
    "run": "zoom",
    "walk": "waddle",
    "jump": "boing",
    "dance": "wiggle",
    "sit": "sit teh floof",
    "win": "winnar",
    "lose": "losar",
    "best": "besht",
    "better": "moar bettr",
    "big": "BIGG",
    "small": "smol",
    "fast": "zoom zoom",
    "slow": "snailz",
    "stop": "stahp",
    "go": "gogogogogogogo",
    "look": "peek",
    "watch": "starez",
    "listen": "heerz",
    "speak": "meowz",
    "write": "scribblz",
    "read": "reedz",
    "help": "halp",
    "danger": "oh noes",
    "warning": "bewarez",
    "error": "oh snap",
    "ok": "k",
    "cool": "chillz",
    "boss": "big cheez",
    "game": "play tiem",
    "score": "pointz",
    "level": "levulz",
    "loading": "loding...",
    "wait": "waiiiiit",
    "error": "uh oh",
    "fire": "burnz",
    "water": "splish splash",
    "air": "breezy",
    "earth": "dirteh",
    "money": "munnies",
    "rich": "moar munnies",
    "poor": "no munnies",
    "car": "vroom vroom",
    "train": "choo choo",
    "plane": "zoom zoom fly",
    "boat": "floaty",
    "school": "skool",
    "teacher": "teechur",
    "student": "lern kid",
    "test": "brain hert",
    "homework": "no fun",
    "book": "storiez",
    "movie": "flik",
    "music": "toonz",
    "song": "melodee",
    "dance": "wigglez",
    "party": "pawtee",
    "shopping": "buyz stuf",
    "store": "shopz",
    "fast food": "fudz now",
    "restaurant": "fudz place",
    "hospital": "hooman fix place",
    "doctor": "hooman fixer",
    "police": "lawz boiz",
    "firefighter": "fire fix boiz",
    "city": "big town",
    "village": "smol town",
    "mountain": "big hill",
    "beach": "sand n watr",
    "forest": "treez land",
    "desert": "hot sand land",
    "island": "water land",
    "sun": "big light ball",
    "moon": "night light ball",
    "star": "shiny dot",
    "cloud": "floof in sky",
    "rain": "sky teerz",
    "snow": "cold floof",
    "wind": "whoosh",
    "storm": "angry sky",
    "computer": "compooter",
    "mouse": "clik clik thing",
    "keyboard": "typey type",
    "phone": "ring ring box",
    "message": "txtz",
    "call": "ringy ding",
    "email": "e-ltr",
    "camera": "piccy taker",
    "selfie": "me piccy",
    "battery": "power box",
    "light": "brite",
    "dark": "spooky",
    "hot": "burn burn",
    "cold": "brrrrr",
    "happy": "happeh",
    "sad": "sadz",
    "excited": "zoomeh",
    "bored": "no fun",
    "scared": "spookd",
    "angry": "angreh",
    "surprised": "OMG",
    "funny": "LOL",
    "joke": "gigglez",
    "meme": "internetz funny",
    "robot": "beep boop",
    "alien": "space hooman",
    "pirate": "yarrr",
    "ninja": "sneek sneek",
    "wizard": "magic boi",
    "zombie": "brain nomz",
    "ghost": "boooooo",
    "time": "tick tock",
    "morning": "sun up",
    "night": "dark tiem",
    "yesterday": "b4 now",
    "tomorrow": "l8r",
    "now": "rite nao",
    "forever": "4evah",
    "soon": "sooooon",
    "later": "l8r",
    "yawn": "sleepiez",
};

function translateToLolcat(text) {
    return text.split(" ").map(word => lolcatDictionary[word.toLowerCase()] || word).join(" ");
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = translateToLolcat(document.body.innerHTML);
});

