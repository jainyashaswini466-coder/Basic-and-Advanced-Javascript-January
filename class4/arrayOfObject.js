let students = [
    {name:"Amit", marks:85},
    {name: "Priya", marks:90},
    {name: "Raj", marks:78}
]

// student[0] = {name:"Amit", marks:85}
let result = students[0].name
        //   students[0]["name"]

console.log(result)
// students = {
//     0:{name:"Amit", marks:85},
//     1: {name: "Priya", marks:90},
//     2:{name: "Raj", marks:78}
// }
// for of or for in?

// for(let s in students){
//     console.log(students[s])
// }

// for(let s of students){
//     console.log(s)
// }

// let marks = ["name","marks"]

// console.log(marks.includes("name"))