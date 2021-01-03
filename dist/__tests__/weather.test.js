"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _server = require("../server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('weather route should return 200', async () => {
  const response = await (0, _supertest.default)(_server.app).get('/api/city/weather/london');
  expect(response.statusCode).toBe(200);
});