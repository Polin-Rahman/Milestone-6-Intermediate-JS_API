// error mgs clear
document.getElementById('error-mgs').style.display = 'none';

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';
    // error mgs clear
    document.getElementById('error-mgs').style.display = 'none';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResults(data.meals))
        .catch(error => displayError(error));
}

// error mgs show
const displayError = error => {
    document.getElementById('error-mgs').style.display = 'block';
}

const displaySearchResults = meals => {
    const searchResult = document.getElementById('search-result');

    //clean search reasult
    //searchResult.innerHTML = '';
    //or use
    searchResult.textContent = '';

    meals.forEach(meal => {
        //console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');

    //clean search reasult
    mealDetails.textContent = '';

    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Watch Recipy</a>
    </div>
    `;
    mealDetails.appendChild(div);
}