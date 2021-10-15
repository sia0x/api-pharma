import express from 'express';
import fs from 'fs';

const route = express();

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
