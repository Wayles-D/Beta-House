const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
}

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            throw new Error('All fields must be filled');
        }

        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Incorrect email');
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            throw new Error('Incorrect password');
        }

        const token = createToken(user._id);

        res.status(200).json({ email, token, firstName: user.firstName, lastName: user.lastName });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// signup user
const signupUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        if (!firstName || !lastName || !email || !password) {
            throw new Error('All fields must be filled');
        }

        if (!validator.isEmail(email)) {
            throw new Error('Email is not valid');
        }

        const exists = await User.findOne({ email });

        if (exists) {
            throw new Error('Email already in use');
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await User.create({ firstName, lastName, email, password: hash });

        const token = createToken(user._id);

        res.status(200).json({ email, token, firstName, lastName });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { signupUser, loginUser }
