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

async function getAllMessages() {
  return messages;
}

async function getMessageById(messageId) {
  return messages.find((message) => message.id === messageId);
}

async function createMessage(message) {
  messages.push(message);
}

module.exports = { getAllMessages, getMessageById, createMessage };
