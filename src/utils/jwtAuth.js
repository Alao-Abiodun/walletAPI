import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const { JWT_SECRET } = process.env;

function jwtGenerator(id) {
    const payload = {
        user: id
    };

    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1hr' });
}

export default jwtGenerator;