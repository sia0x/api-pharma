import UserController from '../app/controllers/UserController';

const users = (routes) => {
  routes.get('/', UserController.index);
  routes.get('/users', UserController.indexUser);
  routes.get('/users/:id', UserController.findById);
};

module.exports = users;
