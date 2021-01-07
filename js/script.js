//chiedo all'utente di inserire una parola.
var userWord = prompt('inserisci una parola');

function reverseString(word) {
  //prima divido la parola in un array di lettere tramite lo split
  //poi possiziono l'ordine dell'array al contrario tramite il reverse
  // in fine riunisco tutte le lettere in unico oggetto tramite il join
  return word.split('').reverse().join('');
}

//verifico la parola per capire se è palindroma
if (reverseString(userWord) === userWord) {
  alert('la parola che hai digitato è Palindroma');
} else {
  alert('la parola che hai digitato non è Palindroma');
}


//ESERCIZIO 2
//utilizzare un flag per controllare se corrisponde alla scelta dell'utente
//creo gl'input che utilizzerò nell'esercizio

var oddOrEven = prompt ('pari o dispari?');
console.log('la scelta dell\'utente è stata ' + oddOrEven);
var userNum = parseInt(prompt('scegli un numero da 1 a 5'));
console.log('il numnero scelto dall\'utente è stato' + userNum;


// creo funzione per generare un numero random
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

// creo la variabile con il numero del computer
var computerNum = randomNumber(1, 5);
console.log('il numero del computer è ' + computerNum);

var total = userNum + computerNum
console.log(total);
