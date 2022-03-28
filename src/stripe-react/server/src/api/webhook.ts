import { Request, Response } from 'express';
import { stripeAPI } from '../stripe';
import { WEB_HOOK_SECRET } from '../.env';

export const webhook = (request: any, response: Response) => {
  const signature = request.headers['stripe-signature']
  let event: any

  try {
    event = stripeAPI.webhooks.constructEvent( request['rawBody'], signature, WEB_HOOK_SECRET)
  } catch (error: any) {
    return response.status(400).send(`Webhook error ${error?.message}`)
  }

  if (event && event.type === 'checkout.session.completed') {
    const session = event.data.object
  }
}