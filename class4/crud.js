//update an existing property

//add new property

//delete property


let student = {
    name: "Raj",
    age: 20
}

student.age = 21
student["age"] = 22
// console.log(student)

//Add, email
student.email = "raj@gmail.com"
// console.log(student)

delete student.email
// console.log(student)



let obj1 = {
    key1: "value 1",
    "key 2":"value 2",
    "key#3": "value 3",
    key4 :"value 4",
    5 : "value 5",
    key5: "value"
}
let key5 = "key#3"

console.log(obj1[5])     //variable search

Array.isArray() //true false

// console.log(obj1["key5"])   //key search    //undefined

// console.log(obj1.key1)  //undefined

//console.log(obj1[5])

// console.log(obj1[key1])