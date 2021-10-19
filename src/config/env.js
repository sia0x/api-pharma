let dotEnv = require('dotenv');

dotEnv = dotEnv.config();

module.exports = {
  PORT: process.env.PORT || 3001,
  secret: process.env.SECRET || 'confianca_eh_tudo',
  expiresIn: process.env.EXPIRES_IN,
};
