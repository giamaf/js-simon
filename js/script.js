console.log('JS OK');

//! Consegna:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Tutte le validazioni sono da considerarsi bonus.

//! Consigli del giorno:
// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.

//! BONUS:
// Come detto, le validazioni
// Volendo, potreste provare a farlo con degli input che compaiono in pagina dopo che scompaiono i numeri, invece che coi prompt.

//todo --------------------------------------------------------------------------------------------

//? --------------------------------------------------------------------------------------------
//? AZIONI PRELIMINARI
//? --------------------------------------------------------------------------------------------

// Recupero gli elementi dal DOM
const groupNumbersSection = document.querySelector('.group-numbers');
const title = document.getElementById('title');
const numberList = document.querySelector('.number-list');
const formNumbers = document.querySelector('.numbers-form');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const confirmButton = document.getElementById('confirm-button');

//? --------------------------------------------------------------------------------------------
//? VARIABILI
//? --------------------------------------------------------------------------------------------

// Quantità di numeri da randomizzare
const numbers = 5;

// Array di numeri inseriti dall'utente
const userArrayNumber = [];

// Risultato da stampare in pagina
let message = 'Complimenti hai indovinato tutti i numeri!';


