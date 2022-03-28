import express, { Request, Response } from 'express';
import cors from 'cors'
import { createCheckoutSession } from './api/checkout';
import { webhook } from './api/webhook';
import { paymentIntent } from './api/paymentIntent';

const app = express()
const port = 8001
app.use(express.json({
  verify: (request: any, response: any, buffer: any) => request['rawBody'] = buffer
}))

app.use(cors({origin: true}))

app.get('/', (request: Request, response: Response) => response.send('Hello coffee'))

app.post('/create-checkout-session', createCheckoutSession)

app.post('/webhook', webhook)

app.post('/create-payment-intent', paymentIntent)

app.listen(port, () => console.log('server listening on port ', port))
