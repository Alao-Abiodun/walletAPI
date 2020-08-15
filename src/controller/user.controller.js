import pool from '../model/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const { JWT_SECRET } = process.env;

class UserController {
    async signInUser(req, res) {
        try {
            const { fullName, email, userName, password } = req.body;
            const hashPassword = await bcrypt.hash(password, 8);
            const user = await pool.query(`INSERT INTO users (fullName, email, userName, password) 
            VALUES ($1, $2, $3, $4) RETURNING email, password`, [fullName, email, userName, hashPassword]);
            const token = jwt.sign({ user: user.rows[0].id }, JWT_SECRET, { expiresIn: '1day' });
            res.status(201).json({
                data: user.rows[0],
                token
            });
        } catch (err) {
            res.status(404).send(err);
            console.log(err);
        }
    }

    async LoginUser(req, res) {
        try {
            const { email, password } = req.body;
            // find user in the database through their email and check if it exist.
            const user = await pool.query(`SELECT email, userName, password FROM users WHERE email = $1`, [email]);

            // check if an value is in the field
            if (user.rows.length === 0) {
                return res.status(401).json('Password or email is incorrect');
            }

            // check if the password is correct with the one used for registration
            const isMatchPasswod = await bcrypt.compare(password, user.rows[0].password);
            if (!isMatchPasswod) {
                res.status(401).json('Password or email is incorrect');
            }
            // generate the same token during registration
            const token = jwt.sign({ user: user.rows[0].id }, JWT_SECRET, { expiresIn: '1day' });
            res.json({
                data: user.rows[0],
                token
            })
        } catch (err) {
            res.status(400).send(err);
        }
    }
}

export default new UserController();
