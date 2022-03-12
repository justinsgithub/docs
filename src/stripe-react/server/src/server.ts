import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express';
import * as dotenv from 'dotenv' 

dotenv.config()
const app = express()
const port = 8001
app.use(express.json())
app.use(cors({origin: true}))

app.get('/', (request: Request, response: Response) => response.send('Hello Coffee'))


app.listen(port, () => console.log('server listening on port ', port))
