require('dotenv').config();

module.exports = {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
    redirect_url: process.env.REDIRECT_URL,
    jwt_secret: process.env.SECRET,
};
