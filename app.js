document.getElementById('getText').addEventListener('click', getText);

function getText() {
fetch('sample.txt')
.then((res)=>res.text())
.then((data)=> {
    document.getElementById('output').innerHTML = data;
})


}

document.getElementById('getJson').addEventListener('click', getJson)

function getJson(){
    fetch('users.json')
    .then((res)=>res.json())
    .then((data)=> {
        let output = '<h2>Users</h2>';

        data.forEach(function(user){
            output += `
            <ul>
            <li>ID: ${user.id}</li>
            <li>name: ${user.name}</li>
            <li>email: ${user.email}</li>
            </ul>
            `;
        })
        document.getElementById('output').innerHTML = output
    })
}


document.getElementById('getPosts').addEventListener('click', getPosts)

function getPosts(){
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((data)=> {
        let output = '<h2>Posts</h2>';

        data.forEach(function(post){
            output += `
            <div>
            <h4>${post.title}</h4>
            <p>${post.body}</p>
            </div>
            `;
        })
        document.getElementById('output').innerHTML = output
    })
}

document.getElementById('addPost').addEventListener('click', addPost)
function addPost (e) {
    e.preventDefault()

    let title = document.getElementById('title').value
    let body = document.getElementById('body').value

    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*', 
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title: title, body:body})
    })
    .then((res) => res.json())
    .then(function (data) {
        console.log(data)
        document.getElementById('post-output').innerHTML = '<p class="output">Something has been logged in the console</p>'
        })

}