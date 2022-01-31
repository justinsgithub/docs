import { Request, Response } from 'express';
import { validatePassword } from '../service/user.service';
import { createSession } from '../service/session.service';
import { signJwt} from '../utils/jwt.utils';
import config from 'config';

export const createUserSessionHandler = async (request: Request, response: Response) => {

    // validate the user's password 
    const user = await validatePassword(request.body);

    if (!user) return response.status(401).send('Invalid email or password');

    // create a session 

    const session = await createSession(user._id, request.get('user-agent') || '');

    // create an access token 

    const accessToken = signJwt(
        { ...user, session: session._id },
        {expiresIn: config.get('accessTokenTtl')} // 15 minutes
    );
    // create an access token 

    const refreshToken = signJwt(
        { ...user, session: session._id },
        {expiresIn: config.get('refreshTokenTtl')} // 1 year
    );

    // return access & refresh token

    return response.send({ accessToken, refreshToken })
};
