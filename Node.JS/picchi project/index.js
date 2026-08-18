//dependencies
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quots');

// app object - Module scaffolding
const app = {};

// configuration 
app.config = {
    timeBetweenQuotes: 1000,
};

// function that prints a random quotes
app.printAQuote = function printAQuote() {
    // get all the quotes
    const allQuotes = quotesLibrary.allQuotes();

    // get the length of the quotes
    const numberOfQuotes = allQuotes.length;

    //pick a random number between 1 and the number of quotes 
    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

    // get the quotes at the position in the array 
    const selectedQuote =  allQuotes[randomNumber - 1];

    // print the quote to the console 
    console.log(selectedQuote);
};

 // function that loops indefinitely, calling the printAQuote function as it goes
    app.indefiniteLoop = function indefiniteLoop() {
        // create the interval using the config variable defined above
        setInterval(app.printAQuote, app.config.timeBetweenQuotes)
    };
    // invoke the loop 
    app.indefiniteLoop();