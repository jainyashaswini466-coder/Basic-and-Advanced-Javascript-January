let colors = ["Red","green","blue","yellow","violet"]

// orange

// colors[7] = "orange"    //manually addition at the end


colors.push("orange")   //add at the end


colors.push("white")

// console.log(colors)

// final colors = [
  'Red',    'green',
  'blue',   'yellow',
  'violet', 'orange',
  'white'
// ]
//pop - deletes at last index

let test = colors.pop()     //returns the deleted value

// console.log(test)


let kites  = ["Red","green","blue","yellow","violet"]

//maroon

let ret = kites.unshift("golden")

// console.log(ret)

// let kites = [ 'golden', 'Red', 'green', 'blue', 'yellow', 'violet' ]

kites.shift()

kites.unshift("maroon")

// console.log(kites)



//push - pop           //last index
//unshift - shift      // 0th index


let arr = [1,2,3]

arr.push(4)     // [1,2,3,4]
arr.pop()       // [1,2,3]
arr.unshift(0)  // [0,1,2,3]
arr.shift()    // [ 1,2,3]

// console.log(arr)

// console.log(arr.indexOf(3))

let color = ["Red","green","blue","yellow"]

// let res = color.indexOf("green",1)

// console.log(res)

// console.log(color.lastIndexOf("green"))

console.log(color.includes("greens"))