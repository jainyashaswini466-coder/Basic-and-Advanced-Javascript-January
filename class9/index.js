// JSON.stringify()

// JSON.parse()

//API - Application Programming Interface

// frontent -> API -> Backend

// Api mean a URL that gives us data in JSON format

// HTTP methods
//  GET - PUT/PATCH - POST - DELETE
// retrieve - update - create - delete

//status codes -
//200 - success
//404 - Not Found
//500 - server error

fetch('https://fakestoreapi.com/products/1')
//   .then(response => response.json())    // Convert to JSON
  .then(response => console.log(response))
//   .then(data => {
//     console.log(data.id);
//     console.log(data.title);
//     console.log(data.price)
// })
//   .catch(error=> console.log("Some error occured"))


//fetch() - Js function to call APIs
//Promises : .then() for success, .catch() for errors
//Always wrap API calls in try - catch

