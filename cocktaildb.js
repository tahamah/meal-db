//error
const error = status => {
    document.getElementById('not-found').style.display = status
}

//spinner
const spinner = status => {
    document.getElementById('loading-spinner').style.display = status
}

//clear text content
const clearTextContent = id => {
    document.getElementById(id).textContent = ''
}

//clear input value
const clearInputValue = id => {
    document.getElementById(id).value = ''
}

//load data
const lodeData = () => {
    document.getElementById('main').style.display = 'block'
    spinner('block')
    const inputValue = document.getElementById('inputField').value
    if (inputValue === '') {
        clearTextContent('container')
        clearTextContent('single-drink')
        clearInputValue('inputField')
        error('block')
        spinner('none')
    } else {
        clearTextContent('single-drink')
        error('none')
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayData(data.drinks))
        clearInputValue('inputField')
    }
}

//display Data
const displayData = cocktails => {
    //error
    if (cocktails === null) {
        clearTextContent('container')
        clearTextContent('single-drink')
        error('block')
        spinner('none')
    } else {
        //main
        error('none')
        document.getElementById('header').style.marginTop = '0px'
        const container = document.getElementById('container')
        clearTextContent('container')
        cocktails.forEach(cocktail => {
            const div = document.createElement('div')
            div.className = 'col'
            div.innerHTML = `
            <div class="card h-100">
                <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${cocktail.strDrink}</h5>
                    <p class="card-text">${cocktail.strInstructions.slice(0,250)}</p>
                </div>
                <div onclick="lodeSingleDrink(${cocktail.idDrink})" class="card-footer bg-primary">
                    <h6 style="cursor:pointer" class="text-white text-center ">See Details</h6>
                </div>
            </div>
        `
            container.appendChild(div)
        })
        spinner('none')
    }

}

// lode Single Drink
const lodeSingleDrink = id => {
    clearTextContent('single-drink')
    spinner('block')
    document.getElementById('single-drink').style.display = 'block'
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySingleDrink(data.drinks[0]))

}

// display Single Drink
const displaySingleDrink = drink => {
    const singleDrinkContainer = document.getElementById('single-drink')
    const div = document.createElement('div')
    clearTextContent('single-drink')
    div.innerHTML = `
                <div class="row g-0">
                <div class="col-md-5">
                <img src="${drink.strDrinkThumb}" class="img-fluid rounded-start my-auto p-3" alt="...">
                </div>
                <div class="col-md-7 my-auto">
                <div class="card-body">
                    <h5 class="card-title">${drink.strDrink}</h5>
                    <p class="card-text">${drink.strInstructions.slice(0,300)}</p>
                    <a  href=" ${drink.strVideo ? drink.strVideo:''} "class=" btn btn-primary">See Video</a>
                </div>
                </div>
            </div>
        `
    singleDrinkContainer.appendChild(div)
    spinner('none')
    console.log(drink);
}