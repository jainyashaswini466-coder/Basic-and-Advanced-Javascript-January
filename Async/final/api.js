//getting the comments of a user specific post

//callback
fetchUser(userId,(user)=>{
    fetchPosts(user.id, (post)=>{
        fetchComments(post[0].id,(comments)=>
        console.log(comments))
    })}
)


//promise
fetchUser(userId)
.then((user)=>fetchPosts(user.id))
.then(posts=> fetchComments(posts[0].id))
.then(comments => console.log(comments))
.catch(err => console.log(err))


async function getUserData(userId){
    
    try{
       const user = await fetchUser(userId)
        const posts = await fetchPosts(user.id)
        const comments = await fetchComments(posts[0].id)
        console.log(comments)
    }
        catch(err){
            console.log(err)
        }
}

//look synchronous, easy to read, familiar to error handling with try/catch 


//Async/Await are just different mechanism for handling the same underlying async mechanism
//Js --> only handle one piece of code at one time
//Doesn't wait, it will delegates the work, to the browser's WEB APIs and continues executing 
//the next line of code.