function fetchUserData(userId){
    return new Promise((resolve,reject)=>{
        console.log(`Fetching user ${userId}`)

        setTimeout(()=>{
            if(userId >0){
                resolve({
                    id : userId,
                    name : "Amit Kumar",
                    email : "amit@gmail.com"
                });
            }
            else{
                reject("Invalid user ID")
            }
        },1500)
    })
}

// fetchUserData(1).then(user => console.log("user found", user))
// .catch(err => console.log(err))





// fetchHistory = (bookName) => {
//     return new Promise((res , rej)=>{
//         console.log(`Fetching history of ${bookName}`);
        
//         setTimeout(()=>{
//             if(bookName[0]=='B' || bookName[0] == 'b'){
//                 res(console.log(`History found.`));
//             }else
//                 rej(console.log(`History not found!`));
//         } , 2000)
//     })
// }
// fetchHistory("biible");


// function fetchHistory(bookName){
//     return new Promise((resolve,reject)=>{
//         console.log(`Fetching bookName ${bookName} `)
//         setTimeout(()=>{
//             if(bookName[0] !=="B"){
//                 resolve({
//                     id:"Book",
//                     exists: true
//                 });
//             }else{
//                 reject("Book Does not exists")
//             }
//         },1500)
//     })
// }

// fetchHistory("Book").then(user=>
//     console.log(user)
// ).catch(err=> console.log(err));



// function fetchHistory(bookName) {
//   return new Promise((resolve, reject) => {


//     setTimeout(() => {
//       if (bookName.toLowerCase().startsWith("b")) { //or uppercase
//         resolve("This book exists in the history");
//       } else {
//         reject("No history found");
//       }
//     }, 1000);
//   });
// }
// fetchHistory("Bhagavad Gita")
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// fetchHistory("Ramayana")
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


