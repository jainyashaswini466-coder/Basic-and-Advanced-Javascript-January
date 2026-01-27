// slice() and splice()

let numbers = [1,2,3,4,5]

// for(let i = 0; i<=numbers.length - 1; i++){

//     console.log(numbers[i]*2)

// }

//forEach   function(fun)

{/* <arrayname>.forEach(()=>{}) */}
//forEach takes a function and runs it for each element.
// numbers.forEach((value,index)=>{console.log(index,value*2)})


numbers.forEach(num=>{
    num = num-1
    console.log(num*2)
})