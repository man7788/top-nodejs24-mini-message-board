const { Router } = require('express');
const {
  getAllMessages,
  getMessageForm,
  createMessage,
} = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', getAllMessages);

indexRouter.get('/new', getMessageForm);

indexRouter.post('/new', createMessage);

module.exports = indexRouter;
