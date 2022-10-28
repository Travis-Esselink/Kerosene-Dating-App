const express = require('express')
const app = express()
const session = require('express-session')
const mongoDBSession = require('connect-mongodb-session')
const passport = require('passport')
const User = require('./models/user')
const mongoose = require('mongoose')

const apiRouter = require('./controllers/api')
const authRouter = require('./controllers/auth')


require('dotenv').config()
const PORT = process.env.PORT
const SESSION_SECRET = process.env.SESSION_SECRET 
const dbURL = process.env.MONGODB_URL

const mongoDBStore = mongoDBSession(session)
const sessionStore = new mongoDBStore({
  uri:dbURL,
  collection:'sessions'
})




app.use(express.static('public')) //looking for static files in public folder
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(authRouter)
// app.use(apiRouter)

//LISTENER
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
  

//DB CONNECT
mongoose.connect(dbURL, ()=>{
    console.log('connected to database')
})