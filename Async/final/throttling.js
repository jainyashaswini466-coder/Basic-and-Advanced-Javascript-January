//imagine a search box and a search button adjacent to that box
//puts query in the box and triger the search button

//Throttling
// Limits execution to once per specified time period (e.g. max once per second)

//search button -> clicks once, twice, thrice ---> consider first click (waits for the limit time to pass to consider next calls)



function throttle(fun, limit){
    let inThrottle
    return function(...args){
        if(!inThrottle){
            fun.apply(this,args)
            inThrottle = true
            setTimeout(()=> inThrottle = false,limit)
        }

    }
}


function trackScrollPosition(){
    console.log('Scroll Position', window.scrollY)
}




//Debouncing
//Delays the execution until after a pause in events (e.g. wait until user stops typing)

//w.i.k.i.p (stope for delay) ----> api will be triggered

// function searchApi(query){
//     console.log("Searching for :", query)
// }

