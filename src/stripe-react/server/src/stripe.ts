import stripe from 'stripe'

export const stripeAPI = new stripe(process.env.SECRET_KEY || '', { apiVersion: "2020-08-27" })

console.log(process.env.SECRET_KEY)
