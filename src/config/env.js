let dotEnv = require('dotenv');

dotEnv = dotEnv.config();

module.exports = {
  PORT: process.env.PORT || 3001,
};
