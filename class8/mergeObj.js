let person = {name : "Amit", age:32 }

let hobbies = {sport :"cricket", music: "electronic"}

//Object.keys()      -> array   ->

console.log(Object.keys(person)) //['name','age']

// console.log(Object.values(person))      //[ 'Amit', 32 ]

// console.log(Object.entries(person))

//[ [ 'name', 'Amit' ], [ 'age', 32 ] ]




// let mergeObj = {}

// for(let p in person){
//     mergeObj[p] = person[p]
// }
// for(let h in hobbies){
//     mergeObj[h] = hobbies[h] 
// }

// console.log(mergeObj)
let b = 10

// let merge = {...person, ...hobbies}

// console.log(merge)

//Overriding property

// let sample = {
//     a : 10,
//     x : 20,
//     a : 20
// }

// console.log(sample.a)


let updated = {...person,...hobbies, sport : "basketball"}

// console.log(updated)