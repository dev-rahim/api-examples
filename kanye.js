const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => getQuotes(data))
}

const getQuotes = (quote) => {
    const quotesContainer = document.getElementById('quotes');
    quotesContainer.innerHTML = `
    ${quote.quote};
    `
    console.log(quote.quote);
}