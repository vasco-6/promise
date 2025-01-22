// FETCH API requires a discussion of ...
//Callbacks, Promises, Thenables, Asych/Awaits

//PROMISES

// STATE 3: PENDING, FULFILLED, REJECT


const MyNewPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Yes resolved the Promise");
    } else {
        reject("No! rejected the Promise");
    }
});

const MyNextPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("MyNextPromise is resolved");
    }, 3000);
});

MyNextPromise.then(value => {
    console.log(value);
});

MyNewPromise.then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
});
