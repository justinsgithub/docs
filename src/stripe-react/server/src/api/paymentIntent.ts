import { stripeAPI } from "../stripe";
import { Request, Response } from "express";

// type later

interface CartItem {
  price: number 
  quantity: number
}

const calculateOrderAmount = (cartItems: CartItem[]) => cartItems.reduce((total, product) => total + product.price * product.quantity, 0) * 100

export const paymentIntent = async( request: Request, response: Response) => {
  const { cartItems, description, receipt_email, shipping } = request.body
  console.log("REQUEST", request)

  let paymentIntent

  try {
    paymentIntent = await stripeAPI.paymentIntents.create({
      amount: calculateOrderAmount(cartItems),
      currency: 'usd',
      description,
      payment_method_types: ['card'],
      receipt_email,
      shipping
    })

    response.status(200).json({ clientSecret: paymentIntent.client_secret})
  } catch (error: any) {
    console.log(error) 
    response.status(400).json({ error: 'an error occured, unable to create payment intent'})
  }

}
