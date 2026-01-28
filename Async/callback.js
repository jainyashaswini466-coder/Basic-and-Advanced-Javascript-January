// callback is a function passed as a argument to another fnction, to be executed later

function greet(name ,callback){
    console.log("hello", name)      //Hello Yash

    callback()      //"My name is Kamal"

    console.log("after callback")
}

function introduce(){
    // setTimeout(()=>{
        for(let  i = 0; i<3000000000; i++){}

        console.log("My name is Kamal")
    // },2000)
}

greet("Yash", introduce)
// introduce()
