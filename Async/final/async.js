//Get - Post//



//post api


async function createProduct(postData, produnctId, pass) {

    const token = localStorage.getItem("token")

    try {
        const response = await fetch(`https://fakestoreapi.com/products?productId=${productId}`,
          
                {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(postData)
        })

        const newPost = await response.json()
        console.log('Created Post:', newPost)

        return newPost
    }
    catch(err){
        console.log(err)
    }

}


createProduct({
    id: 21,
    title : "this is a new product",
    price: 46000
})