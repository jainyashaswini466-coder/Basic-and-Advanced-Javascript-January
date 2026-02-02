    router.post("/posts",(req,res)=>{
        const {title, content, categoryId} = req.body

        res.json({title, content, categoryId})
    })