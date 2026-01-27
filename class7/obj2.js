let info = {
    name: "Amit",
    age: 22,
    }

    let infoCopy = info     //same reference

    infoCopy.name = "Priya"     //{ name: "Priya", age: 22,}

    console.log(info)   //

 

    // spread operator (...) to copy and deal with properties of objects


    // let infoCopy = {...info}  // = { name: "Amit", age: 22,}

    //    infoCopy.name = "Priya" // = { name: "Priya", age: 22,}

    //    info.age = 42
    // // console.log('infoCopy',infoCopy)

    // console.log(info)