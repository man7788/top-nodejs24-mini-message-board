const db = require('../db/queries');

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', { title: 'Mini Messageboard', messages: messages });
}

async function getMessageForm(req, res) {
  res.render('form', { title: 'New Message' });
}

async function createMessage(req, res) {
  await db.createMessage({
    message: req.body.text,
    name: req.body.name,
    added: new Date(),
  });
  res.redirect('/');
}

module.exports = { getAllMessages, getMessageForm, createMessage };
