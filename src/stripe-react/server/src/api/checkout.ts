import { Request, Response } from 'express';
import { WEB_APP_URL } from '../.env';
import { Stripe } from 'stripe'
import { stripeAPI } from "../stripe";

export const createCheckoutSession = async( request: Request, response: Response) => {
  const domainUrl = WEB_APP_URL

  const { line_items, customer_email } = request.body

  console.log('body', request.body)

  if (!line_items || !customer_email) {
    return response.status(400).json({ error: 'missing required session paramaters'})
  } 

  let session: Stripe.Response<Stripe.Checkout.Session>

  try {
    session = await stripeAPI.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      customer_email,
      success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainUrl}/canceled`,
      shipping_address_collection: { allowed_countries: ['GB', 'US']}
    })
    response.status(200).json({ sessionId: session.id})
  } catch (error) {
    console.log(error)
    response.status(400).json({ error: 'an error occured, unable to create session'})
  }
}
