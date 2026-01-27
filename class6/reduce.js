// reduce = it will return single value

let classA = [
    {name:"Amit", marks: 68}, 
    {name:"Priya",marks:90},
    {name:"Raj",marks:67}
]

// let sum = 0
// for(let student of classA){
//     sum+= student.marks
// }
// console.log(sum)

// <array name>.reduce((accumulator,currentValue))


let total = classA.reduce((sum,student)=> {return sum + student.marks;
    // console.log(sum)
})

console.log(total/classA.length)