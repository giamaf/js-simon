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

// Estraggo un numero dall'array e lo stampo
for (let i = 0; i < numbers; i++) {

    // Prendo il primo numero dell'array da stampare
    const numberToPrint = arrayNumbers.shift(i);
    console.log('Numero da stampare: ', numberToPrint)

    // Creo l'elemento per il DOM
    const numberElement = document.createElement('li');

    // Inserisco i numeri nell'elemento
    numberElement.innerText = numberToPrint;

    // Stampo in pagina l'elemento
    numberList.appendChild(numberElement);

    // Imposto un countdown in pagina per la visualizzazione dei numeri
    setTimeout(function () {

        // Rimuovo i numeri dal DOM
        groupNumbersSection.remove();

        // Inserisco il form per l'inserimento dei numeri
        formNumbers.classList.remove('d-none');

    }, 2000);
}

// --------------------------------------------------
formNumbers.addEventListener('submit', function (e) {

    //! Blocco il comportamento di default
    e.preventDefault();
})

// Al click sul tasto "Conferma"
confirmButton.addEventListener('click', function () {

    // Leggo il valore inserito dall'utente
    const num1Value = parseInt(num1.value);
    const num2Value = parseInt(num2.value);
    const num3Value = parseInt(num3.value);
    const num4Value = parseInt(num4.value);
    const num5Value = parseInt(num5.value);

    // Inserisco i valori dell'utente nell'array 
    if (userArrayNumber.length < numbers) {
        userArrayNumber.push(num1Value, num2Value, num3Value, num4Value, num5Value);
    };

    console.log(userArrayNumber);

    //! Validazione dei valori inseriti
    if (userArrayNumber.includes(NaN)) {
        message = 'Dati mancanti, riprova!';
        alert(message);
    }

})