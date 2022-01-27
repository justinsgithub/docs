import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { getDbConnection } from '../db';

export const signUpRoute = {
    path: '/api/signup',
    method: 'post',
    handler: async (req, res) => {
        const { email, password } = req.body;

        const db = getDbConnection('react-auth-db');

        const user = await db.collection('users').findOne({ email });

        if (user) {
            res.sendStatus(409);
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const initialTechFavs = {
            webBrowser: '',
            textEditor: '',
            shell: '',
            operatingSystem: '',
            terminal: '',
        };
        const result = await db.collection('users').insertOne({
            email,
            passwordHash,
            info: initialTechFavs,
            isVerified: false,
        });
        const { insertedId } = result;

        jwt.sign(
            {
                id: insertedId,
                email,
                techFavs: initialTechFavs,
                isVerified: false,
            },
            process.env.JWT_SECRET,
            { expiresIn: '6d' },
            (err, token) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.status(200).json({ token });
            }
        );
    },
};
