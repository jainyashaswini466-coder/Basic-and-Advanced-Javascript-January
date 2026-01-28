function calculate(a,b, callback){
    return callback(a,b)
}

function add(a,b){
    return a+b
}

function multiply(a,b){
    return a*b
}


let result = calculate(3,7,multiply)

console.log(result)