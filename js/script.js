//ESERCIZIO 1

//chiedo all'utente di inserire una parola.
var userWord = prompt('inserisci una parola').toLowerCase();

//creo la funzione per avere la parola al contrario con la quale fare il confronto
function reverseString(word) {
  //prima divido la parola in un array di lettere tramite lo split
  //poi possiziono l'ordine dell'array al contrario tramite il reverse
  // in fine riunisco tutte le lettere in unico oggetto tramite il join
  return word.split('').reverse().join('').toLowerCase();
}

//verifico la parola per capire se è palindroma
if (reverseString(userWord) === userWord) {
  alert('la parola che hai digitato è Palindroma');
} else {
  alert('la parola che hai digitato non è Palindroma');
}


//ESERCIZIO 2

// creo funzione per generare un numero random
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

//creo l'input pari o dispari
var oddOrEven =prompt ('pari o dispari?').toLowerCase();
console.log('la scelta dell\'utente è stata ' + oddOrEven);

// creo l'imput per la scelta del numero dell'utente
var userNum = parseInt(prompt('scegli un numero da 1 a 5'));
console.log('il numero scelto dall\'utente è stato ' + userNum);

//creo il numero del computer
var computerNum = randomNumber(1, 5);
console.log('il numero del computer è ' + computerNum);

//dichiaro variabile per la somma
var somma = 0;


// eseguo un controllo sull'input testuale per assicurarmi che ci sia la parola giusta
if (oddOrEven != 'pari' && oddOrEven != 'dispari') {

  alert ('scrivi o pari o dispari');

// eseguo un controllo sull'input numerico per controllare che il numero inserito sia giusto
} else if (userNum < 1 || userNum > 5) {

  alert ('scrivi un numero compreso tra 1 e 5');

// vado avanti con il resto del codice
}else {

  // eseguo la somma tra il numero del computer e quello dell'utente
  somma = userNum + computerNum
  console.log('la somma totale dei due numeri è ' + somma);

// controllo chi è il vincitore
  if (somma % 2 == 0 && oddOrEven === 'pari') {
    alert('il numero uscito è ' + somma + ' hai vinto');
  } else if (somma % 2 !== 0 && oddOrEven === 'dispari') {
    alert('il numero uscito è ' + somma + ' hai vinto');
  } else {
    alert('il numero uscito è ' + somma + ' hai perso')
  }
}
