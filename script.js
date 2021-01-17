// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

// --- SVOLGIMENTO --- //
    // CREAZIONE NUMERI CASUALI (CON RELATIVA FUNZIONE E CICLO WHILE)
    // FACCIO VEDERE A SCHERMO I NUMERI CASUALI
    // NEL FRATTEMPO SUL CODICE HTML HO CREATO DEGLI H1 PER CONTENERE I NUMERI RANDOM,
      // I NUMERI CHE L'UTENTE SCRIVERà, E INFINE I NUMERI INDOVINATI
    // FAR PARTIRE UN COUNTDOWN DI 30 SECONDI.. E DOPO:
    // CHIEDO ALL'UTENTE DI REINSERIRE I NUMERI RANDOM (SE LI RICORDA) X 5 VOLTE
    // VISUALIZZO A SCHERMO I NUMERI DELL'UTENTE E I NUMERI INDOVINATI



// funzione per generare un numero casuale tra min e max (in questo caso 1 e 100)
function generaRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// array dei 5 numeri randomici
var numeriRandom = [];

// cicliamo con il while per essere certi di avere un numero diverso dall'altro
while (numeriRandom.length < 5) {
    // genero un numero casuale
    var numero = generaRandom(1, 100);
    if(!numeriRandom.includes(numero)) {
        // se il numero non è stato gia usato, allora si può inserire
        numeriRandom.push(numero);
    }
}

// visualizzo i 5 numeri casuali in pagina
var numeriStringa = numeriRandom.join(' ');
$('#numeri').text(numeriStringa);
console.log(numeriRandom);

// inizio countdown di 30 sec, al quale alla fine nascondiamo i numeri random
setTimeout(function() {
    $('#numeri').text(''); // '' per togliere i numeri alla fine del CD
}, 30000);


// dopo aver nascosto i numeri, chiedo all'utente di inserire 5 numeri
// e controllo quali indovina tra quelli generati precedentemente
setTimeout(function() {
    // creo un array per ricordarmi tutti i numeri che ha inserito l'utente
    var numeriInseriti = [];
    // creo un contatore per il punteggio
    var punteggio = 0;
    // creo un array per ricordarmi i numeri indovinati
    var numeriIndovinati = [];

    // ciclo do-while per chiedere i numeri all'utente
    // in questo modo possiamo controllare che ogni volta siano numeri diversi
    // il ciclo ripete finché l'utente non ha inserito 5 numeri (tutti diversi)
    do {
        var numeroUtente = parseInt(prompt('inserisci un numero visualizzato prima'));
        console.log(numeroUtente);

        // controllo se l'utente ha inserito un numero nuovo
        if(!numeriInseriti.includes(numeroUtente))  {
            // l'utente ha inserito un numero diverso dai precedenti
            // inserisco il numero tra i numeri inseriti
            numeriInseriti.push(numeroUtente);

            // controllo se il numero inserito corrisponde ad uno dei numeri generati precedentemente
            if(numeriRandom.includes(numeroUtente)) {
                // l'utente ha indovinato un numero
                // incremento di uno il punteggio
                punteggio++;
                // inserisco il numero tra i numeri indovinati
                numeriIndovinati.push(numeroUtente);
            }
        }
    } while (numeriInseriti.length < 5);

    // visualizzo nuovamente i numeri casuali
    var numeriStringa = numeriRandom.join(' ');
    $('#numeri').text(numeriStringa);

    // visualizzo i numeri inseriri dall'utente
    var numeriUtenteStringa = numeriInseriti.join(' ');
    $('#numeriUtente').text(numeriUtenteStringa);

    // visualizzo i numeri indovinati
    var numeriIndovinatiStringa = numeriIndovinati.join(' ');
    $('#numeriIndovinati').text(numeriIndovinatiStringa);

    console.log(numeriInseriti);
    console.log(numeriIndovinati);
    console.log(punteggio);
    alert('hai totalizzato ' + punteggio + ' punti');

}, 31000);
