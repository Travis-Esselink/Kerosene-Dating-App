const express = require('express')
const router = express.Router()
const upload = require('../middlewares/upload')


/*
- Setup the RESTful routes
    - Index Route / Home Route
    - Show Route / User Route
    - Create Route / CreateUser Route
    - Delete Route / DeleteUser Route
    - To Check who is logged Get Route
*/



//get Profiles - takes the logged in user profile and sends back profiles to show based on users preferences
    //Required logic/checks:
        //profile must have required fields filled out
        //profile must not appear in users seen array
        //profile must fit user preferences, and vice-versa
router.get('/v1/profiles', async (req,res) => {
    //expects nothing  
    //sends a list of user profiles (x length maybe 20)
    res.send()
})


//get users matches - return matches of user
router.get('/v1/matches', (req,res) => {
    //expects nothing
    //sends req.users mastches 
})


//show route (Get match) - returns selected matches user profile
router.get('/v1/profiles/:matchedUserID', (req,res) => {
    //expects a user id of the matched user to dispaly
    //returns profile of user
})



//edit route - edit own user profile
router.put('/v1/profiles/:userID', (req,res) => {
    //account set and edit
    //expects id of user
    //updates user in db
    //sends updated user
})


// delete route - delete own user profile
    // ---> log the user out in front end
    // --->nav user back to register page.
    // ---> then delete the user profile

router.delete('/v1/profiles/:userID', (req,res) => {
    
})



//Swipe API
    //updates the seen array, with the result of the swipe (like = true/false)
    //check for match - named function
    //create match, update user match arrays, create a chatroom - named function
router.put('/v1/swipe/:swipedUserID', (req,res) => {
    //expects req.body to contain an object ({liked:Booolean}) depending on which way user swiped
    //expects id of swiped user 

    //update databases

    //sends object of whether it is match or not {match:Boolean}
    res.json({match:false})
})



//remove match API
    //update both users match array
router.put('/v1/profiles/remove/:matchedUserID'), (req,res) => {
    //ex
}




//Messaging API??? need research



module.exports = router