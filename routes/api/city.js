const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

// @route   GET api/city/:test
// @desc    GET test route
// @access  PUBLIC


router.get('/weather/:test', async (req, res) => {
  try {
    return res.status(200).json({ msg: `Search Params: ${req.params.test}` });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msg: `Internal server error, ${e.message}` });
  }
});

// @route     GET api/city/:city
// @desc      GET weather for city from Weather API
// @access    PUBLIC


router.get('/:city', async (req, res) => {
  try {
    const REQ_URL = encodeURI(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${req.params.city}`
    );
    
    const headers = {
      'user-agent': 'node.js',
    
    };
    const response = await axios.get(REQ_URL);
    return res.json(response.data);
  } catch (e) {
    console.error(e.message);
    return res.status(404).json({ msg: `No city found. Error: ${e.message}` });
  }
});
module.exports = router;
