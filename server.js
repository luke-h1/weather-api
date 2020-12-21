const express = require('express');
const cors = require('cors');

// init express
const app = express();

// Init CORS  
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.status(200).json({ msg: 'Welcome to the weather API' })
);

// define routing
app.use('/api/city', require('./routes/api/city'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
