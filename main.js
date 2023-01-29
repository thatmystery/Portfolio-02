document.addEventListener("DOMContentLoaded", function(){

const dynamicContent = document.getElementById("dynamic-text");
const phrases = ["Chemical Engineer.", "Singer.", "Guitarist."];
let letterIndex = 0;
let phraseIndex = 0;

//To print the phrase one by one.
function printLetters(phrase){
    if(letterIndex < phrase.length){
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex++;
        setTimeout(function() {printLetters(phrase)}, 150);
    }
    else if(letterIndex == phrase.length){
        clearLetters();
    }
}

//To clear the letters one by one.
function clearLetters(){
    if(letterIndex > -1){
        let updatePhrase = "";
        for(let index = 0; index<letterIndex; index++){
            updatePhrase += phrases[phraseIndex].charAt(index); 
        }
        dynamicContent.textContent = updatePhrase;
        letterIndex--;
        setTimeout(clearLetters, 75);
    }
    else if(letterIndex == -1){
        phraseIndex = (phraseIndex+1) % phrases.length; //This line will make the phrase run, infinite.
        letterIndex = 0;
        printLetters(phrases[phraseIndex]);
    }
}

printLetters(phrases[phraseIndex]);

})

