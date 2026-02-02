

console.log('Start')

setTimeout(()=>{            //Macro 1
    console.log('Timeout 1');
    Promise.resolve().then(()=> console.log("Promise in Timeout 1"))    //Micro a
},0);

Promise.resolve()           //Micro 1
.then(()=>{
    console.log('Promise 1');

    setTimeout(()=> console.log('guess 1'),0)           //pushed to macro
})
.then(()=> console.log('Promise 2'))        //Micro 2

setTimeout(()=>{            //Macro 2
    console.log('Timeout 2')
},0)

console.log('end')


//Start
//End
//Promise 1
//Promise 2
//Timeout 1
//Promise in Timeout 1
//Timeout 2
//