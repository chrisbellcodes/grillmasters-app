const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    lastName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    admin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);

module.exports = User;