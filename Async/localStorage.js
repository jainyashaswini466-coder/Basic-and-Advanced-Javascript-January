// json - stringify and parse

// localStorage.setItem('username','Amit')


// let name = localStorage.getItem('username')
// console.log(name)

// localStorage.removeItem('name')

// localStorage.clear()

// Storing Objects (Use Json)

let user = {
    name : "Priya",
    age : 21,
}

localStorage.setItem('user', user)

let userData = localStorage.getItem('user')     //JSON format

let userObj = JSON.parse(userData)      // JS object

console.log(userObj.name)       //Priya


