// This function shows and hide the sections
function removeAndAdd(id1, id2) {
    const hide = document.getElementById(id1);
    hide.classList.add('hidden');

    const display = document.getElementById(id2);
    display.classList.remove('hidden');
}

// By using this function game starts
function playNow() {
    removeAndAdd('home', 'kbd');
    alphabet();
    continuePlay()
}

// This function generates random alphabets
function alphabet() {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const alphaStrings = alphabets.split('');

    const randomNum = Math.random() * 25;
    const index = Math.round(randomNum);

    const alpha = alphaStrings[index];

    const screen = document.getElementById('current-alpha');
    screen.innerText = alpha;

    return alpha;
}

// By using this function you can continue playing
function continuePlay() {
    const alphabets = alphabet();
    // By calling this function can change keyboard key background color
    changeKeyboardKeyColor(alphabets);
}

// This function can change the background color by given element id
function changeKeyboardKeyColor(alphabet) {
    const keys = document.getElementById(alphabet);
    keys.style.backgroundColor = 'orange';
}
// This function can change or remove the baackground color of keyborad key 
function changeBackgroundColorToNormal(element) {
    const elementId = document.getElementById(element);
    elementId.style.backgroundColor = 'white';
}

// This is a event handler
document.addEventListener('keyup', matchCharatcter)

// This function checks the ui character and user/player pressed key
function matchCharatcter(e) {
    // Here we extracting the key which pressed by user/player
    const userPressed = e.key;
    // using this condition we can quit the game
    if (userPressed === 'Escape') {
        gameOver()
    }

    // Here we storing the screen ui element id
    const currentAlphabetId = document.getElementById('current-alpha')
    const currentAlphabet = currentAlphabetId.innerText;
    const alphabet = currentAlphabet.toLowerCase();

    // Here we are matching the user pressed and screen ui character
    if (userPressed === alphabet) {
        console.log('you got a point boi');
        changeBackgroundColorToNormal(alphabet)
        continuePlay()

        /**
         * 1.Store the element id in a variable
         * 2.Update the score
         * 3.Show the score
        */

        const point = document.getElementById('score');
        const pointText = point.innerText;
        const newPoint = parseInt(pointText);
        const points = newPoint + 1;

        point.innerText = points;
    } else {
        console.error('Lol, type correctly');

        /**
             * 1.Store the element id in a variable
             * 2.Update the remaining life
             * 3.Show the remaining life
            */

        const life = document.getElementById('life');
        const lifeText = life.innerText;
        const lifeValue = parseInt(lifeText);
        const lifeMinus = lifeValue - 1;

        life.innerText = lifeMinus;

        // Using this condition we can move to the final score section 
        if (lifeValue === 0) {
            changeBackgroundColorToNormal(alphabet)
            gameOver()
        }
    }
}

// using this function we can end the game 
function gameOver() {
    removeAndAdd('kbd', 'score-board');

    // setting the final score
    const finalScore = document.getElementById('score')
    const finalScoreText = finalScore.innerText;
    const finalScoreTextElement = parseFloat(finalScoreText)
    resetValue('final-score', finalScoreTextElement);
}

// This function is assigning the value in ui 
function resetValue(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}

// Using this function can play the game again
function playAgain() {
    removeAndAdd('score-board', 'kbd');
    continuePlay();
    resetValue('score', 0);
    resetValue('life', 5);
}