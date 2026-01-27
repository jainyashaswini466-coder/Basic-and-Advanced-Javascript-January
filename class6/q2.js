let student = [
    {name:"Amit", marks: 68}, 
    {name:"Priya",marks:90},
    {name:"Raj",marks:67}
]

console.log(student)

    let count = 1

let roll = student.map(student =>{
    return{
        ...student ,
        rollNumber : count++
    }
})

console.log(roll)