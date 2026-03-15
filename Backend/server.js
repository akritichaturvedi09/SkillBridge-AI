require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

// Connect to DB (non-blocking for serverless)
connectToDB().catch((err) => {
    console.error("DB connection error:", err)
})

if (process.env.NODE_ENV !== "production") {
    app.listen(process.env.PORT || 3000, () => {
        console.log("Server Started")
    })
}

module.exports = app
