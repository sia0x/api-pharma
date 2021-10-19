import jwt from '../utils/jwt';

const auth = async (req, res, next) => {
  const { url } = req;

  if (url === '/' || url === '/session') {
    return next();
  }

  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ message: 'Token was not provided' });

  try {
    await jwt.decode(authorization);
    return next();
  } catch (error) {
    return res.status(403).json({ message: 'Token invalid' });
  }
};

export default auth;
