
// Definition

// let promise = new Promise((resolve,reject)=>{

//     if(/* success */){
//         resolve("Success")
//     }
//     else{
//         reject("Error!")
//     }

// })

let test = Math.floor(Math.random()*10)
console.log(test)


let myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(test >5)
        resolve("Promise fulfilled")

        else reject("I was not processed")
    },2000)

    
})

myPromise.then((result)=>{
    console.log(result)
}).catch((err)=>{console.log(err)})