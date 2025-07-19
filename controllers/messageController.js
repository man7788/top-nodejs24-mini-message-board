const db = require('../db');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

async function getMessage(req, res) {
  const { messageId } = req.params;
  const message = await db.getMessageById(Number(messageId));

  if (!message) {
    throw new CustomNotFoundError('Message not found');
  }

  res.render('messages/message', {
    message: message.text,
    user: message.user,
    added: message.added,
    id: message.id,
    newPage: true,
  });
}

module.exports = { getMessage };
