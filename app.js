const express = require('express')
const app = express()
require('dotenv').config()
PORT = process.env.PORT

app.get('ping', () => {
    res.send('pong')
  })

app.get('/', (req,res)=> {
    res.send('Hello World')
})

app.get('bing', () => {
    res.send('bong')
  })
  


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

