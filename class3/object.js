//Arrays are great for lists.But what if you want to store
//information about a person - name, age, city or mail

let person = ["abacus", 38, 'hyd', "abc@gmail.com"]

// person = {
//     0: "abacus",
//     1: 38,
//     2:'hyd'
// }

//A Object - A collection of key-value pairs
let student = {
    "name": "Priya",
    age: 21,
    city: "Banglore",
    isAdult: true
}

//key - value 
//name - "Priya"
// console.log(typeof person)

//How to differentiate between arrays and objects

console.log(Array.isArray(student))