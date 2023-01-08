const quotes = [
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma-which is living with the results of other people's thinking",
        author: "Steve Jobs"
    },
    {
        quote: "The way to get started is to quit talking and begin doing",
        author: "Walt Disney"
    },
    {
        quote: "Tell me and I forget. Teach me and I remeber. Involve me and I learn",
        author: "Benjamin Franklin"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light",
        author: "Aristotle"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years",
        author: "Abraham Lincoln"
    },
    {
        quote: "Life is what happens when you're busy making other plans",
        author: "John Lennon"
    },
    {
        quote: "Love the life you live. Live the life you love",
        author: "Bob Marley"
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have",
        author: "Thomas Jefferson"
    },
    {
        quote: "If you really look closely, most overnight successes took a long time",
        author: "Steve Jobs"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const maxQuoteSize = quotes.length;
const todaysQuote = quotes[Math.floor(Math.random() * maxQuoteSize)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
