// let fruits = ["Apple","Mango","banana"]

// // fruits.forEach(()=>{})  //arrow function

// // fruits.forEach((fruit,index) => {console.log(index+1,".",fruit)})

// console.log(fruits)

// map() -> Transform each element
//map will create a NEW array by transforming each element. original array stays unchanged.

let costs = [20,50,70,60]

let newCosts = costs.map(price => price - 7)

let costsWithGST = costs.forEach((price)=> {
    price *=1.8
    console.log(price)
}
)

console.log(costsWithGST)