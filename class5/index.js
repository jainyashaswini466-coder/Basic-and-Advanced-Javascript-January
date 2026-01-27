let products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Mouse", price: 500, inStock: true },
  { name: "Keyboard", price: 1500, inStock: true }
];

// product name - ₹ product price - status(Available/Out of Stock) 

for(let p of products){
  let status = p.inStock ? "Available" : "Out of Stock"
  // console.log(`${p.name} - ${p.price} -${p.inStock ? "Available" : "Out of Stock"} `)
}

//Find total value of in-stock products

let total = 0
for(let product of products){
  product.inStock? total+= product.price : total
}

console.log(total)