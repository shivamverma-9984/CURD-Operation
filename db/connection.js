const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb://127.0.0.1:27017/myapp").then(()=>{
    console.log("Database connected sucessfully")
}).catch((err)=>[
    console.log(error)
])

module.export=connection;