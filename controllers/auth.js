const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../models/user')


const authenticate = (req,res,next) => {
  const auth = passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.log(err)
      next(err)
    }
    if (!user) {
      res.status(401).json({msg: 'Incorrect username or password'})
    }
    req.logIn(user, (err) => {
      if (err) next(err)
      next()
    })

    console.log(user)

  })
  auth(req,res,next)
}

router.post('/login', authenticate, (req, res) => {
  console.log('logged in', req.user)
  const { id, username } = req.user
  res.json({ id, username } )
})

router.post('/logout', (req, res) => {
  req.logout(() => {
    res.json({
      msg: 'Logged out'
    })
  })
})


router.get('/loggedin-user', (req,res) => {
  if (req.user) {

    const { id, username } = req.user

  } else {
    res.status(404).json({ msg: 'User not logged in' })
  }
})


router.post('/register', async (req,res)=>{
  const {username, password, confirmPassword} = req.body
  try {
      if (password === confirmPassword) { 
        const user = await User.register(    
            new User({username:username}),
            password
        )

        req.login(user, () => {
            res.json(user) // user here is obj w _id: ObjectId
        })
      }
  } catch (error) {
      res.status(403).json(error.message)
  }
  // what should I write to let above try catch to run first, then only run below code?
  // because if the username has ady existed, then it will tell the user first.

  // I put this as else if inside try, but it will also tell me the pw dont match first. 
  // if (password !== confirmPassword) {
  //   res.status(400).json({message: "Passwords do not match"})
  // }
})


module.exports = router
