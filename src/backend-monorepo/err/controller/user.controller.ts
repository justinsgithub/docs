import { Request, Response } from 'express';
import { CreateUserInput } from '../schema/user.schema';
import { createUser } from '../service/user.service';
import log from '../utils/log';

export const createUserHandler = async ( request: Request<{}, {}, CreateUserInput['body']>, response: Response) => {
    try {
        const user = await createUser(request.body); // call user service
        return response.send(user);
    } catch (error: any){
        log.error(error)
        return response.status(409).send(error.message)
    }
}
