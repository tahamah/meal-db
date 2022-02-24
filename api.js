// module - 33/2
/* 
const shop = {
    name: 'Alia Store',
    address: 'Dhaka Demra-1361',
    product: ['Alu','Piyaj','Rusun'],
    owner:{
        name:'Aliya',
        profession:'Doctor'
    },
    isExpensive: false
};
const s = JSON.stringify(shop)
console.log(s)
const converted = JSON.parse(s)
console.log(converted) 
*/


// module - 33/3
/*
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}
*/


// module - 33/4-6

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
        document.getElementById('user-container').innerHTML=""
}
function displayUsers(data) {
    const userSection =document.getElementById('user-container')
     for (const user of data) {
         const div = document.createElement('div')
         div.classList.add('section')
         div.innerHTML=`
         <h3>Name: ${user.name} </h3>
         <p>Email: ${user.email} </p>
         `
         userSection.appendChild(div)
     }
 }


function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
        document.getElementById('user-container').innerHTML= ''
}

function displayPosts(posts) {
    const userSection =document.getElementById('user-container')
    for (const post of posts) {
        const div = document.createElement('div')
        div.classList.add('section')
        div.innerHTML=`
        <h3> ${post.title} </h3>
        <p> ${post.body} </p>
        `
        userSection.appendChild(div)
    }
} 



// module - 33/7
/* 
get     - r
pos     -c
put  
patch   -u
delete  -d
get vs post
crud vs 
*/





