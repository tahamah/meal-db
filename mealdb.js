const searchFood = async() => {
    const searchInput = document.getElementById('search-input').value

    //clear data
    document.getElementById('search-input').value = ''

    //error
    if (searchInput == '') {
        alert('Please Wright Something')
        return
    }
    //----------------------- async & await ---------------//
    //load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    try {
        const res = await fetch(url)
        const data = await res.json()
        displaySearchResult(data.meals)
    } catch {
        alert('Something Wrong Please Try agin later')
        return
    }

    /*  fetch(url)
         .then(res => res.json())
         .then(data => displaySearchResult(data.meals)) */

}

const displaySearchResult = meals => {
    //clear
    const searchContainer = document.getElementById('search-result')
    searchContainer.textContent = ''
    const singleMealContainer = document.getElementById('single-mile-container')
    singleMealContainer.textContent = ''

    //error no result found
    if (meals == null) {
        alert("No Result Found")
        return
    }

    meals.forEach(meal => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
            <img src=" ${meal.strMealThumb} " class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> 
                    ${meal.strMeal} 
                </h5>
                <p class="card-text">
                    ${meal.strInstructions.slice(0,250)}
                </p>
            </div>
        </div>
        `
        searchContainer.appendChild(div)
    })
}

const loadMealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealData(data.meals[0]))
        .catch(error => displayError(error))
}

//error
const displayError = error => {
    alert('Something Wrong Please Try agin later')
    return
}

const displayMealData = meal => {
    const singleMealContainer = document.getElementById('single-mile-container')
    singleMealContainer.textContent = ''
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
            <img width='200px' src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
        `
    singleMealContainer.appendChild(div)
}