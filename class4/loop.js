//for i
//for of
//foreach

let marks = {
    0 : "i am not the index",
    "first name":"Akhilesh",
    eng : 97,
    hindi: 86,
    science :47,
    maths : 100,
    eng:45,
    "akhilesh@gmail.com" : "Email"
}

//console.log(marks[0])

//  for(let m of marks){
//     console.log(marks[m])
//  }

for(let m in marks){
    console.log(m, marks[m])
}