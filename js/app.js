/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*DOM Variables*/
const startButton = document.querySelector('#overlay button');
const keyboard = document.querySelector('#qwerty');
const keyboardBtns = document.querySelectorAll('#qwerty button');
let currentPhrase = document.querySelectorAll('ul li');
/*Create variable game */
let game ='';
  
/*Event listener to the play game */
startButton.addEventListener('click', (e)=>{
    if(currentPhrase){
        const currentPhraseParent = document.querySelector('#phrase ul');
        currentPhrase = document.querySelectorAll('ul li');
        currentPhrase.forEach(letter =>{
            currentPhraseParent.removeChild(letter);
        });
        keyboardBtns.forEach(button=>{
            button.disabled = false;
            button.className ='key';
        });
        const lives = document.querySelectorAll('.tries img');
        lives.forEach(heart=>{
            heart.setAttribute('src', 'images/liveHeart.png');
        });
    }
    e.preventDefault();
    //set game and start game
    game = new Game();
    game.startGame();
});

//event listener to use keyboard
keyboard.addEventListener('click', (e)=>{
    const pressed = e.target;
    if(pressed.tagName ==='BUTTON'){
        game.handleInteraction(e.target);
    }
});

document.addEventListener('keydown', (e)=>{
    const pressed = e.key;
    keyboardBtns.forEach(button=>{
        if(pressed === button.textContent){
            game.handleInteraction(button);
        }
    });
});

