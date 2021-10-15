import express from 'express';
import './database';
import routes from './routes';
import cronImportUserData from './app/cron/importUser';
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.cronJobs();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  cronJobs() {
    cronImportUserData();
  }
}

export default new App().server;
