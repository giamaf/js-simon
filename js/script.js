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
const countdownElement = document.getElementById('countdown');
const groupNumbersSection = document.querySelector('.group-numbers');
const title = document.getElementById('title');
const numberList = document.querySelector('.number-list');
const formNumbers = document.querySelector('.numbers-form');
const inputs = document.querySelectorAll('input');
const message = document.getElementById('message');

//? --------------------------------------------------------------------------------------------
//? VARIABILI
//? --------------------------------------------------------------------------------------------

// Quantità di numeri da randomizzare
const numbers = 5;

// Variabile tempo
let count = 5;
countdownElement.innerText = count;

// Array di numeri inseriti dall'utente
const userArrayNumbers = [];

//! --------------------------------------------------------------------------------------------
//! FUNZIONI
//! --------------------------------------------------------------------------------------------

// Funzione per creare 1 array con 5 diversi numeri casuali
const getArrayRandomNumber = (min, max) => {
    const arrayRandomNumbers = [];
    while (arrayRandomNumbers.length < numbers) {
        const randomNumber = Math.floor(Math.random() * max) + min;
        if (!arrayRandomNumbers.includes(randomNumber)) {
            arrayRandomNumbers.push(randomNumber);
        }
    }
    return arrayRandomNumbers;
}

const arrayNumbers = getArrayRandomNumber(1, 10);
console.log('Numeri da stampare: ', arrayNumbers);

//? --------------------------------------------------------------------------------------------
//? SVOLGIMENTO
//? --------------------------------------------------------------------------------------------

//! Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Imposto un countdown in pagina per la visualizzazione dei numeri
const countdown = setInterval(function () {

    // Stampo il countdown nel DOM
    countdownElement.innerText = --count;

    // Fermo il countdown
    if (count === 0) {
        clearInterval(countdown);

        // Rimuovo i numeri dal DOM
        groupNumbersSection.remove();

        // Inserisco il form per l'inserimento dei numeri
        formNumbers.classList.remove('d-none');
    }

}, 1000);


// Estraggo un numero dall'array e lo stampo
for (let i = 0; i < numbers; i++) {

    // Prendo il primo numero dell'array da stampare
    const numberToPrint = arrayNumbers[i];
    console.log('Numero da stampare: ', numberToPrint)

    // Creo l'elemento per il DOM
    const numberElement = document.createElement('li');

    // Inserisco i numeri nell'elemento
    numberElement.innerText = numberToPrint;

    // Stampo in pagina l'elemento
    numberList.appendChild(numberElement);

}

// Al click sul tasto "Conferma"
formNumbers.addEventListener('submit', function (e) {

    //! Blocco il comportamento di default
    e.preventDefault();

    // Leggo il valore inserito dall'utente
    for (let i = 0; i < inputs.length; i++) {
        const value = parseInt(inputs[i].value);

        if (!isNaN(value) && value >= 1 && value <= 100 && !userArrayNumbers.includes(value)) {
            userArrayNumbers.push(value);
        }
    }

    //! Validazione per dati errati o ripetuti
    if (userArrayNumbers.length !== numbers) {
        message.innerText = 'Dati non validi!';
    }

    //! Validazione per dati parzialmente corretti
    const correctNumbers = [];

    for (let i = 0; i < userArrayNumbers.length; i++) {
        if (arrayNumbers.includes(userArrayNumbers[i])) {
            correctNumbers.push(userArrayNumbers[i]);
        }
    }

    if (correctNumbers.length === numbers) {
        message.innerText = `Hai indovinato ${correctNumbers.length} numeri! ${correctNumbers}`;
    };

    console.log('Array Originale: ', arrayNumbers);
    console.log('Utente: ', userArrayNumbers);
    console.log('Corrette: ', correctNumbers);
})