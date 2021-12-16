const wordE1 = document.getElementById('word');
const wrongLettersE1 = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');

const figureParts = document.querySelectorAll('figure-part');

const words = ['coding', 'javascript', 'application', 'programming', 'react'];

let selectedWord = words[Math.floor.floor(math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];

// show hidden word
function displayWord() {
    wordE1.innerHTML = `
    ${selectedWord
    .split('')
    .map(
        letter => `
        <span class ="letter`>
        ${correctLetters.includes(letter) ? letter : ''}
        </span>
        `
        
    )
    .join('')}

}`

const innerWord = wordE1.innerText.replace(/[ \n]/g, '');

if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You Won!';
    finalMessageRevealWord.innerText = '';
    popup.style.disply = 'flex';

    playable = false;
}
    }

    // Update the wrong letters
    function updateWrongLettersE1() {
        // display wrong letters
        wrongLettersE1.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    // display parts
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if(index < errors) {
            part.style.display = 'block';
    
        } else {
            part.style.display = 'none';
        }
    });

    // check if lost
    if(wrongLetters.length === figureParts.length) {
        finalMessage.innerText = 'Sorry you have losted';
        finalMessageRevealWord.innerText = `...the word was: ${selectedWord}`;
        popup.style.display = 'flex';

        playable = false;
    }
}

// Show notification
function showNotification() {
    notification.classList.remove('show');

}, 2000);
}

// keydown letter press
window.addEventListener('keydown', e => {
    if (playable) {
        if (e.keycode >= 65 && e.keycode <=90) {
            const letter = e.key.toLowerCase();

            if (seletedWord.includes(letter)) {
                if (!correctLetters.includes(letter)) {
                    correctLetters.push(letter);

                    displayWord();
                } else {
                    showNotification();
                }
                } else {
                    if(!wrongLetters.includes(letter)) {
                        wrongLetters.push(letter);

                        updateWrongLettersE1();
                    } else {
                        showNotification();
                }
            }
        }
    }
});


// Restart game and play again
