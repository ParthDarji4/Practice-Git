// A tiny random quote app that works in a browser.
const quotes = [
	{ text: "Make today count.", author: "Unknown" },
	{ text: "Small steps still move you forward.", author: "Unknown" },
	{ text: "Creativity is intelligence having fun.", author: "Albert Einstein" },
	{ text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
	{ text: "Great things are done by a series of small things brought together.", author: "Vincent van Gogh" }
];

const quoteElement = document.querySelector("#quote");
const authorElement = document.querySelector("#author");
const button = document.querySelector("#new-quote");

function showRandomQuote() {
	const quote = quotes[Math.floor(Math.random() * quotes.length)];
	quoteElement.textContent = `“${quote.text}”`;
	authorElement.textContent = `— ${quote.author}`;
}

button.addEventListener("click", showRandomQuote);
showRandomQuote();
