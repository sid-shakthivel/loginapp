const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const db = mongoose.connection;

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: 'This username is taken',
    },
    email: {
        type: String,
        required: [true, 'Please enter a email'],
        unique: 'This email is taken',
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [10, 'Make sure password is over 10 characters'],
    },
});

userSchema.plugin(beautifyUnique);

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
});

userSchema.methods.comparePassword = async function (password) {
    const match = await bcrypt.compare(password, this.password);
    return match;
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
