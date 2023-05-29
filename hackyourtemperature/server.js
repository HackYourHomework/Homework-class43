const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());

const path = {
  root: '/',
  weather: '/weather',
};

app.get(path.root, (req, res) => {
  res.send('hello from backend to frontend');
});
app.listen(port, () => {
  console.log('Server started');
});

app.post(path.weather, (req, res) => {
  const cityName = req.body.cityName;
  res.send(`City Name is ${cityName}`);
});
