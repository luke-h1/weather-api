import request from 'supertest'
import { app } from '../server'

test('weather route should return 200', async () => {
  const response = await request(app).get('/api/city/weather/london')
  expect(response.statusCode).toBe(200)
})

test('Weather should have keys location & current', async () => {
  const response = await request(app).get('/api/city/weather/london')
  expect(response.body).toHaveProperty('location')
  expect(response.body).toHaveProperty('current')
})
