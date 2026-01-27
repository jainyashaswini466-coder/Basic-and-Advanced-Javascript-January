let celsius = 25;
let fahranite = (celsius * 9/5) + 32;

//write a template literal to print
// _ S is _ F

//Check if it's hot, moderate or cold
// C>30 - hot
// C>20 - moderate
// else - cold

console.log(`${celsius} C is ${fahranite} F`)

if(celsius > 30) console.log("hot")
    else if(celsius>20) console.log("moderate")
        else console.log("cold")