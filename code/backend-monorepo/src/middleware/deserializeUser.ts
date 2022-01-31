import { get } from 'lodash';
import { Request, Response, NextFunction} from 'express';
import { verifyJwt } from '../utils/jwt.utils';


const deserializeUser = (request: Request, response: Response, next: NextFunction) => {
    
    const accessToken = get(request, 'headers.authorization', '').replace(/^Bearer\s/, '');

    if(!accessToken) {
        return next();
    } 

    const {decoded, expired} = verifyJwt(accessToken);

    if (decoded) {
        response.locals.user = decoded;
        return next();
    }
    return next();
};

export default deserializeUser;
