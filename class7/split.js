let sentence = "  Hello World Welcome"

let words = sentence.trim().split(" ")

// console.log(words)

//converted string to array with seperator - " " - split()

//array -> string

let array = ["This","is","2026"]        //"This is 2026"

let str = array.join(" ")

// console.log(str)

let para = "Js is awesome, I love programming."

// let count = 1
// for(let char of para){
//     if(char == " ") count++
// }
// console.log(count)

console.log(para.split(" ").length)

