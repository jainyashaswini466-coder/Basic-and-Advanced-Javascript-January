

// fetch('https://fakeapi.com/products/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log("your url is not valid"))


function fetchProductDetails(productId) {
    showLoadingSpinner()        //hideLoadingSpinner()

    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            displayProduct(data)
        })
        .catch(err =>
            console.log("your url is not valid"))
        .finally(() => {
            hideLoadingSpinner()
        })

}

function showLoadingSpinner(){console.log("Loading.....")}
function hideLoadingSpinner(){console.log("loading completed")}


fetchProductDetails(3)
