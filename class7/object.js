let student = {
    name : "Priya",
    age : 21,
    address:{
        city : "Banglore",
        phone_no:"765756545"
    }
}

// let {name, age, address :{city, phone_no}} = student;

// console.log(city)

// let {name:studentName, age: stu_age, city: stu_city} = student;    


//provide default values to missing property
// let {name, age, city, phone_no = "xxxxxxxxxxx"} = student;

// console.log(name,phone_no)


// contact :{
//         email:"amit@gmil.com",
//         phone:"909877678",
//         address:{
//             city:"Delhi"
//         }
//     }
// let {name,age, contact:{email, phone , address:{city}}} = basicInfo;
// 

let basicInfo = {
    name: "Amit",
    age: 22,
    }


// console.log(name)

// function displayBasicInfo(obj){
//     console.log(`Name : ${obj.name}`)
//     console.log(`Age : ${obj.age}`)

// }

function displayBasicInfo({name,age}){
        console.log(name)
}

displayBasicInfo(basicInfo)
















// let fruits = ['apple','mango','banana']

// let [fruit1, fruit2, fruit3] = ['apple','mango','banana']

// //destructured the array

// // console.log(fruits[0])

// console.log(fruit1, fruit2, fruit3)