import { Express, Request, Response} from 'express';
import { createUserSessionHandler, getUserSessionsHandler } from './controller/session.controller';
import { createUserHandler } from './controller/user.controller';
import { createUserSchema } from './schema/user.schema';
import { createSessionSchema } from './schema/session.schema';
import validateResource from './middleware/validateResource';
import requireUser from './middleware/requireUser';

const routes = (app: Express) => {
    
    app.get('/healthcheck', (request: Request, response: Response) => response.sendStatus(200));

    app.post('/api/users', validateResource(createUserSchema), createUserHandler);

    app.post('/api/sessions', validateResource(createSessionSchema), createUserSessionHandler);

    app.get('/api/sessions', requireUser, getUserSessionsHandler);
}

export default routes;
