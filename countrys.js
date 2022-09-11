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
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        h3.innerText = `${country.name.official}`;
        p.innerText = `${country.capital}`;
        div.appendChild(h3);
        div.appendChild(p);
        countrysContainer.appendChild(div);
        div.classList.add('country')
    });
}