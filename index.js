const express = require('express')
const dotenv = require('dotenv') 
const app= express()

dotenv.config({ path: './.env' })

const name = process.env.NAME
const TestRouter = require('./Routes/testapi')

app.use(express.json());

app.use("",TestRouter)


app.listen(3000,()=>{

    console.log("port is listening on 3000",name)

})