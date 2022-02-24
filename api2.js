//Module-34/1
const lodeQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = quote => {
    const quoteElement = document.getElementById('quote')
    quoteElement.innerText = `Quote: ${quote.quote} `
}

//Module-34/2

const lodeBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

const displayBuddies = data => {
    const buddies = data.results
    const buddiesElement = document.getElementById('buddies-container')
    console.log(data)
    for (const buddy of buddies) {
        const div = document.createElement('div')
        div.innerHTML = `
        <h2> Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}</h2>
        <p> Email: ${buddy.email} </p>
        <p> Age: ${buddy.dob.age} </p>
        `
        buddiesElement.appendChild(div)
    }
}


//Module-34/3 & 4    [forEach]

const lodeCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesSection = document.getElementById('countries')
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country')
            // console.log(country);
        div.innerHTML = `
            <h2>Country </h2>
            <h2>Name: ${country.name.common} </h2>
            <h2>Official Name: ${country.name.official} </h2>
            <h3>Capital: ${country.capital} </h3>
            <button onclick=" lodeDetails('${country.name.common}') ">Details</button>
        `
        countriesSection.appendChild(div)
    });
}

const lodeDetails = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data))
}
const displayDetails = (details) => {
    console.log(details)
    const countryDetails = document.getElementById('country-details')
    countryDetails.innerHTML = ""
    details.forEach(detail => {
        const div = document.createElement('div')
        div.innerHTML = `
        <h2> Name: ${detail.name.common} </h2>
        <p> Official Name: ${detail.name.official} </p>
        <img height='100px' width='200px' src= "${detail.flags.svg}">
        `
        countryDetails.appendChild(div)
    });
}