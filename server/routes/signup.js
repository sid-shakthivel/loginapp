const { Router } = require('express');
const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const { jwt_secret } = require('../env');
const { User } = require('../user');

const router = express.Router();
router.use(express.json());
router.use(cookieParser());

router.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

router.post('/', async (req, res) => {
    try {
        // Make new user
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        // Save user in DB
        const createdUser = await user.save();

        // Create JWT
        const token = jwt.sign(
            {
                id: createdUser._id,
                username: createdUser.username,
                email: createdUser.email,
            },
            jwt_secret,
            { expiresIn: '1h' }
        );

        // Send JWT As cookie
        res.status(200).cookie('localAuthToken', token, {
            maxAge: 3600000,
            httpOnly: true,
        });

        let miraclAuthToken = req.cookies['miraclAuthToken'];

        if (miraclAuthToken) {
            const userInfo = await client.userinfo(miraclAuthToken);
            res.status(200).json({
                id: user._id,
                info: userInfo,
                username: createdUser.username,
                email: createdUser.email,
            });
        } else {
            const state = Math.floor(Math.random() * 90000) + 10000;
            const url = client.authorizationUrl({
                scope: 'openid',
                state,
            });

            res.status(200).json({ url: url });
        }
    } catch (error) {
        if (error.error === 'invalid_token') {
            const state = Math.floor(Math.random() * 90000) + 10000;
            const url = client.authorizationUrl({
                scope: 'openid',
                state,
            });

            res.status(200).json({ url });
        } else {
            res.status(400).json({ error: error.errors });
        }
    }
});

module.exports = router;
