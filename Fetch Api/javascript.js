// Get
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>response.json())
// .then((json)=>console.log(json))

// Post
fetch("https://jsonplaceholder.typicode.com/users",{
    method: 'post', // ganti method kalau mau put dll
    headers:{
        'Content-Type' : 'application/json'
    },
    body:JSON.stringify({
        name: "AL",
        username: "AL Joestar",
        email: "al@al.com"
    })
})
.then((response)=>response.json())
.then((json)=>console.log(json))
