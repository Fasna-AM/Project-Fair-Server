// steps to define express server


require('dotenv').config()      // Loads .env file contents into process.env
const express = require('express')
const cors = require('cors') 
const router = require('./routes/router') 
require('./database/dbConnection')
  
const pfServer = express()

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`pfServer Started running  at port ${PORT} and waiting for client request`);
    
})

pfServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:red;">pfServer Started running  at port  and waiting for client request!!</h1>`)
})
