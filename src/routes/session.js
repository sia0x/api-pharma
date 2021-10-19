import SessionController from '../app/controllers/SessionController';

const session = (routes) => {
  routes.get('/session', SessionController.session);
};

module.exports = session;
