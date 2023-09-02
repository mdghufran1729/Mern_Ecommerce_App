import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"

dotenv.config();

//database config
connectDB();

const app=express();

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes)

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to my Ecommerce app</h1>")
})


const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server running on ${port}`.bgCyan.white)
})