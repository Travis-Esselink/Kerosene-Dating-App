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
  res.json(req.user)
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
    console.log('sending user')
    res.json(req.user)
  } else {
    res.status(404).json({ msg: 'User not logged in' })
  }
})


router.post('/register', async (req,res)=>{
  const {username, password, confirmPassword} = req.body
  if (password !== confirmPassword) {
    res.status(400).json({message: "Passwords do not match"})
  }
  try {
      if (password === confirmPassword) { 
        const user = await User.register(    
            new User({
              username:username,
              displayName:'',
              dateOfBirth:'',
              gender:'',
              genderPref:'',
              bio:'',
              coverImage:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'
              
            }),
            password
        )

        req.login(user, () => {
            res.json(user) // user here is obj w _id: ObjectId
        })
      }
  } catch (error) {
      res.status(403).json(error.message)
  }
})

router.get("/v1/checkUsername/:username", async (req ,res) => {
  const existedUser = await User.find({username: req.params.username})
  if (existedUser.length > 0) {
    res.json({
      message: "The username is already registered",
      exist: true
  })
  } else {
    res.json({
      message: "",
      exist: false
  })
  }
})


module.exports = router
