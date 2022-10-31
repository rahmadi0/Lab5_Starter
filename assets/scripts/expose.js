// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

    const horn = document.getElementById("horn-select");
    const selectVolume = document.getElementById("volume");
    const buttonPlay = document.querySelector("button");
    const SelectAudio = document.querySelector("audio");
    const audio = document.getElementsByClassName("hidden");
    const img = document.getElementsByTagName("img");


    horn.addEventListener('change', (event) => {

        img[0].setAttribute("src", "assets/images/" + event.target.value + ".svg");
        audio[0].setAttribute("src", "assets/audio/" + event.target.value + ".mp3");
    });


    selectVolume.addEventListener('change', (event) => {
        if (selectVolume.value == 0) {
            img[1].setAttribute("src", "assets/icons/volume-level-0.svg");
            SelectAudio.muted = true;
        } else if (selectVolume.value >= 1 && selectVolume.value < 33) {
            img[1].setAttribute("src", "assets/icons/volume-level-1.svg");
            SelectAudio.muted = false;
            SelectAudio.volume = (selectVolume.value) / 100;
        } else if (selectVolume.value >= 33 && selectVolume.value < 67) {
            img[1].setAttribute("src", "assets/icons/volume-level-2.svg");
            SelectAudio.muted = false;
            SelectAudio.volume = (selectVolume.value) / 100;
        } else if (selectVolume.value >= 33 && selectVolume.value <= 100) {
            img[1].setAttribute("src", "assets/icons/volume-level-3.svg");
            SelectAudio.muted = false;
            SelectAudio.volume = (selectVolume.value) / 100;
        }
    });




    buttonPlay.onclick = () => {
        if (horn.value == "air-horn") {
            SelectAudio.src = "assets/audio/air-horn.mp3";
        } else if (horn.value == "car-horn") {
            SelectAudio.src = "assets/audio/car-horn.mp3";
        } else if (horn.value == "party-horn") {
            SelectAudio.src = "assets/audio/party-horn.mp3";

            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti({
                emojis: ['🦄', '✨', '🌈', '⚡️', '💫'],
            });
            jsConfetti.addConfetti();
        }
        SelectAudio.play();
    }



}