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
  expect(response.body).toHaveProperty('location.region')
  expect(response.body).toHaveProperty('location.name')
  expect(response.body).toHaveProperty('location.region')
  expect(response.body).toHaveProperty('current.condition')
  expect(response.body).toHaveProperty('current.wind_mph')
  expect(response.body).toHaveProperty('current.feelslike_c')

})

