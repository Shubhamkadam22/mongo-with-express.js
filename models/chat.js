const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true //make the 'from' field required, meaning it must be provided when creating a new chat document
    }, 
    to: {
        type: String,
        require
    },
    msg: {
        type: String,
        maxLength: 100 //constrent the message to 100 characters
    },
    created_at:{
        type: Date,
        required: true, //make the 'created_at' field required, meaning it must be provided when creating a new chat document
        default: Date.now //set the default value to the current date and time when a new chat document is created
    }
}); 

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat;