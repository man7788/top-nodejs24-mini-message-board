const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages;');
  return rows;
}

async function getMessageById(messageId) {
  const query = {
    text: 'SELECT * FROM messages WHERE id = ($1) LIMIT 1;',
    values: [messageId],
  };
  const { rows } = await pool.query(query);
  return rows;
}

async function createMessage(message) {
  const query = {
    text: 'INSERT INTO messages (message, author, added) VALUES ($1, $2, $3)',
    values: [message.message, message.name, new Date()],
  };
  await pool.query(query);
}

module.exports = {
  getAllMessages,
  getMessageById,
  createMessage,
};
