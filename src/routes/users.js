import UserController from '../app/controllers/UserController';

const users = (routes) => {
  routes.get('/', UserController.index);
};

module.exports = users;
