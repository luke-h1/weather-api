import request from 'supertest'
import { app } from '../server'

test('/ route should respond with 200 ok', async () => {
  const response = await request(app).get('/')
  expect(response.statusCode).toBe(200)
})

test('non-existent route should respond with 404', async () => {
  const response = await request(app).get('/blah/blah')
  expect(response.statusCode).toBe(404)
})