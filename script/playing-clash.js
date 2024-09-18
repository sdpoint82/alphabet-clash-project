// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }

// function handleKeyboardButtonPress(){
//     console.log('press button')
// }

// capture keyboard key
document.addEventListener('keyup', function KeyboardButtonPress(event){
    const playerPress = event.key;
    // console.log(playerPress);

    if(playerPress === 'Escape'){
        gameOver()
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()
    // console.log(playerPress, expectedAlphabet);

    if(playerPress === expectedAlphabet){
        // console.log('You win the point');

        const currentScore = getTextElementById('current-score');

        const updatedScore = currentScore + 1;

        setTextElementById('current-score', updatedScore);

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore)

        // const newScore = currentScore + 1;

        // currentScoreElement.innerText = newScore;

        // console.log('You have passed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame()
    }
    else{
        // console.log('You lost the life')

        const currentLife = getTextElementById('current-life')

        const updatedLife = currentLife - 1;

        setTextElementById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver()
        }
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;

        // currentLifeElement.innerText = newLife;

    }
})



function continueGame(){
    const alphabet = getRandomAlphabet();
    // console.log('Your Random Number', alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    setTextElementById('current-life', 5);
    setTextElementById('current-score', 0);

    continueGame();
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    const lastScore = getTextElementById('current-score')
    console.log(lastScore)
    setTextElementById('last-score', lastScore);

    const currentAlphabetColor = getTextElementValueById('current-alphabet');
    removeBackgroundColorById(currentAlphabetColor);
}