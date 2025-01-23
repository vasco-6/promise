// FETCH API requires a discussion of ...
//Callbacks, Promises, Thenables, Asych/Awaits

//PROMISES

// STATE 3: PENDING, FULFILLED, REJECT

const users = fetch("http://jsonplaceholder.typicode.com/users");

// Pending
console.log(users);

fetch("http://jsonplaceholder.typicode.com/users")
.then(response =>{
     return response.json();
})
.then(data =>{
    data.forEach(user=>{
    console.log(user);

    })
});
