// let p1 = new Promise((resolve, reject)=>{

//     console.log("Promise created - Status : Pending")

//     setTimeout(()=>{
//         resolve("Done");
//         console.log("Promise resolved - Status : Fulfilled");
//     },2000)

//     console.log("where am i")
// });

// console.log("Before .then()")

// {
//     console.log("Result:")
// }
// p1.then(result => {
//     console.log("Result:", result)
// });

// console.log("After .then()")

let p2 = new Promise((res, rej)=>{
    console.log("Pizza order placed")

    setTimeout(()=>{
        res("pizza is ready")
        console.log("pizza baked (Promise resolved")
    },2000)
})

console.log("Chef starts working")

p2.then(message => console.log("Customer received", message))

console.log("Order confirmed at counter")

//25 , 33 , 37 , 29 , 35