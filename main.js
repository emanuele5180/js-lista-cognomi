//Per l'esercizio di oggi, chiedete all'utente un cognome e aggiungetelo alla lista, poi ordinate, utilizzate una funzionalità di js per l'ordinamento.
//Dopo aver ordinato, l'esercizio chiede l'indice del nuovo elemento inserito, per farlo utilizzate il metodo della ricerca dell'ultima esercitazione.


var cognome = prompt( "aggiungi il cognome");

var lista = ["Pippo", "Topolino", "Paperino","Gastone"];

lista.push(cognome);
console.log(lista);

lista.sort()

console.log(lista);
