let person = {name : "Amit", age:32 }

// let employee = {...person}

//new properties : salary , department

let employee = {...person, salary: 50000, department: 'IT'}

// ... spread operator

person.name = "Aakash"

// console.log(employee)






let arr = [1,2,3,4]
// let str = "apple"

// let copy = `${str}`

// console.log(copy)

// copy = "mango"

// console.log(copy)

let copyArr = arr

copyArr[0] = 100

console.log(arr)