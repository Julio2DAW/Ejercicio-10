'use strict'

/*Julio Antonio Ramos Gago*/ 

console.log('Cargado JS');

let sentence = prompt("Dime algo bonito");
let characters = sentence.length;
let i;

for(i=0; i<characters; i++){
    if(sentence.charAt(i) == "a" || sentence.charAt(i) == "e" || sentence.charAt(i) == "i" ||
        sentence.charAt(i) == "o" || sentence.charAt(i) == "u"){
        document.write(sentence.charAt(i));
    }
}