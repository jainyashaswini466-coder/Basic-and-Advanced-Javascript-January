function step1(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("Step 1 complete")
            resolve(1)
        },1000)
    })
}

function step2(prevValue){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("Step 2 complete")
            // resolve(2)
            reject(prevValue + 1)      //1 + 1 = 2
        },2500)
    })
}

function step3(prevValue){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("Step 3 complete")
            resolve(prevValue + 1)           // 3
        },1000)
    })
}

step1()
.then(result1 => step2(result1))
.then(result2 => step3(result2))
.then(finalResut => {console.log("final result :", finalResut)})
.catch(err => console.log(err))