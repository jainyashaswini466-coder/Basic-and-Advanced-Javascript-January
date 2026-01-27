let student = [
    {name:"Amit", marks: 68}, 
    {name:"Priya",marks:90},
    {name:"Raj",marks:87}
]

//find marks > 85

let result = student.find(s => s.marks > 85)    
//always return first mathcing value 

console.log(result)