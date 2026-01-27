let student = [
    {name:"Amit", marks: 68, grade:},
    {name:"Priya",marks:90},
    {name:"Raj",marks:67}
]



//Extract the names
// [Amit, Priya, Raj]

// let arr = []

// for(let s of student){
//     arr.push(s.name)
// }

// console.log(arr)

let names = student.map(obj => obj.name)

console.log(names)