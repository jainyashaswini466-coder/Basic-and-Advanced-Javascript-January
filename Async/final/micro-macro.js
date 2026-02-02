// Microtasks and Macrotasks are two different types of ashynchronous tasks in JS.


//Macro                                             //Micro
// setTimeout,setInterval callbacks                 //Promise callbacks (.then, .catch, .finally)
// I/O operation                                   // aync/await
// UI rendering                                    

//After each macrotask, ALL microtasks are processed before the next macrotask runs.


setTimeout(() => {
    console.log('Macro 1')
    Promise.resolve().then(() => console.log("guess my order"))

}, 0)

Promise.resolve()
    .then(() => console.log('Micro 1'))
    .then(() => console.log('Micro 2'))

setTimeout(() => console.log('Macro 2'), 0);

Promise.resolve().then(() => console.log('Micro 3'))


//