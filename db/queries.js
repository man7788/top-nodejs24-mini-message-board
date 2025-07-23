const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages;');
  return rows;
}

// async function getMessageById(messageId) {
//   return messages.find((message) => message.id === messageId);
// }

async function createMessage(message) {
  const query = {
    text: 'INSERT INTO messages (message, author, added) VALUES ($1, $2, $3)',
    values: [message.message, message.name, new Date()],
  };
  await pool.query(query);
}

module.exports = {
  getAllMessages,
  createMessage,
};
