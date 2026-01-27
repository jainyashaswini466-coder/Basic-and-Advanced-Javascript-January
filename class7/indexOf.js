let month = "Decembcerc"
        //   Decembce
// console.log(month.indexOf('c',3))

// console.log(month.lastIndexOf('x'))

// includes()   // -> true/false

// console.log(month.includes('x'))



let email = "user@example.com"

// console.log(email.endsWith("com"))


let sentence = "JavaScript Programming"

//slice(startIndex, endIndex)       //start>end -> no sense, return ""

let part = sentence.slice(10,2)     //start>end
// console.log(part)

let subPart = sentence.substring(10,2) //(0)       //do not process negative index. it assumes it to be 0
                            //   2,10
console.log(`${part}\n${subPart}`)

