const db = require('../db/queries');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

async function getMessage(req, res) {
  const { messageId } = req.params;
  const result = await db.getMessageById(Number(messageId));
  const message = result[0];

  if (!message) {
    throw new CustomNotFoundError('Message not found');
  }

  res.render('messages/message', {
    message: message.message,
    user: message.author,
    added: message.added,
    newPage: true,
  });
}

module.exports = { getMessage };
