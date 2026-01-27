//filter creates a NEW array with only elements that pass a test

let ranks = [2,5,7,1,4,3,6]

        //  [2,4,6]

//less than 3
let output = ranks.filter(rank => rank<4)

// console.log(output)

//even ranks -
let even = ranks.filter(rank => rank%2==0)
// console.log(even)


let products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Mouse", price: 500, inStock: true },
  { name: "Keyboard", price: 1500, inStock: false }
];

//Get only in-stock products
let inBudget = products.filter(pro => pro.price<=10000) //select required elements
                       .map(product => product.name)    //tranform each element

console.log(inBudget)

//Get affordable products (under 10000)
// products.filter(pro=>pro.price<=10000)
// ['Mouse','Keyboard']