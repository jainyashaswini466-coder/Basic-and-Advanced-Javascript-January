
// Synchronous / order
//you can't do anything else while waiting. 

//Asynchronous
//Get a buzzer - you can multitask/ process multiple code

//->file operation - reading/writing - take time.
// Network request - fetching data from API     (fetch)

//------------------------------------

// console.log("First")
// console.log("Second")
// console.log("Third")

//-------------------------------------

// console.log("First")        //syn

// setTimeout(()=>{
//     console.log("Second")
// },2000)

// console.log("third")        //syn

//-------------------------------------

// console.log("Task 1")        

// for(let i = 0; i< 30000000000; i++){
   
//     // blocking the code
// }

// console.log("Task 2")  

//-------------------------------------

console.log("First")        //syn

setTimeout(()=>{
    console.log("Second")
},0)

console.log("third") 

//--------------------------------------
