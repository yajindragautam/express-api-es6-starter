require("module-alias/register")
import "@config/dotenv"
import express from "express"
import bodyParser from "body-parser"
import tasksRoute from "@Routes/tasksRoute"
import userRoute from "@Routes/userRoute"
import authRoute from "@Routes/authRoute"
import jwt from 'jsonwebtoken';



const app = express()
const PORT = process.env.PORT || 3000

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Create jwt Sing
const createToken = async()=>{
  const accessToken = await jwt.sign({email:"email@gmail.com"},process.env.JWT_SECRET, {expiresIn:'15 second'})
  console.log('access token :', accessToken)
  // Verfy user
  const verfyUser = await jwt.verify(accessToken, process.env.JWT_SECRET);
  console.log(verfyUser);
}

//createToken() // Calling functions

app.get("/", (req, res) => {
  res.json({
    msg: "hello world",
    error: false,
  })
})
// List Of All Routes
app.use("/tasks", tasksRoute)
app.use("/user", userRoute)
app.use("/",authRoute);

app.listen(PORT, () => {
  console.log("Server is up and running at PORT: ", PORT) 
})
