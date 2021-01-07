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
