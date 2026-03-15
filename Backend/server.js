require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB()
    .then((res)=>{
        if (process.env.NODE_ENV !== "production") {
            app.listen(process.env.PORT || 3000,()=>{
                console.log("Server Started")
            })
        }
    })
    .catch((err)=>{
        console.log(err+"\nServer Down")
    })

module.exports = app;