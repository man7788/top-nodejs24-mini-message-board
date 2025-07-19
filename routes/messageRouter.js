const { Router } = require('express');
const db = require('../db.js');
const { getMessage } = require('../controllers/messageController');

const messageRouter = Router();

messageRouter.get('/message/:messageId', getMessage);

module.exports = messageRouter;
