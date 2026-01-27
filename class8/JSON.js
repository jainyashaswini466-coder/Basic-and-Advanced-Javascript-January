
//JavaScript Object Notation
//A text format  for storing and transporting data


//JavaScript Object
// let student = {
//     name : "Jaya",
//     age : 89,
//     courses: ['Math',"Science"]
// }

//Json, formatting layer which helps the communication between browsers
let studenTJSON = `{
"name": "Jaya",
"age":21,
"courses":['Math',"Science"]}`

//JSON is a STRING, not an object
//Doesn't support functions, undefined or dates


//-----------------------------------------------------------------

//Json methods - JSON.stringify()

let student = {
    name : "Jaya",
    age : 89,
    courses: ['Math',"Science"]
}

let jsonString = JSON.stringify(student)

console.log(jsonString)

//JSON.parse()

let parsedStudent = JSON.parse(jsonString)

console.log(parsedStudent)