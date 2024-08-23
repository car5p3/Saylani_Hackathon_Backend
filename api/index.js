const express=require("express")
const mongoose=require("mongoose")
const cors = require('cors')
const cookieParser=require("cookie-parser")
const bodyParser=require('body-parser')
const config=require("../src/configs/server.config.js")
const {corsConfig}=require("../src/configs/cors.config.js")
const {route:ApplicantRoute}=require("../src/routes/applicant.route.js")
const {route:adminRoute}=require("../src/routes/admin.route.js")


const app=express()
const PORT=config.appPort

const connectDb=async()=>{
    console.log("Establishing DB Connection")
    await mongoose.connect(config.dbUri)
    console.log("Db Connected")
}

app.use(express.json())
app.use(cors(corsConfig))
app.use(bodyParser.json())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("Welcome to the Home Page")
})
app.use("/applicant",ApplicantRoute)
app.use("/admin",adminRoute)

app.listen(PORT,()=>{
    connectDb()
    console.log(`Server listening on port ${PORT}`)
})

module.exports = app;