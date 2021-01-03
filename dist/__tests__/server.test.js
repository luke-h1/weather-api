"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _server = require("../server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('/ route should respond with 200 ok', async () => {
  const response = await (0, _supertest.default)(_server.app).get('/');
  expect(response.statusCode).toBe(200);
});
test('non-existent route should respond with 404', async () => {
  const response = await (0, _supertest.default)(_server.app).get('/blah/blah');
  expect(response.statusCode).toBe(404);
});