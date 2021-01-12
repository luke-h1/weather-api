import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import weatherRouter from './resources/weather/weather.router.js'
import rateLimit from 'express-rate-limit'
const helmet = require('helmet')

export const app = express()
app.set('trust proxy', 1)

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 80, // limit each IP addr to 80 requests per 15 mins
  message: 'Too many requests from this IP. Try again in 15 minutes',
})

// set various headers
app.use(helmet())

// apply to all requests
app.use(limiter)

app.disable('x-powered-by')
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(express.json({ extended: false }))

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Welcome to the weather API 🔆 😎' })
})
// define routing
app.use('/api/city', weatherRouter)

const PORT = process.env.PORT || 8000

export const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`)
    })
  } catch (e) {
    console.error(e)
  }
}
