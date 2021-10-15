import mongoose from 'mongoose';
import env from '../config/env';

class ConnectMongo {
  constructor() {
    this.startConnection();
  }

  startConnection() {
    try {
      mongoose.connect(env.DB_MONGO || 'mongodb://localhost:27017/pharma', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      throw new Error('Nao foi possivel se conectar ao mongo');
    }
  }
}

export default new ConnectMongo();
