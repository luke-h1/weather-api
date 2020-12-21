const express = require('express');


const app = express();

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.status(200).json({ msg: 'Welcome to the weather API' })
);

// define routing 
app.use('/api/city', require('./routes/api/city'))



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
