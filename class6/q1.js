let student = [
    {name:"Amit", marks: 68}, //{name:"Amit", marks: 68, grade:'B},
    {name:"Priya",marks:90},
    {name:"Raj",marks:67}
]

//map returning array
let gradedStudent = student.map(obj =>{
    return{
       ...obj , //copy existing object     name:"Amit", marks: 68

       grade : obj.marks>=90 ? 'A' : 'B',

        // marks : obj["marks"] -5 
       marks : obj.marks - 5 
    }
})

console.log(gradedStudent)


// grade : marks>=90 = 'A' : 'B'

// let Amit = {name:"Amit", marks: 68}

// Amit.grade = 'B'

// console.log(Amit)