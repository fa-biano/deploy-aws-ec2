const express = require('express');
const axios = require('axios');
const { Dog } = require('./database/models');

const app = express();
const port = 3000;

const indexPage = `
  <h3>Hello from a Node.js Application running on AWS EC2</h3>
  <p>What would you like to see?</p>
  <ul>
    <li>Random Dogs? <a href='/dogs'>Click here</a></li>
  </ul>
`
app.use(express.json());
app.get('/', (_req, res) => res.send(indexPage));
app.get('/healthcheck', (_req, res) => {
  try {
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.get('/dogs', async (_req, res) => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(JSON.stringify(response.data));

    const { message: dogImage } = response.data;
    res.send(
      `<img src='${dogImage}' alt='random-dog' style='max-width: 500px' />`
    );

  } catch (error) {
    console.error(error);
    res.status(500);
    res.send(error.message);
  }
});

app.get('/data', async(_req, res) => {
  try {
    const dogs = await Dog.findAll();
    return res.status(200).json(dogs);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));