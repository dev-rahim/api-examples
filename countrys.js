const loadCountrys = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => getcountrys(data));
}
loadCountrys();
const getcountrys = data => {
    const countrysContainer = document.getElementById('countrys');
    data.forEach(country => {
        const div = document.createElement('div');
        div.innerHTML = `
    <h3>${country.name.official}</h3>
    <p>${country.capital}</p>
    <button onclick="getCountryByName('${country.name.common}')">More Details</button>
        `;
        countrysContainer.appendChild(div);
        div.classList.add('country')
    });
}

const getCountryByName = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showCountryDetails(data))

}
const showCountryDetails = (data) => {
    const countryDetails = document.getElementById('countryDetails');
    countryDetails.innerHTML = `
    <h1>Country Details</h1>
    <h3>Name:${data[0].name.official}</h3>
    <img style="text-align:center" width="150px" src="${data[0].flags.png}" alt="">
    <p>Population:${data[0].population}</p>
    <p>Area:${data[0].area}</p>
    `;
    
}