const { Router } = require('express');
const db = require('../db.js');

const messageRouter = Router();

messageRouter.get('/message/:messageId', async (req, res) => {
  const { messageId } = req.params;
  const message = await db.getMessageById(Number(messageId));
  res.render('messages/message', {
    message: message.text,
    user: message.user,
    added: message.added,
    id: message.id,
    newPage: true,
  });
});

module.exports = messageRouter;
