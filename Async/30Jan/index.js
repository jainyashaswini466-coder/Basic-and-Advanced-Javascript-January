

// fetch('https://fakestoreapi.com/products/3')
//   .then(response => response.json())
//   .then(data => console.log(data));




const promise1 = fetch('https://fakestoreapi.com/products/1').then(res => res.json()).catch(rej => console.log("promise1"));

const promise2 = fetch('https://fakestoreapi.com/proucts/2').then(res => res.json()).catch(() => console.log("promise1"));

const promise3 = fetch('https://fakestoreapi.com/products/3').then(res => res.json()).catch(rej => console.log("promise1"));

//Promise.all -> [p1,p2,p3]

// Promise.all([promise1, promise2, promise3])
// .then(products =>{
//     console.log("All products:", products)
// })
// .catch(err => {console.log("one or more promise failed", err)})

//.all() - Waits for all promises to resolve. If any promise rejects, the entire operation fails.

// Promise.race(),  Promise.any()

// const timeout = new Promise((_, reject)=>{
//     setTimeout(()=> reject("Request Timeout"), 0)
// })
// Promise.race([timeout, promise1])
// .then(data => console.log("Data :", data))
// .catch(err => console.log(err))

//.race() - returns the first promise to settle (resolve or reject)

//  Promise.allSettled()

 const p1 = Promise.resolve("Success");
 const p2 = Promise.reject("Failed")

//  Promise.allSettled([p1, p2, promise3])
//  .then(results => 
//     // console.log("hey i am result for all the promises", results)
// results.forEach((result, index)=>{
//     if(result.status == 'fulfilled') console.log(`Promise ${index + 1} successful:`, result.value)
// else console.log(`Promise ${index + 1} failed/rejected: ${result.reason}`)
//     })
// )

//Promise.any() - Returns the first fulfilled promise. Rejects only if all promises rejected.

// const pro1 = fetch('https://fakestoreapi.com/products/1').then(res => res.json())

// const pro2 = fetch('https://fakestoreapi.com/products/2').then(res => res.json())

// const pro3 = fetch('https://fakestoreapi.com/products/3').then(res => res.json())

// Promise.any([pro1, pro2, pro3])
// .then(response => console.log('Fastest promise responded', response))

// .catch(()=> console.log("All promises failed"))



const cdn1 = fetch('https://cdn1.example.com/data.json').catch(() => console.log("cd1"));
const cdn2 = fetch('https://cdn2.example.com/data.json').catch(() => console.log("cdn2"));
const cdn3 = fetch('https://cdn3.example.com/data.json').catch(() => console.log("cdn3"));

Promise.any([cdn1, cdn2, cdn3])
.then(response => console.log('Fastest promise responded', response))

.catch(()=> console.log("All promises failed"))

//                   race()                any()
//p2-fails           returns p2             -
//p3-fails                                  -
//p1-resolved                               return p1

// if p1-fails                              reject()