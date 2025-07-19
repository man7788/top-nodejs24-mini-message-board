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
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

indexRouter.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

indexRouter.post('/new', (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = indexRouter;
