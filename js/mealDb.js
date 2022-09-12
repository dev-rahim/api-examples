const searchFood = () => {
    const inputFild = document.getElementById('input-search');
    const inputText = inputFild.value;
    // console.log(inputText);
    inputFild.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => getSearchItems(data));
}
const getSearchItems = (data) => {
    const items = data.meals;
    const resultContainer = document.getElementById('searchResult');
    items.forEach(item => {
        console.log(item.strMeal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${item.strMealThumb}" class="card-img-top" alt="...">

            <div class="card-body">
                <h5 class="card-title">${item.strMeal}</h5>
                <p class="card-text">${item.strInstructions.slice(0, 150)}</p>
            </div>
        </div>
        `;
        resultContainer.appendChild(div);
    });
}