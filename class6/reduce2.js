let fruits = ['a','b','a','m','b','a']

// {a:3, b:2, m:1}

// acc = {a:1}
let count = fruits.reduce((acc,fruit)=>{
    {
        acc[fruit] ? acc[fruit] +=1 : acc[fruit] = 1
        // acc[fruit] ? acc[fruit] +1 : acc[fruit] = 1
        
        // acc[fruit] = (acc[fruit] || 0) + 1
        return acc
    }
},{})

console.log(count)