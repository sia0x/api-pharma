import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { secret, expiresIn } from '../../config/env';

export function encode(data) {
  const { uuid, username } = data;

  return jwt.sign(
    {
      uuid: 'teste',
      username: 'teste',
    },
    secret,
    {
      expiresIn,
    }
  );
}

export function decode(auth) {
  return promisify(jwt.verify)(auth, secret);
}

export default { encode, decode };
