
//Arrow functions DON't have their own this
//for object methods, use regular functions, not arrow functions.

let person = {
    firstname : "Amit", 
    lastName : "kumar",
    age:32 ,

    getFullName : function(){
        console.log(this.firstname)
        return this.firstname + " " + this.lastName
            // person.firstname
    },

    getArrow : ()=>{
        return this.firstname //undefined
    }
    // callFullName : function(){
    //     console.log(this.getFullName())
    // }

}

//this refers to the object that the method belongs to

// console.log(person.getFullName())

console.log(person.getArrow())