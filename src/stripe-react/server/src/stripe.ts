import { SECRET_KEY } from './.env';
import stripe from 'stripe'

export const stripeAPI = new stripe(SECRET_KEY || '', { apiVersion: "2020-08-27" })