import express from 'express';
import fs from 'fs';
import authMiddleware from './app/middlewares/auth';

const route = express();

route.use(authMiddleware);

const autoloadRoutes = (route) => {
  fs.readdir(`${__dirname}/routes`, (err, files) => {
    if (err) {
      throw new Error(`error on load routes: ${err}`);
    }
    files.forEach((file) => {
      const module = require(`${__dirname}/routes/${file}`);
      module(route);
    });
  });
};
autoloadRoutes(route);

module.exports = route;
