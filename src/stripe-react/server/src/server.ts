import { createCheckoutSession } from './api/checkout';
import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express';

const app = express()
const port = 8001
app.use(express.json())
app.use(cors({origin: true}))

app.get('/', (request: Request, response: Response) => response.send('Hello coffee'))

app.post('/create-checkout-session', createCheckoutSession)

app.listen(port, () => console.log('server listening on port ', port))
