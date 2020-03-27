const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        unique: true,
        trim: true
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