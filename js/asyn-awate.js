const searchFood = () => {
    const inputFild = document.getElementById('input-search');
    const inputText = inputFild.value;
    if (inputText == '') {
        console.log('invalid input');
    }
    else {
        inputFild.value = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => getSearchItems(data));
    }
    // console.log(inputText);

}
const getSearchItems = (data) => {
    const items = data.meals;
    const resultContainer = document.getElementById('searchResult');
    resultContainer.textContent = '';
    items.forEach(item => {
        // console.log(item.strMeal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${item.idMeal})" class="card h-100">
            <img src="${item.strMealThumb}" class="card-img-top" alt="...">

            <div class="card-body">
                <h5 class="card-title">${item.strMeal}</h5>
                <p class="card-text">${item.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        resultContainer.appendChild(div);

    });
}


const loadMealDetail = async (idMeal) => {

    const mealDetailsUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // fetch(mealDetailsUrl)
    //     .then(res => res.json())
    //     .then(data => mealDetails(data.meals[0]))
    const response = await fetch(mealDetailsUrl);
    const data = await response.json();
    mealDetails(data.meals[0])
}

const mealDetails = data => {
    // console.log(data);
    const searchDetails = document.getElementById('meal-details');
    searchDetails.textContent = '';
    searchDetails.innerHTML = `
        <div class="card" >
            <img src="${data.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.strMeal}</h5>
                <p class="card-text">${data.strInstructions.slice(0, 150)}</p>
                <a href="${data.strYoutube}" class="btn btn-primary">Video</a>
            </div>
        </div>
    `;
}