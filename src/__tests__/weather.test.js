import request from 'supertest'
import { app } from '../server'

test('weather route should return 200', async () => {
  const response = await request(app).get('/api/city/weather/london')
  expect(response.statusCode).toBe(200)
})

test('Weather should have keys location & current', async () => {
  const response = await request(app).get('/api/city/weather/london')
  expect(response.body).toHaveProperty('data.location')
  expect(response.body).toHaveProperty('data.current')
  expect(response.body).toHaveProperty('data.location.region')
  expect(response.body).toHaveProperty('data.location.name')
  expect(response.body).toHaveProperty('data.location.region')
  expect(response.body).toHaveProperty('data.current.condition')
  expect(response.body).toHaveProperty('data.current.wind_mph')
  expect(response.body).toHaveProperty('data.current.feelslike_c')
})
