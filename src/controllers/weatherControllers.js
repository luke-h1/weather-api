import asyncHandler from 'express-async-handler';
import axios from 'axios';

const city = asyncHandler(async (req, res) => {
  try {
    const request = await encodeURI(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${req.params.city}`,
    );
    const response = await axios.get(request);
    return res.status(200).json({ data: response.data, errors: [] });
  } catch (e) {
    console.error(e);
    throw new Error('No city found');
  }
});
export { city };
