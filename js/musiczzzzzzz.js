const defaultSongIndex = 7;
let defaultSongCurrentTime = 0;

function removeOverlay() {
    const overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.style.display = 'none';
        playDefaultSong();
    }
}

function playDefaultSong() {
    changeSong(defaultSongIndex, defaultSongCurrentTime);
}

function changeSong(index, currentTime = 0) {
    
    if (currentSongIndex === defaultSongIndex) {
        defaultSongCurrentTime = audio.currentTime;
    }

    currentSongIndex = index;
    audio.src = playlist[currentSongIndex].src;
    audio.currentTime = currentTime;
    audio.play();
    
    const songTitleElement = document.getElementById('songTitle');
    if (songTitleElement) {
        songTitleElement.innerText = `${playlist[currentSongIndex].title}`;
    }
}

let currentSongIndex = 0;
const playlist = [
    { title: 'Careless Whisper - George Michael [REDACTED]', src: 'assets/song1.mp3' },
    { title: 'A little Death - The Neighbourhood [ROMANCE]', src: 'assets/song2.mp3' },
    { title: 'Seven Seven - Slattcrank [HARDLINE]', src: 'assets/song3.mp3' },
    { title: 'Wickr Man - Bladee [VIS]', src: 'assets/song4.mp3' },
    { title: 'IHY - ZillaKami [LTE]', src: 'assets/song5.mp3' },
    { title: 'Catch me - Apatch [OZ]', src: 'assets/song6.mp3' },
    { title: 'Tactical nuke - Zillakami [FAIL]', src: 'assets/song7.mp3' },
    { title: '', src: 'assets/main.mp3' }
];

const audio = new Audio(playlist[currentSongIndex].src);
audio.loop = false;

document.addEventListener("DOMContentLoaded", () => {
    const songTitleElement = document.getElementById('songTitle');
    if (songTitleElement) {
        songTitleElement.innerText = 'None';
    }
});

function playRandomSong() {
    const randomIndex = getRandomSongIndex();
    changeSong(randomIndex);
}

function getRandomSongIndex() {
    return Math.floor(Math.random() * playlist.length);
}

playlist.forEach((song) => {
    const audioPreload = new Audio(song.src);
    audioPreload.load();
});
