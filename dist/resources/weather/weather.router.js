"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

const router = (0, _express.Router)(); // @route   GET api/city/:test
// @desc    GET test route
// @access  PUBLIC

router.get('/:test', async (req, res) => {
  try {
    return res.status(200).json({
      msg: `Search Params: ${req.params.test}`
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      msg: `Internal server error, ${e.message}`
    });
  }
}); // @route     GET api/city/:city
// @desc      GET weather for city from Weather API
// @access    PUBLIC

router.get('/weather/:city', async (req, res) => {
  try {
    const REQ = await encodeURI(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${req.params.city}`); // const headers = {
    //   'user-agent': 'node.js',
    // }

    const response = await _axios.default.get(REQ);
    return res.json(response.data);
  } catch (e) {
    console.error(e.message);
    return res.status(404).json({
      msg: `No city found. Error: ${e.message}`
    });
  }
});
var _default = router;
exports.default = _default;