const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');

// @route   GET api/weather/:city
// @desc    GET weather for city from Weather API
// @access  PUBLIC

router.get('/weather/:city', async (req, res) => {
  try {
    const REQ_URL = encodeURI(
      `https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${req.params.city}`
    );
    const headers = {
      'user-agent': 'node.js',
    };
    const response = await axios.get(REQ_URL);
    return res.json();
  } catch (e) {
    console.error(e.message);
    return res.status(404).json({ msg: `No city found. Error: ${e.message}` });
  }
});
module.exports = router;
