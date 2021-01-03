import request from 'supertest'
import { app } from '../server'

test('weather route should return 200', async () => {
  const response = await request(app).get('/api/city/weather/london')
  expect(response.statusCode).toBe(200)
})
