const { Router } = require('express');
const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { Issuer } = require('openid-client');

const { id, secret, redirect_url, jwt_secret } = require('../env');
const { User } = require('../user');

const router = express.Router();
router.use(express.json());
router.use(cookieParser());

router.use(
    cors({
        origin: 'http://miraclloginapp.myddns.me',
        credentials: true,
    })
);

let client = null;

(async () => {
    try {
        const issuer = await Issuer.discover('https://api.mpin.io');

        client = new issuer.Client({
            client_id: id,
            client_secret: secret,
            redirect_uris: [redirect_url],
            response_types: ['code'],
        });
    } catch (error) {
        console.log(error);
    }
})();

router.post('/', async (req, res) => {
    try {
        // Find User
        const user = await User.findOne({ username: req.body.username });

        // Throw error if no user with name
        if (user === null) throw 'No user with that username';

        // Password validation
        const passwordValidation = await user.comparePassword(
            req.body.password
        );

        if (!passwordValidation) {
            return res.status(400).json({ error: 'Password is incorrect' });
        }

        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                email: user.email,
            },
            jwt_secret,
            { expiresIn: '1h' }
        );

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
                username: user.username,
                email: user.email,
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
            console.log(error);
            res.status(400).json({ error });
        }
    }
});

router.post('/getToken', async (req, res) => {
    try {
        const params = {
            code: req.body.code,
            state: req.body.state,
        };

        let tokens = await client.callback(redirect_url, params, {
            state: params.state,
        });

        const userInfo = await client.userinfo(tokens);

        res.status(200).cookie('miraclAuthToken', tokens.access_token, {
            maxAge: 3600000,
            httpOnly: true,
        });

        const decodedJwt = jwt.decode(req.cookies['localAuthToken']);

        res.status(200).json({
            info: userInfo,
            id: decodedJwt.id,
            username: decodedJwt.username,
            email: decodedJwt.email,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error });
    }
});

module.exports = router;
