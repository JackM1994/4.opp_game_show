/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
        
        this.missed = 0;
        this.activePhrase = null;
        //create an array of phrases
        
        this.phrases=[
        new Phrase("Here come the meat sweats"),
        new Phrase('But they dont know that we know they know'),
        new Phrase('I just bamboozled chandler'),
        new Phrase('pivot'),
        new Phrase('could i be wearing any more clothes'),
        new Phrase('unagi'),
        new Phrase('paper snow a ghost'),
        new Phrase('fifteen yemen road yemen'),
        new Phrase('come on ross you are a paleontologist dig a little deeper'),
        new Phrase('joey doesnt share food'),
        new Phrase('i got off the pane'),
        new Phrase('yeah its like a cows opinion it just doesnt matter its moo'),
        new Phrase('hi i am chandler i make jokes when im uncomfortable'),
        new Phrase('im fiine'),
        new Phrase('how you doin'),
        new Phrase('we were on a break'),
        new Phrase('he is her lobster'),
        new Phrase('guys can fake it unbelievable the one thing thats ours'),
        new Phrase('dear God this parachute is a knapsack'),
        new Phrase('something is wrong with the left phalange'),
        new Phrase('yes it was so sad when the guy stopped drawing the deer'),
        new Phrase('so how many cameras are actually on you'),
        new Phrase('smelly cat smelly cat what are they feeding you'),
        new Phrase('hey buddy this is a family place put the mouse back in the house'),
        new Phrase('if its a girl phoebe and if its a boy pheebo'),


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
    if(this.missed === 3){
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

    
     
 