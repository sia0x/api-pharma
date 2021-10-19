import User from '../../models/User';
import jwt from '../../utils/jwt';

const session = async (data) => {
  let { username } = data;
  const { password } = data;

  const user = await User.findOne({
    'login.username': username,
    'login.password': password,
  });

  if (!user) return { message: 'Usuário ou senha inválidos' };

  const {
    login: { uuid },
  } = user;

  ({
    login: { username },
  } = user);

  if (!user) return { message: 'Usuário não foi encontrado!' };

  const token = jwt.encode({ uuid, username });

  return { token: token };
};

export default session;
