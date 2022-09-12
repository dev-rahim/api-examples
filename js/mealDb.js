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
    items.forEach(item => {
        console.log(item.strMeal);
    });
}