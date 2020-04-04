/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
        
        this.missed = 0;
        this.activePhrase = null;
        //create an array of phrases
        
        this.phrases=[
        new Phrase("Get a friend loser"),
        new Phrase('Today smoking is gonna save lives'),
        new Phrase('You cheated on me when I specifically asked you not to'),
        new Phrase('Hi I am date Mike nice to meet you how do you like your eggs in the morning'),
        new Phrase('Im an early bird and im a night owl so im wise and i have worms'),
        new Phrase('Growing up I performed my own circumcision'),
        new Phrase('I mean Im not a slut but who knows'),
        new Phrase('Mistletoe is not an excuse for sexual assault'),
        new Phrase('make friend first make sales second make love third in no particular order'),
        new Phrase('I dont hate it i just dont like it at all and its terrible'),
        new Phrase('tell him to call me asap as possible'),
        new Phrase('Dwight you ignorant slut'),
        new Phrase('I love inside jokes i would love to be part of one someday'),
        new Phrase('Jim told me you could buy gaydar online'),


        ];
        
    }
    //create function to print a random phrase
     getRandomPhrase(){
       const randomPhrase = this.phrases[Math.floor(Math.random()* this.phrases.length)];
        return randomPhrase;
    
    
    }
    //start the game
    startGame(){
         const screenOverlay = document.getElementById('overlay');
         screenOverlay.style.display ='none';
         this.activePhrase = game.getRandomPhrase(this.phrases);
         this.activePhrase.addPhraseToDisplay();
        
    }
    //check for win
    checkForWin(){
        const li = document.querySelectorAll('.letter');
        const liShow = document.querySelectorAll('.show');

        if(li.length === liShow.length){
            return true;
        }
        else{
            return false;
        }
    };
    //remove life if letter doesnt match
    removeLife(){
    const heart = document.querySelectorAll('[src ="images/liveHeart.png"]');
    this.missed +=1;
    for(let i=0; i<heart.length; i++){
        heart[0].setAttribute('src', 'images/lostHeart.png');
    }
    if(this.missed === 5){
        this.gameOver(false);
    }
};
    //Display win or lose message
    gameOver(gameWon){
    const startUp = document.querySelector('div #overlay');
    const resultScreen = document.querySelector('#overlay h1');
    if(gameWon === true){
        startUp.setAttribute('class', 'win');
        resultScreen.textContent ='You WIN!!!';
        startUp.style.display ='';
    }else if(gameWon === false){
        startUp.setAttribute('class', 'lose');
        resultScreen.textContent = 'Unlucky! Better luck next time!';
        startUp.style.display ='';
        }
    };
    //handle the game events
    handleInteraction(button){
        if(button.disabled === false){
            button.disabled=true;
            const aLetter = this.activePhrase.checkLetter(button.textContent);
            if(!aLetter){
               button.className ='wrong';
               this.removeLife();
            }
            if(aLetter){
            button.className ='chosen';
            this.activePhrase.showMatchedLetter(button.textContent);
            const win = this.checkForWin();
            if(win){
                this.gameOver(true);
            }
            }
        }
    };
  }//end code

    
     
 