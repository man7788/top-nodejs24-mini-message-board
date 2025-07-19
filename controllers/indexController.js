const db = require('../db');

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();

  res.render('index', { title: 'Mini Messageboard', messages: messages });
}

async function getMessageForm(req, res) {
  res.render('form', { title: 'New Message' });
}

async function createMessage(req, res) {
  const count = await db.getMessageCount();
  await db.createMessage({
    id: count + 1,
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect('/');
}

module.exports = { getAllMessages, getMessageForm, createMessage };
