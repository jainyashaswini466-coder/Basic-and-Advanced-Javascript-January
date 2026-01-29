// Promise - An object representing the eventual completion or failure of 
// an async operation.

//Pending
//Fulfilled
//Rejected


// Pending - (Initial state)
// |
// |-> Fulfilled(Success) ✅
// |-> Rejected (Failure) ❌

prepareDough()      //Promise
.then(()=>addSauce())       //promise
.then(()=> addCheese())     //success
.then(()=> bakePizza())     // fail
.then(()=> deliverPizza())

.catch(err => console.log(err))     // bakePizza failed


//Benefits -> cleaner, flatter
//error handling
//easy to read