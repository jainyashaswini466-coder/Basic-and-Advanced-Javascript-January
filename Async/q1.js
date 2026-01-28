


// console.log("Start")

// setTimeout(()=>{
//     console.log("Timeout 1")
// },3000)

// setTimeout(()=>{
//     console.log("Timeout 2")
// },2000)

// console.log("End")

//------------------------------


console.log("Start")

setTimeout(()=>{
    console.log("Timeout 1")

    setTimeout(()=>{
        console.log("Timeout 1.1")
    },2000)

},3000)

setTimeout(()=>{
    console.log("Timeout 2")
},1000)

console.log("End")