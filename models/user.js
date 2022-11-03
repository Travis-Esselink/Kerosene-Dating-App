const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema

const matchSchema = new Schema({
    match: {type:Schema.Types.ObjectId,  ref: "User"},
    chatRoomID: {type:String, required:true}
})

const seenSchema = new Schema({
    user: {type:Schema.Types.ObjectId,  ref: "User"},
    liked: Boolean
})

const userSchema = new Schema({
    displayName:String,
    dateOfBirth:Date,
    gender:String,
    genderPref:String,
    ageRange:Number,
    
    bio:String,
    coverImage:[String],
    images:[String],
    matches: [{type:matchSchema}],
    seen: [{type:seenSchema}]
}, 
{ timestamps: true }
) 

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User',userSchema)

module.exports = User