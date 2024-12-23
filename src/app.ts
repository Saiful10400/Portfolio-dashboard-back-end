import express, { Response } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app=express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:true}))


app.get("/",(_,res:Response)=>{
res.send("Server is perfectly running on port:5000.")
})



export default app