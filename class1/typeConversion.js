// console.log(typeof ("42"), typeof ('true'))

// string ----> Number

strNum = "42"

// console.log(strNum + 8)     // string + num

num = Number(strNum)       // "42"  --> 42

// console.log(num + 8)       // 42 + 8 = 50


// Number --> String
score = 100

// console.log(typeof (score + "10"))

strScore = String(score)

// console.log(strScore + 10)


// Anytime you try to concatenate a number with a string
//the output will be type-cased as string

// (be careful)

test = "hello" * 3

console.log(test, typeof test)


//Js tries to be helpful with type conversion, but it can lead to bugs