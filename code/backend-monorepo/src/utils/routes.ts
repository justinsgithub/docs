import { Express, Request, Response} from 'express';

const routes = (app:Express) => {
    app.get('/healthcheck', (request: Request, response: Response) => response.sendStatus(200));
}

export default routes;
