const quotes = [
    {
        quote: "Stay hungry, Stay foolish",
        author: "Steve Jobs"
    },
    {
        quote: "A",
        author: "a"
    },
    {
        quote: "B",
        author: "b"
    },
    {
        quote: "C",
        author: "c"
    },
    {
        quote: "D",
        author: "d"
    },
    {
        quote: "E",
        author: "e"
    },
    {
        quote: "F",
        author: "f"
    },
    {
        quote: "G",
        author: "g"
    },
    {
        quote: "H",
        author: "h"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const maxQuoteSize = quotes.length;
const todaysQuote = quotes[Math.floor(Math.random() * maxQuoteSize)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
