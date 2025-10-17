import express from 'express'
import cors from 'cors'
import loginRouter from './routes/login.routes.js'
import bookRouter from './routes/books.routes.js'
import {connectDb} from './models/connect.js'

const PORT = 3000
const app = express()

// body and cross orgin
app.use(express.json())
app.use(cors())

// routes
app.use("/auth", loginRouter)
app.use("/books", bookRouter)

// test
app.get("/", (req, res)=>{
    res.send("working")
})

if(connectDb())
{app.listen(PORT, ()=>{
    console.log(`server running in http://localhost:${PORT}`)
})}
