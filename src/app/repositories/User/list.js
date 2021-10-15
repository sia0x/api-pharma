import User from '../../models/User';

const list = async () => {
  let users = await User.find();

  return users;
};

export default list;
