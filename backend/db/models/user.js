import mongoose from "mongoose";

// the user should follows the following schema to be stored in the database.
const userSchemas = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, // it will remove the extra spaces from the name
        maxlength: 32
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 32 // it will make sure that the email is unique
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
    dailyEmoji: {
        type: [{
            emojiName: {type: String, required: true},
            index: {type: Number, required: true},
        }]
    },
    dailyEmojiCount: {
        type: [{
            emojiName: {type: String, required: true},
            count: {type: Number, default: 0},
        }],
        default: []
    },
    weeklyAverageMoods: {
        type: []
    }
}, { timestamp: true })

const User = mongoose.model("User", userSchemas); // This is the model that we are exporting to use in the controller. 
//(Controller - the functions where you will write code to handle the data or the incoming requests and responses for the client.)

export default User;