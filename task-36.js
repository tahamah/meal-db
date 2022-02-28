//Task -01
const product = {
    name: 'phone',
    isExpensive: true,
    price: 10000,
    brand: {
        samsung: 'Korea',
        vivo: 'china',
        walton: 'bd'
    },
    color: ['white', 'black', 'red'],
    discount: function dis() {
        const disc = this.price * .2
        return (disc)
    }
}
const discount = product.discount()
    // console.log(discount)

//Task-02
const tem = `
    Nas:${product.brand.samsung}
    Array:${product.color[1]}
    discount:${product.discount()}
`
    // const entries = Object.entries(product.brand)
    // console.log(tem)

//Task-03
//a:
const noPara = () => 89
    // console.log(noPara())

//b:
const single = num => num / 7
    // console.log(parseFloat(single(200).toFixed(2)))

//c:
const double = (num1, num2) => (num1 + num2) / 2
    // console.log(double(10, 20));

//d:
const multi = (num1, num2) => {
        return (num1 + 7) + (num2 + 7)
    }
    // console.log(multi(13, 3));

//Task-04
const numbers = [14, 21, 28, 35, 42]
const result = numbers.map(number => number / 7)
    // console.log(result)

//Task-05
// const numbers = [14, 21, 28, 35, 42]
// a:
const biggerThen15 = numbers.filter(number => number > 15)
    // console.log(biggerThen15);

// b:
const map = numbers.map(number => number)
    // console.log(map);

//c:
const find = numbers.find(number => number > 15)
    // console.log(find)

//d:
// numbers.forEach(number => console.log(number))


//Task-06
//a:
const { name, id, price } = { name: 'Pen', id: 2565, price: 500 }
// console.log(name, id, price)
//b:
const [first, second] = [14, 21, 28, 35, 42, 55, 86, 15, 46, 25]
// console.log(second);


// Task-07

//load photo
const loadPhoto = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhoto(data.slice(0, 10)))
}

//display photo
const displayPhoto = photos => {
    const container = document.getElementById('container')
    container.textContent = ''
    photos.forEach(photo => {
        console.log(photo);
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="col" onclick="photoDetails(${photo.id})">
                <div class="card h-100">
                    <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4>${photo.id}</h4>
                        <h5 class="card-title">${photo.title.slice(0,30)}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        `
        container.appendChild(div)
    })
}

const photoDetails = id => {
    console.log(id);
    // const url = ``
}