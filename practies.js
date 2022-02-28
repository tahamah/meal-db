// container 
const container = document.getElementById('container')

// remove function  
const remove = () => {
        container.textContent = ''
    }
    // comment data lode 
const lodeComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then(res => res.json())
        .then(data => showData(data.slice(0, 20)))
}

// Show comments in IU
function showData(datas) {
    datas.forEach(data => {
        // console.log(data);
        const div = document.createElement('div')
        console.log(data.id);
        div.innerHTML = `
            <h1> Id: ${data.id}</h1>
            <h3> Name:${data.name}</h3>
            <p> Email:${data.email}</p>
            <p> Body:${data.body}</p>
            <button onclick="lodeCommentDetail(${data.postId})"> Details </button> 
        `
        container.appendChild(div)
    })
}

// comment data load
const lodeCommentDetail = id => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCommentDetails(data))
}



// Show comment details
const displayCommentDetails = (datas) => {
    const singleComment = document.getElementById('single-comment')
    const div = document.createElement('div')
    datas.forEach(data => {
        console.log(data);
        div.innerHTML = `
        <h1> Id: ${data.id}</h1>
        <h3> Name:${data.name}</h3>
        <p> Email:${data.email}</p>
        <p> Body:${data.body}</p>
    `
    })

    singleComment.appendChild(div)
}