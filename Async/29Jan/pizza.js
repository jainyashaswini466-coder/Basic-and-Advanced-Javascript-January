// Step 1 - prepareDough()
// Step 2 - addSauce()
// Step 3 - addCheese()
// Step 4 - bakePizza()
// Step 5 - deliverPizza()

function prepareDough(callback){
    setTimeout(()=>{
        console.log("Dough prepared")
        callback()
    },1000)
}

function addSauce(callback){
    setTimeout(()=>{
        console.log("Sauce added")
        callback()
    },500)
}
function addCheese(callback){
    setTimeout(()=>{
        console.log("Cheese added")
        callback()
    },1000)
}
function bakePizza(callback){
    setTimeout(()=>{
        console.log("Pizza Baked")
        callback()
    },1500)
}

function deliverPizza(){
    setTimeout(()=>{
        console.log("Pizza out to deliver")
    })
}





prepareDough(()=>{
    addSauce(()=>{
        addCheese(()=>{
            bakePizza(()=>{
                deliverPizza()
            })
        })
    })
})


//callback hell happens when multiple asynchronous operations are nested inside each other, making code difficult to read, maintain or debug.