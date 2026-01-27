let scores = {
    math:85,
    science : 90,
    english : 78
}
        //  [85,90,78]
let total = Object.values(scores).reduce((sum,score)=> sum + score, 0)

// console.log(total)

// Object.entries(scores).forEach(arr => console.log(`subject = ${arr[0]} : score = ${arr[1]}`))
Object.entries(scores).forEach(([subject,score]) => console.log(`${subject} : ${score}`))
// [['math',85],['science',90],['english',78]] . forEach()

// console.log(total) //85+90+78 = 

// console.log(`${subject} : ${score}`)


//Use Object.keys and Object.values and then use Array method

// ['math','science','english'].forEach


// Object.keys(scores).forEach(subject => {
//   console.log(`${subject} : ${scores}`);
//   total += scores;
// });
// console.log(total);
















// let total = 0
// for (let sub in scores) {
//   let score = scores[sub];
//   console.log(`${sub} : ${score}`);
//   total += score;
// }
// console.log(total);

let score = 0;

for(let n of (Object.values(scores))){
    score+=n;
}
// console.log(score);