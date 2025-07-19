const { Router } = require('express');

const indexRouter = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
  {
    text: "What's up?",
    user: 'David',
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.send('Home');
});

indexRouter.post('/new', (req, res) => {
  res.send('Message created');
});

module.exports = indexRouter;
