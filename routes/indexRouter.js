const { Router } = require('express');
const db = require('../db.js');

const indexRouter = Router();

indexRouter.get('/', async (req, res) => {
  const messages = await db.getAllMessages();
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

indexRouter.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

indexRouter.post('/new', async (req, res) => {
  const count = await db.getMessageCount();
  await db.createMessage({
    id: count + 1,
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = indexRouter;
