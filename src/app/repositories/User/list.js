import User from '../../models/User';

const list = async () => {
  let users = await User.find().sort({ imported_t: -1 });

  return users;
};

export default list;
