const express = require('express')
const app = express()
require('dotenv').config()
PORT = process.env.PORT



app.get('/', (req,res)=> {
    res.send('Hello World')
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
