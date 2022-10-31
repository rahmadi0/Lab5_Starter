// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    // TODO
    const synth = window.speechSynthesis;

    const voiceSelect = document.getElementById("voice-select");
    const inputText = document.getElementById("text-to-speak");
    const button = document.querySelector("button");

    const img = document.querySelector("img");

    let voices = [];

    function populateVoiceList() {
        voices = synth.getVoices();

        for (let i = 0; i < voices.length; i++) {
            const option = document.createElement('option');
            option.textContent = `${voices[i].name} (${voices[i].lang})`;

            if (voices[i].default) {
                option.textContent += ' — DEFAULT';
            }

            option.setAttribute('data-lang', voices[i].lang);
            option.setAttribute('data-name', voices[i].name);
            voiceSelect.appendChild(option);
        }
    }

    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }


    button.addEventListener('click', speak)

    function speak() {
        const utterThis = new SpeechSynthesisUtterance(inputText.value);
        const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name === selectedOption) {
                utterThis.voice = voices[i];
            }
        }

        img.setAttribute("src", "assets/images/smiling-open.png");
        synth.speak(utterThis);
        utterThis.addEventListener('end', function() {
            img.setAttribute("src", "assets/images/smiling.png");
        })

    };
}