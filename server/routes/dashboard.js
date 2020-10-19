const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const user = require('../user');
const { Issuer } = require('openid-client');

const { id, secret, redirect_url, jwt_secret } = require('../env');

const router = express.Router();
router.use(express.json());
router.use(cookieParser());

router.use(
    cors({
        origin: 'http://localhost:3000',
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

router.get('/', async (req, res) => {
    try {
        const verify = await jwt.verify(
            req.cookies['localAuthToken'],
            jwt_secret
        );

        const userInfo = await client.userinfo(req.cookies['miraclAuthToken']);

        res.status(200).json({
            id: verify.id,
            miraclId: userInfo.id,
            username: verify.username,
            email: verify.email,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error });
    }
});

module.exports = router;
