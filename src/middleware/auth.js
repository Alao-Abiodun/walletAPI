import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

const { JWT_SECRET } = process.env

const auth = async (req, res, next) => {
    try {
        const token = req.header.token;
        // verify token given by the user;
        if (!token) {
            return res.status(403).json('No token, Authorization denied');
        }
        // Add user from the payload i.e embedded data(user id);
        const decoded = await jwt.verify(token, JWT_SECRET);
        // Assign the decoded token to the user;
        req.user = decoded.user
        next();
    } catch (err) {
        res.status(403).json('User is UnAuthorized');
    }
}

export default auth;