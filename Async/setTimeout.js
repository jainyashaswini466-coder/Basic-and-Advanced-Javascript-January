// setTimeout(callback, delay (time in ms) )

// setTimeout(function(){
//     alert("This runs after 2 seconds")
// },2000)

// let timeoutId = setTimeout(function(){
//     console.log("This runs after 2 seconds")
// },8000)

// setTimeout(()=>{
//     console.log("2 secs up, clearing the earlier timeout")
//     // clearTimeout(timeoutId)
// },2000)

// console.log(timeoutReturn)


let count = 0;

let intervalId = setInterval(()=>{
console.log(`Count : ${count++}`);

if(count == 10)
clearInterval(intervalId)

}, 500)

// console.log(intervalId)
