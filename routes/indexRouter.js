const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.send('Home');
});

indexRouter.post('/new', (req, res) => {
  res.send('Message created');
});

module.exports = indexRouter;
