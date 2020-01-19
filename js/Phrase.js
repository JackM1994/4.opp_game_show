/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

    constructor(phrase){
        this.phrase = phrase.toLowerCase();
      
    }
    //addPhraseToDisplay()
    addPhraseToDisplay(){
        const phraseDiv = document.querySelector('#phrase');
        const ul = document.querySelector('ul');
        const phraseSplit = this.phrase.split('');

        phraseSplit.forEach(letter => {
            const li = document.createElement('li');
            li.textContent = letter;
            if(! /^[a-z]$/.test(letter)){
                li.className = 'space';
            }
            else{
                li.className =`hide letter ${letter}`;
            }
            ul.appendChild(li);
        });
    }
    checkLetter(letter){
        const phrase = this.phrase;
        if(phrase.includes(letter)){
            return true;
        }
        else{
            return false;
        }
    };

    showMatchedLetter(letter){
        const phrase = document.querySelectorAll('.letter');
        phrase.forEach(char =>{
            if(char.textContent === letter){
                char.classList.add('show');
                char.classList.remove('hide');
            }
        })
    }
    
 
 
}
console.log(phrase);