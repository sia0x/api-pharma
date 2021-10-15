import User from '../../models/User';

const list = async (data) => {
  const { id } = data;

  let user = await User.findById(id);

  if (!user) return {};

  return user;
};

export default list;
