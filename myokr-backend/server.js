const express = require("express")

const app = express()

const PORT = 5000

app.get('/',(req,res)=>{
    res.status(200).send("My OKR")
})

app.listen(PORT,(req,res)=>{
    console.log(`Server running at port http://localhost:${PORT}`)
})